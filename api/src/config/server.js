import dotenv from 'dotenv'
dotenv.config()

export default {
  STATE: process.env.SERVER_STATE ?? 'development',
  PORT: process.env.SERVER_PORT ?? 3000,
}
