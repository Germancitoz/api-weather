import { startServer } from './server/index.js'
import { connectDatabase } from './services/database.js'
;(async () => {
  try {
    await startServer()
    await connectDatabase()
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
})()
