import dotenv from 'dotenv'
dotenv.config()

export default {
  URL: process.env.DATABASE_URL ?? '',
  NAME: process.env.DATABASE_NAME ?? 'clothy',
}
