import mongoose from 'mongoose';
import config from './config.js';

const databaseConnection = async() =>{
  try {
    await mongoose.connect(`mongodb://${config.host}:${config.database_port}/${config.database_name}`)
    console.log("Database connected successfully!");
  } catch (error) {
    console.log("DATABASE_ERROR:",error);
  }
}

export default databaseConnection;