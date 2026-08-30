import express from 'express';
import config from './config/config.js';
import databaseConnection from './config/db.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();

// database connection
databaseConnection();

// body-parser
app.use(express.json());

// testing route
app.get("/",(req,res)=>{
  res.send("server running successfully!")
})

// all routes here


// error handler
app.use(errorHandler);

app.listen(config.port,()=>{
  console.log(`Server running successfully on port ${config.port}`)
})