import express from 'express'
import SERVER_CONFIG from '../config/server.js'
import { setMiddlewares } from './middlewares.js'
import { setRoutes } from './router.js'

export const startServer = async () => {
  return new Promise((resolve, reject) => {
    const server = express()
    setRoutes(server)
    setMiddlewares(server)
    server.listen(SERVER_CONFIG.PORT, (error) => {
      if (error) reject(error)
      console.log('listening on port ' + SERVER_CONFIG.PORT)
      return resolve(server)
    })
  })
}
