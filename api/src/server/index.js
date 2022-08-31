import express from 'express'
import SERVER_CONFIG from '../config/server.js'
import { buildDocs } from './docs.js'
import { setEndpoints } from './endpoints.js'
import { setMiddlewares } from './middlewares.js'

export const startServer = () => {
  return new Promise((resolve, reject) => {
    const server = express()
    setMiddlewares(server)
    setEndpoints(server)
    buildDocs(server)
    server.listen(SERVER_CONFIG.PORT, (error) => {
      if (error) reject(error)
      console.log('listening on port ' + SERVER_CONFIG.PORT)
      return resolve(server)
    })
  })
}
