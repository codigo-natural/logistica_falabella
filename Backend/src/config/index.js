import dotenv from 'dotenv'
dotenv.config()

export const config = {
  // Server configuration
  port: process.env.PORT,
  
  // Database configuration
  dbHost: process.env.DB_HOST,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
}