import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import SERVER_CONFIG from '../config/server.js'

export const setMiddlewares = (server) => {
  server.use(express.json())
  server.use(cors())
  server.use(helmet())
  server.use(morgan(SERVER_CONFIG.STATE === 'development' ? 'dev' : 'tiny'))
}
