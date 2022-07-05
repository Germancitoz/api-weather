import mongoose from 'mongoose'
export const connectDatabase = async () => {
  try {
    const connection = await mongoose.connect(
      'mongodb+srv://Germancito:germancito@cluster0.3bpkigm.mongodb.net/?retryWrites=true&w=majority'
    )
    mongoose.set('debug', true)
    return Promise.resolve(connection)
  } catch (error) {
    return Promise.reject(error)
  }
}
