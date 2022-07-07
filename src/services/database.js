import mongoose from 'mongoose'
import DATABASE_CONFIG from '../config/database.js'

export const connectDatabase = async () => {
  try {
    const connection = await mongoose.connect(DATABASE_CONFIG.URL, {
      dbName: DATABASE_CONFIG.NAME,
    })
    mongoose.set('debug', true)
    return Promise.resolve(connection)
  } catch (error) {
    return Promise.reject(error)
  }
}
