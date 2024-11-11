import Zapatillas from '../models/Zapatilla.js';

const zapatillas =[
	{
		"id" : 26,
		"nombre" : "Adidas Superstar",
		"color" : "Roja",
		"talle" : 43,
		"marca" : "Adidas",
		"precio" : 135.00,
		"url_imagen" : "https://raw.githubusercontent.com/CodeStrong2023/Codigo33-12_E-commerce/refs/heads/Sofia_Lopez/client/Imagenes/AdidasSuperstar/AdidasSuperstarRoja.png",
		"stock" : 2,
		"createdAt" : "2024-10-14 17:47:23",
		"updatedAt" : "2024-11-06 18:45:59"
	},
	{
		"id" : 27,
		"nombre" : "Adidas Superstar 1",
		"color" : "Blanco",
		"talle" : 39,
		"marca" : "Adidas",
		"precio" : 135.00,
		"url_imagen" : "https://raw.githubusercontent.com/CodeStrong2023/Codigo33-12_E-commerce/refs/heads/Sofia_Lopez/client/Imagenes/AdidasSuperstar/adidassuperstar.png",
		"stock" : 10,
		"createdAt" : "2024-10-14 17:47:23",
		"updatedAt" : "2024-11-06 18:45:59"
	},
	{
		"id" : 28,
		"nombre" : "Adidas Superstar 1",
		"color" : "Blanco",
		"talle" : 38,
		"marca" : "Adidas",
		"precio" : 135.00,
		"url_imagen" : "https://raw.githubusercontent.com/CodeStrong2023/Codigo33-12_E-commerce/refs/heads/Sofia_Lopez/client/Imagenes/AdidasSuperstar/adidassuperstar.png",
		"stock" : 10,
		"createdAt" : "2024-10-14 17:47:23",
		"updatedAt" : "2024-11-06 18:45:59"
	},
	{
		"id" : 29,
		"nombre" : "Adidas Superstar",
		"color" : "Blanco",
		"talle" : 37,
		"marca" : "Adidas",
		"precio" : 135.00,
		"url_imagen" : "https://raw.githubusercontent.com/CodeStrong2023/Codigo33-12_E-commerce/refs/heads/Sofia_Lopez/client/Imagenes/AdidasSuperstar/pngwing.com.png",
		"stock" : 10,
		"createdAt" : "2024-10-14 17:47:23",
		"updatedAt" : "2024-11-06 18:45:59"
	},
	{
		"id" : 30,
		"nombre" : "Adidas Superstar",
		"color" : "Blanco",
		"talle" : 38,
		"marca" : "Adidas",
		"precio" : 135.00,
		"url_imagen" : "https://raw.githubusercontent.com/CodeStrong2023/Codigo33-12_E-commerce/refs/heads/Sofia_Lopez/client/Imagenes/AdidasSuperstar/pngwing.com.png",
		"stock" : 10,
		"createdAt" : "2024-10-14 17:47:23",
		"updatedAt" : "2024-11-06 18:45:59"
	},
	{
		"id" : 31,
		"nombre" : "Adidas Superstar",
		"color" : "Blanco",
		"talle" : 36,
		"marca" : "Adidas",
		"precio" : 135.00,
		"url_imagen" : "https://raw.githubusercontent.com/CodeStrong2023/Codigo33-12_E-commerce/refs/heads/Sofia_Lopez/client/Imagenes/AdidasSuperstar/pngwing.com.png",
		"stock" : 10,
		"createdAt" : "2024-10-14 17:47:23",
		"updatedAt" : "2024-11-06 18:45:59"
	},
	{
		"id" : 32,
		"nombre" : "Adidas Superstar",
		"color" : "Blanco",
		"talle" : 40,
		"marca" : "Adidas",
		"precio" : 135.00,
		"url_imagen" : "https://raw.githubusercontent.com/CodeStrong2023/Codigo33-12_E-commerce/refs/heads/Sofia_Lopez/client/Imagenes/AdidasSuperstar/pngwing.com.png",
		"stock" : 10,
		"createdAt" : "2024-10-14 17:47:23",
		"updatedAt" : "2024-11-06 18:45:59"
	},
	{
		"id" : 33,
		"nombre" : "Nike Dunk",
		"color" : "Azul",
		"talle" : 39,
		"marca" : "Nike",
		"precio" : 200.00,
		"url_imagen" : "https://raw.githubusercontent.com/CodeStrong2023/Codigo33-12_E-commerce/refs/heads/Sofia_Lopez/client/Imagenes/Nike%20Dunk/NikeDunkAzul.png",
		"stock" : 10,
		"createdAt" : "2024-10-14 17:57:37",
		"updatedAt" : "2024-11-06 18:45:59"
	},
	{
		"id" : 34,
		"nombre" : "Nike Dunk",
		"color" : "Azul",
		"talle" : 40,
		"marca" : "Nike",
		"precio" : 200.00,
		"url_imagen" : "https://raw.githubusercontent.com/CodeStrong2023/Codigo33-12_E-commerce/refs/heads/Sofia_Lopez/client/Imagenes/Nike%20Dunk/NikeDunkAzul.png",
		"stock" : 5,
		"createdAt" : "2024-10-14 17:57:37",
		"updatedAt" : "2024-11-06 18:45:59"
	},
	{
		"id" : 35,
		"nombre" : "Nike Dunk",
		"color" : "Azul",
		"talle" : 42,
		"marca" : "Nike",
		"precio" : 200.00,
		"url_imagen" : "https://raw.githubusercontent.com/CodeStrong2023/Codigo33-12_E-commerce/refs/heads/Sofia_Lopez/client/Imagenes/Nike%20Dunk/NikeDunkAzul.png",
		"stock" : 5,
		"createdAt" : "2024-10-14 17:57:37",
		"updatedAt" : "2024-11-06 18:45:59"
	},
	{
		"id" : 36,
		"nombre" : "Nike Dunk",
		"color" : "Negro",
		"talle" : 38,
		"marca" : "Nike",
		"precio" : 190.00,
		"url_imagen" : "https://raw.githubusercontent.com/CodeStrong2023/Codigo33-12_E-commerce/refs/heads/Sofia_Lopez/client/Imagenes/Nike%20Dunk/NikeDunkNegro.png",
		"stock" : 11,
		"createdAt" : "2024-10-14 17:57:37",
		"updatedAt" : "2024-11-06 18:45:59"
	},
	{
		"id" : 37,
		"nombre" : "Nike Dunk",
		"color" : "Negro",
		"talle" : 39,
		"marca" : "Nike",
		"precio" : 190.00,
		"url_imagen" : "https://raw.githubusercontent.com/CodeStrong2023/Codigo33-12_E-commerce/refs/heads/Sofia_Lopez/client/Imagenes/Nike%20Dunk/NikeDunkNegro.png",
		"stock" : 10,
		"createdAt" : "2024-10-14 17:57:37",
		"updatedAt" : "2024-11-06 18:45:59"
	},
	{
		"id" : 38,
		"nombre" : "Nike Dunk",
		"color" : "Negro",
		"talle" : 40,
		"marca" : "Nike",
		"precio" : 190.00,
		"url_imagen" : "https://raw.githubusercontent.com/CodeStrong2023/Codigo33-12_E-commerce/refs/heads/Sofia_Lopez/client/Imagenes/Nike%20Dunk/NikeDunkNegro.png",
		"stock" : 10,
		"createdAt" : "2024-10-14 17:57:37",
		"updatedAt" : "2024-11-06 18:45:59"
	},
	{
		"id" : 39,
		"nombre" : "Nike Dunk",
		"color" : "Negro",
		"talle" : 42,
		"marca" : "Nike",
		"precio" : 190.00,
		"url_imagen" : "https://raw.githubusercontent.com/CodeStrong2023/Codigo33-12_E-commerce/refs/heads/Sofia_Lopez/client/Imagenes/Nike%20Dunk/NikeDunkNegro.png",
		"stock" : 5,
		"createdAt" : "2024-10-14 17:57:37",
		"updatedAt" : "2024-11-06 18:45:59"
	},
	{
		"id" : 40,
		"nombre" : "Nike Dunk",
		"color" : "Negro",
		"talle" : 43,
		"marca" : "Nike",
		"precio" : 190.00,
		"url_imagen" : "https://raw.githubusercontent.com/CodeStrong2023/Codigo33-12_E-commerce/refs/heads/Sofia_Lopez/client/Imagenes/Nike%20Dunk/NikeDunkNegro.png",
		"stock" : 5,
		"createdAt" : "2024-10-14 17:57:37",
		"updatedAt" : "2024-11-06 18:45:59"
	},
	{
		"id" : 41,
		"nombre" : "Nike Dunk",
		"color" : "Verde",
		"talle" : 37,
		"marca" : "Nike",
		"precio" : 200.00,
		"url_imagen" : "https://raw.githubusercontent.com/CodeStrong2023/Codigo33-12_E-commerce/refs/heads/Sofia_Lopez/client/Imagenes/Nike%20Dunk/NikeDunkVerde.png",
		"stock" : 5,
		"createdAt" : "2024-10-14 17:57:37",
		"updatedAt" : "2024-11-06 18:45:59"
	},
	{
		"id" : 42,
		"nombre" : "Nike Dunk",
		"color" : "Verde",
		"talle" : 38,
		"marca" : "Nike",
		"precio" : 200.00,
		"url_imagen" : "https://raw.githubusercontent.com/CodeStrong2023/Codigo33-12_E-commerce/refs/heads/Sofia_Lopez/client/Imagenes/Nike%20Dunk/NikeDunkVerde.png",
		"stock" : 5,
		"createdAt" : "2024-10-14 17:57:37",
		"updatedAt" : "2024-11-06 18:45:59"
	},
	{
		"id" : 43,
		"nombre" : "Nike Dunk",
		"color" : "Verde",
		"talle" : 39,
		"marca" : "Nike",
		"precio" : 200.00,
		"url_imagen" : "https://raw.githubusercontent.com/CodeStrong2023/Codigo33-12_E-commerce/refs/heads/Sofia_Lopez/client/Imagenes/Nike%20Dunk/NikeDunkVerde.png",
		"stock" : 5,
		"createdAt" : "2024-10-14 17:57:37",
		"updatedAt" : "2024-11-06 18:45:59"
	},
	{
		"id" : 44,
		"nombre" : "Nike Dunk",
		"color" : "Verde",
		"talle" : 42,
		"marca" : "Nike",
		"precio" : 200.00,
		"url_imagen" : "https://raw.githubusercontent.com/CodeStrong2023/Codigo33-12_E-commerce/refs/heads/Sofia_Lopez/client/Imagenes/Nike%20Dunk/NikeDunkVerde.png",
		"stock" : 5,
		"createdAt" : "2024-10-14 17:57:37",
		"updatedAt" : "2024-11-06 18:45:59"
	},
	{
		"id" : 45,
		"nombre" : "Nike Air Force 1",
		"color" : "Blanco",
		"talle" : 39,
		"marca" : "Nike",
		"precio" : 170.00,
		"url_imagen" : "https://raw.githubusercontent.com/CodeStrong2023/Codigo33-12_E-commerce/refs/heads/Sofia_Lopez/client/Imagenes/NikeAirForce1/NikeAirForce1Blanca.png",
		"stock" : 10,
		"createdAt" : "2024-10-14 18:04:30",
		"updatedAt" : "2024-11-06 18:45:59"
	},
	{
		"id" : 46,
		"nombre" : "Nike Air Force 1",
		"color" : "Blanco",
		"talle" : 38,
		"marca" : "Nike",
		"precio" : 170.00,
		"url_imagen" : "https://raw.githubusercontent.com/CodeStrong2023/Codigo33-12_E-commerce/refs/heads/Sofia_Lopez/client/Imagenes/NikeAirForce1/NikeAirForce1Blanca.png",
		"stock" : 10,
		"createdAt" : "2024-10-14 18:04:30",
		"updatedAt" : "2024-11-06 18:45:59"
	},
	{
		"id" : 47,
		"nombre" : "Nike Air Force 1",
		"color" : "Blanco",
		"talle" : 41,
		"marca" : "Nike",
		"precio" : 170.00,
		"url_imagen" : "https://raw.githubusercontent.com/CodeStrong2023/Codigo33-12_E-commerce/refs/heads/Sofia_Lopez/client/Imagenes/NikeAirForce1/NikeAirForce1Blanca.png",
		"stock" : 5,
		"createdAt" : "2024-10-14 18:04:30",
		"updatedAt" : "2024-11-06 18:45:59"
	},
	{
		"id" : 48,
		"nombre" : "Nike Air Force 1",
		"color" : "Blanco",
		"talle" : 42,
		"marca" : "Nike",
		"precio" : 170.00,
		"url_imagen" : "https://raw.githubusercontent.com/CodeStrong2023/Codigo33-12_E-commerce/refs/heads/Sofia_Lopez/client/Imagenes/NikeAirForce1/NikeAirForce1Blanca.png",
		"stock" : 5,
		"createdAt" : "2024-10-14 18:04:30",
		"updatedAt" : "2024-11-06 18:45:59"
	},
	{
		"id" : 49,
		"nombre" : "Nike Air Force 1",
		"color" : "Verde",
		"talle" : 40,
		"marca" : "Nike",
		"precio" : 180.00,
		"url_imagen" : "https://raw.githubusercontent.com/CodeStrong2023/Codigo33-12_E-commerce/refs/heads/Sofia_Lopez/client/Imagenes/NikeAirForce1/NikeAirForce1Verde.png",
		"stock" : 5,
		"createdAt" : "2024-10-14 18:04:30",
		"updatedAt" : "2024-11-06 18:45:59"
	},
	{
		"id" : 50,
		"nombre" : "Nike Air Force 1",
		"color" : "Verde",
		"talle" : 42,
		"marca" : "Nike",
		"precio" : 180.00,
		"url_imagen" : "https://raw.githubusercontent.com/CodeStrong2023/Codigo33-12_E-commerce/refs/heads/Sofia_Lopez/client/Imagenes/NikeAirForce1/NikeAirForce1Verde.png",
		"stock" : 4,
		"createdAt" : "2024-10-14 18:04:30",
		"updatedAt" : "2024-11-06 18:45:59"
	},
	{
		"id" : 51,
		"nombre" : "Nike Air Force 1",
		"color" : "Verde",
		"talle" : 41,
		"marca" : "Nike",
		"precio" : 180.00,
		"url_imagen" : "https://raw.githubusercontent.com/CodeStrong2023/Codigo33-12_E-commerce/refs/heads/Sofia_Lopez/client/Imagenes/NikeAirForce1/NikeAirForce1Verde.png",
		"stock" : 5,
		"createdAt" : "2024-10-14 18:04:30",
		"updatedAt" : "2024-11-06 18:45:59"
	},
	{
		"id" : 52,
		"nombre" : "Puma XR-S",
		"color" : "Blanco",
		"talle" : 38,
		"marca" : "Puma",
		"precio" : 210.00,
		"url_imagen" : "https://raw.githubusercontent.com/CodeStrong2023/Codigo33-12_E-commerce/refs/heads/Sofia_Lopez/client/Imagenes/PumaRS-X/395339-03-1_grande.webp",
		"stock" : 5,
		"createdAt" : "2024-10-14 18:09:09",
		"updatedAt" : "2024-11-06 18:45:59"
	},
	{
		"id" : 53,
		"nombre" : "Puma XR-S",
		"color" : "Blanco",
		"talle" : 39,
		"marca" : "Puma",
		"precio" : 210.00,
		"url_imagen" : "https://raw.githubusercontent.com/CodeStrong2023/Codigo33-12_E-commerce/refs/heads/Sofia_Lopez/client/Imagenes/PumaRS-X/395339-03-1_grande.webp",
		"stock" : 10,
		"createdAt" : "2024-10-14 18:09:09",
		"updatedAt" : "2024-11-06 18:45:59"
	},
	{
		"id" : 54,
		"nombre" : "Puma XR-S",
		"color" : "Blanco",
		"talle" : 40,
		"marca" : "Puma",
		"precio" : 210.00,
		"url_imagen" : "https://raw.githubusercontent.com/CodeStrong2023/Codigo33-12_E-commerce/refs/heads/Sofia_Lopez/client/Imagenes/PumaRS-X/395339-03-1_grande.webp",
		"stock" : 10,
		"createdAt" : "2024-10-14 18:09:09",
		"updatedAt" : "2024-11-06 18:45:59"
	},
	{
		"id" : 55,
		"nombre" : "Puma XR-S",
		"color" : "Blanco",
		"talle" : 41,
		"marca" : "Puma",
		"precio" : 210.00,
		"url_imagen" : "https://raw.githubusercontent.com/CodeStrong2023/Codigo33-12_E-commerce/refs/heads/Sofia_Lopez/client/Imagenes/PumaRS-X/395339-03-1_grande.webp",
		"stock" : 5,
		"createdAt" : "2024-10-14 18:09:09",
		"updatedAt" : "2024-11-06 18:45:59"
	},
	{
		"id" : 56,
		"nombre" : "Puma XR-S",
		"color" : "Blanco",
		"talle" : 42,
		"marca" : "Puma",
		"precio" : 210.00,
		"url_imagen" : "https://raw.githubusercontent.com/CodeStrong2023/Codigo33-12_E-commerce/refs/heads/Sofia_Lopez/client/Imagenes/PumaRS-X/395339-03-1_grande.webp",
		"stock" : 5,
		"createdAt" : "2024-10-14 18:09:09",
		"updatedAt" : "2024-11-06 18:45:59"
	},
	{
		"id" : 57,
		"nombre" : "Puma XR-S",
		"color" : "Negro",
		"talle" : 39,
		"marca" : "Puma",
		"precio" : 210.00,
		"url_imagen" : "https://raw.githubusercontent.com/CodeStrong2023/Codigo33-12_E-commerce/refs/heads/Sofia_Lopez/client/Imagenes/PumaRS-X/PumaRS-XNegro.png",
		"stock" : 10,
		"createdAt" : "2024-10-14 18:09:09",
		"updatedAt" : "2024-11-06 18:45:59"
	},
	{
		"id" : 58,
		"nombre" : "Puma XR-S",
		"color" : "Negro",
		"talle" : 38,
		"marca" : "Puma",
		"precio" : 210.00,
		"url_imagen" : "https://raw.githubusercontent.com/CodeStrong2023/Codigo33-12_E-commerce/refs/heads/Sofia_Lopez/client/Imagenes/PumaRS-X/PumaRS-XNegro.png",
		"stock" : 10,
		"createdAt" : "2024-10-14 18:09:09",
		"updatedAt" : "2024-11-06 18:45:59"
	},
	{
		"id" : 59,
		"nombre" : "Puma XR-S",
		"color" : "Negro",
		"talle" : 40,
		"marca" : "Puma",
		"precio" : 210.00,
		"url_imagen" : "https://raw.githubusercontent.com/CodeStrong2023/Codigo33-12_E-commerce/refs/heads/Sofia_Lopez/client/Imagenes/PumaRS-X/PumaRS-XNegro.png",
		"stock" : 5,
		"createdAt" : "2024-10-14 18:09:09",
		"updatedAt" : "2024-11-06 18:45:59"
	},
	{
		"id" : 60,
		"nombre" : "Puma XR-S",
		"color" : "Negro",
		"talle" : 42,
		"marca" : "Puma",
		"precio" : 210.00,
		"url_imagen" : "https://raw.githubusercontent.com/CodeStrong2023/Codigo33-12_E-commerce/refs/heads/Sofia_Lopez/client/Imagenes/PumaRS-X/PumaRS-XNegro.png",
		"stock" : 5,
		"createdAt" : "2024-10-14 18:09:09",
		"updatedAt" : "2024-11-06 18:45:59"
	},
	{
		"id" : 61,
		"nombre" : "Puma Suede",
		"color" : "Blanco",
		"talle" : 38,
		"marca" : "Puma",
		"precio" : 190.00,
		"url_imagen" : "https://raw.githubusercontent.com/CodeStrong2023/Codigo33-12_E-commerce/refs/heads/Sofia_Lopez/client/Imagenes/PumaSuede/PumaSuedeBlanca.png",
		"stock" : 5,
		"createdAt" : "2024-10-14 18:13:55",
		"updatedAt" : "2024-11-06 18:45:59"
	},
	{
		"id" : 62,
		"nombre" : "Puma Suede",
		"color" : "Blanco",
		"talle" : 39,
		"marca" : "Puma",
		"precio" : 190.00,
		"url_imagen" : "https://raw.githubusercontent.com/CodeStrong2023/Codigo33-12_E-commerce/refs/heads/Sofia_Lopez/client/Imagenes/PumaSuede/PumaSuedeBlanca.png",
		"stock" : 5,
		"createdAt" : "2024-10-14 18:13:55",
		"updatedAt" : "2024-11-06 18:45:59"
	},
	{
		"id" : 63,
		"nombre" : "Puma Suede",
		"color" : "Blanco",
		"talle" : 40,
		"marca" : "Puma",
		"precio" : 190.00,
		"url_imagen" : "https://raw.githubusercontent.com/CodeStrong2023/Codigo33-12_E-commerce/refs/heads/Sofia_Lopez/client/Imagenes/PumaSuede/PumaSuedeBlanca.png",
		"stock" : 10,
		"createdAt" : "2024-10-14 18:13:55",
		"updatedAt" : "2024-11-06 18:45:59"
	},
	{
		"id" : 64,
		"nombre" : "Puma Suede",
		"color" : "Blanco",
		"talle" : 41,
		"marca" : "Puma",
		"precio" : 190.00,
		"url_imagen" : "https://raw.githubusercontent.com/CodeStrong2023/Codigo33-12_E-commerce/refs/heads/Sofia_Lopez/client/Imagenes/PumaSuede/PumaSuedeBlanca.png",
		"stock" : 10,
		"createdAt" : "2024-10-14 18:13:55",
		"updatedAt" : "2024-11-06 18:45:59"
	},
	{
		"id" : 65,
		"nombre" : "Puma Suede",
		"color" : "Verde",
		"talle" : 38,
		"marca" : "Puma",
		"precio" : 190.00,
		"url_imagen" : "https://raw.githubusercontent.com/CodeStrong2023/Codigo33-12_E-commerce/refs/heads/Sofia_Lopez/client/Imagenes/PumaSuede/PumaSuedeVerde.png",
		"stock" : 5,
		"createdAt" : "2024-10-14 18:13:55",
		"updatedAt" : "2024-11-06 18:45:59"
	},
	{
		"id" : 66,
		"nombre" : "Puma Suede",
		"color" : "Verde",
		"talle" : 39,
		"marca" : "Puma",
		"precio" : 190.00,
		"url_imagen" : "https://raw.githubusercontent.com/CodeStrong2023/Codigo33-12_E-commerce/refs/heads/Sofia_Lopez/client/Imagenes/PumaSuede/PumaSuedeVerde.png",
		"stock" : 5,
		"createdAt" : "2024-10-14 18:13:55",
		"updatedAt" : "2024-11-06 18:45:59"
	},
	{
		"id" : 67,
		"nombre" : "Puma Suede",
		"color" : "Verde",
		"talle" : 41,
		"marca" : "Puma",
		"precio" : 190.00,
		"url_imagen" : "https://raw.githubusercontent.com/CodeStrong2023/Codigo33-12_E-commerce/refs/heads/Sofia_Lopez/client/Imagenes/PumaSuede/PumaSuedeVerde.png",
		"stock" : 10,
		"createdAt" : "2024-10-14 18:13:55",
		"updatedAt" : "2024-11-06 18:45:59"
	},
	{
		"id" : 68,
		"nombre" : "Puma Suede",
		"color" : "Verde",
		"talle" : 42,
		"marca" : "Puma",
		"precio" : 190.00,
		"url_imagen" : "https://raw.githubusercontent.com/CodeStrong2023/Codigo33-12_E-commerce/refs/heads/Sofia_Lopez/client/Imagenes/PumaSuede/PumaSuedeVerde.png",
		"stock" : 5,
		"createdAt" : "2024-10-14 18:13:55",
		"updatedAt" : "2024-11-06 18:45:59"
	}
];

const preloadZapatillas = async () => {
    try {
        await Promise.all(
            zapatillas.map((z) =>
                Zapatillas.findOrCreate({
                    where: { nombre: z.nombre }, // Usa el nombre como criterio de búsqueda
                    defaults: {
                        marca: z.marca,
                        color: z.color,
                        precio: z.precio,
                        url_imagen: z.url_imagen,
                        stock: z.stock,
                        talle: z.talle
                    }
                })
            )
        );
    } catch (error) {
        throw new Error(`Error al precargar zapatillas: ${error.message}`);
    }
}

export default preloadZapatillas;