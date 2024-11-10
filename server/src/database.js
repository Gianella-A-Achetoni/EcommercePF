import 'dotenv/config';
import { Sequelize } from 'sequelize';

console.log('dotenv loaded:', !!'sql10743882');
console.log('DB_USER:', 'sql10743882');
console.log('DB_PASSWORD:', '2p7cIjFDgm');
console.log('DB_NAME:', 'sql10743882');
console.log('DB_HOST:', 'sql10.freesqldatabase.com');
console.log('DB_PORT:', 3306);

const sequelize = new Sequelize('sql10743882', 'sql10743882', '2p7cIjFDgm', {
  host: 'sql10.freesqldatabase.com',
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

