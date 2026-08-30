import dotenv from 'dotenv';

dotenv.config();

const config = {
  port:process.env.PORT || 8000,
  host:process.env.HOST || " ",
  database_name:process.env.DATABASE_NAME || " ",
  database_port:process.env.DATABASE_PORT || " ",
}

export default config;