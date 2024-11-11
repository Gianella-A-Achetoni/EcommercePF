import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { Op } from 'sequelize';
import bcrypt from 'bcrypt';
import Zapatilla from './models/Zapatilla.js';
import zapatillasRoutes from './routes/zapatillas.js';
import { sequelize } from './database.js';
import User from './models/User.js';
import nodemailer from 'nodemailer';
import contactosRouter from './routes/contacto.js'; // Importa la ruta de contactos
import dotenv from 'dotenv';
dotenv.config();
process.noDeprecation = true;
import { MercadoPagoConfig, Preference } from "mercadopago";
import preloadUser from './preload/preloadUser.js';
import preloadZapatillas from './preload/preloadZapatillas.js';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtén el directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(cors());

app.use(express.static(path.join(process.cwd(), 'client/HTML'))); // Sirve archivos estáticos desde el directorio HTML

app.use(express.json("public"));


const client = new MercadoPagoConfig({
    accessToken: "APP_USR-4972073114495345-103120-338493e48fae37002dac5c0d9b25562d-2068419215",
});


app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'client', "/client/HTML/index.js"));
});
app.get("/inicio", (req, res) =>{res.sendFile(path.join(__dirname, "incioo.js"));});
app.get("/contacten", (req,res) =>{res.sendFile(path.join(__dirname, "contacten.js"));});
app.get("/login", (req,res) =>{res.sendFile(path.join(__dirname, "login.js"))});

app.get("/success", (req, res) => {
    const paymentId = req.query.payment_id; // Ejemplo de cómo capturar un parámetro
    res.send(`La compra fue exitosa. ¡Gracias por tu compra! ID de Pago: ${paymentId}`);
});

app.get("/failure", (req, res) => {
    res.send("La compra falló. Por favor, intenta de nuevo.");
});

app.get("/pending", (req, res) => {
    res.send("La compra está pendiente. Te notificaremos cuando haya una actualización.");
});


app.post("/create_preference", async (req, res) => {
    console.log("Datos recibidos:", req.body); // Log de datos recibidos
    try {
        // Verifica que price sea mayor que cero
        const price = Number(req.body.price);
        console.log(price)
        if (price <= 0) {
            return res.status(400).json({ error: "El precio debe ser mayor que cero." });
        }

        const body = {
            items: [
                {
                    title: String(req.body.title),
                    quantity: Number(req.body.quantity),
                    unit_price: parseFloat(price),
                    currency_id: "ARS",
                },
            ],
            back_urls: {
                success: "http://localhost:4001/success", 
                failure: "http://localhost:4001/failure", 
                pending: "http://localhost:4001/pending", 
            },            
            auto_return: "approved",
        };

        console.log("Cuerpo de la preferencia:", JSON.stringify(body, null, 2));
        console.log(body)
        const preference = new Preference(client);
        console.log(preference)
        const result = await preference.create({body});

        res.json({
            id: result.id,
        });
    } catch (error) {
        console.log("Error al crear preferencia:", error); // Log del error
        res.status(500).json({
            error: "Error al crear preferencia",
        });
    }
});


// Usa las rutas
app.use('/api/contactos', contactosRouter); // Define la ruta base para contactos

// Ruta para obtener la lista de usuarios
app.get('/api/user', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).send('Error al obtener usuarios');
  }
});

app.post('/api/user', async (req, res) => {
  try {
    const { username, userpassword, useremail, edad } = req.body;

    // Verificar si el email ya está en uso
    const usuarioExistente = await User.findOne({ where: { useremail } });
    if (usuarioExistente) {
      return res.status(400).json({ message: 'El correo electrónico ya está en uso' });
    }

    // Crea el nuevo usuario
    const nuevoUsuario = await User.create({
      username,
      userpassword,
      useremail,
      edad,
    });

    res.status(201).json({ message: 'Usuario registrado con éxito', usuario: nuevoUsuario });
  } catch (error) {
    console.error("Error al crear el usuario:", error); // Esto es clave para ver el error real
    if (error instanceof Sequelize.ValidationError) {
      return res.status(400).json({ message: error.errors.map(err => err.message) });
    }
    res.status(500).json({ message: 'Error al registrar usuario' });
  }
});

// Ruta para obtener información de un usuario específico por su username
app.get('/api/user/:username', async (req, res) => {
  const { username } = req.params;

  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado.' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error al obtener el usuario:", error);
    res.status(500).json({ message: 'Error al obtener el usuario' });
  }
});

// Configuración de Nodemailer
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true para puerto 465, false para otros puertos
  auth: {
    user: 'codigofrsr@gmail.com',
    pass: 'sdlz gkzh bvrw ixyi',
  },
});

// Ruta para restablecer la contraseña
app.post('/api/user/reset-password', async (req, res) => {
  const { useremail } = req.body;

  try {
    const user = await User.findOne({ where: { useremail } });

    if (!user) {
      return res.status(404).json({ message: 'No se encontró una cuenta asociada a este correo electrónico.' });
    }

    // Aquí puedes definir el contenido del correo
    const mailOptions = {
      from: 'codigofrsr@gmail.com',
      to: useremail,
      subject: 'Restablecimiento de Contraseña',
      text: `Hola, aquí tienes tus credenciales:\n\nUsuario: ${user.username}\nContraseña: ${user.userpassword}`,
    };

    // Envía el correo
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Se ha enviado un correo con tus credenciales.' });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    res.status(500).json({ message: 'Error al restablecer la contraseña.' });
  }
});

app.get('/api/zapatillas', async (req, res) => {
  try {
    // Obtener los parámetros de consulta (query parameters)
    const { search, color, talle, marca, ordenarPor } = req.query;

    // Crear el objeto "where" para los filtros
    let whereClause = {}; // Asegúrate de definir la variable aquí

    // Agregar el filtro de búsqueda si está presente
    if (search) {
      whereClause.nombre = {
        [Op.like]: `%${search}%`, // Filtrar productos cuyo nombre contenga el término de búsqueda
      };
    }

    // Agregar los filtros si están presentes en los parámetros de consulta
    if (color) {
      whereClause.color = color;
    }
    if (talle) {
      whereClause.talle = talle;
    }
    if (marca) {
      whereClause.marca = marca;
    }

    // Crear el objeto "order" para la ordenación
    let orderClause = [];
    if (ordenarPor === 'menorMayor') {
      orderClause = [['precio', 'ASC']];
    } else if (ordenarPor === 'mayorMenor') {
      orderClause = [['precio', 'DESC']];
    } else if (ordenarPor === 'novedades') {
      orderClause = [['createdAt', 'DESC']]; // Suponiendo que tienes un campo createdAt para novedades
    }

    // Consultar la base de datos con los filtros y ordenación
    const zapatillas = await Zapatilla.findAll({
      where: whereClause,
      order: orderClause,
    });

    res.json(zapatillas);
  } catch (error) {
    console.error("Error al obtener los productos:", error); // Imprime el error detallado
    res.status(500).json({ message: "Error al obtener los productos", error: error.message }); // Devuelve el mensaje de error
  }
});

const PORT = process.env.PORT || 4001;

app.listen(4001, () => {
  preloadUser();
  preloadZapatillas();
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

