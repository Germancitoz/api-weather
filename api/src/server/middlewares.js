import cors from 'cors'
import express from 'express'
import rateLimit from 'express-rate-limit'
import helmet from 'helmet'
import morgan from 'morgan'
import SERVER_CONFIG from '../config/server.js'

export const setMiddlewares = (server) => {
  server.use(
    express.json({
      limit: 1,
    })
  )
  server.use(
    cors({
      origin: ['localhost.com'],
    })
  )
  server.use(helmet())
  server.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
      handler: (request, response, next, options) =>
        response.status(options.statusCode).json({ error: options.message }),
    })
  )
  server.use(morgan(SERVER_CONFIG.STATE === 'development' ? 'dev' : 'tiny'))
}
