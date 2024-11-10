import 'dotenv/config';
import { Sequelize } from 'sequelize';

console.log('dotenv loaded:', !!'root');
console.log('DB_USER:', 'root');
console.log('DB_PASSWORD:', 'AJtsoUoepcoZFdpavUZMsxfDkdzngUMf');
console.log('DB_NAME:', 'railway');
console.log('DB_HOST:', 'mysql.railway.internal');
console.log('DB_PORT:', 3306);

const sequelize = new Sequelize('railway', 'root', 'AJtsoUoepcoZFdpavUZMsxfDkdzngUMf', {
  host: 'mysql.railway.internal',
  dialect: 'mysql',
});

const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conectado a la base de datos');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
};

export { sequelize, connectDb };
