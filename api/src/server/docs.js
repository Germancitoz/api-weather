import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'

const swaggerConfig = {
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'hola',
      version: '1.0',
      servers: [
        {
          url: 'http://localhost:3000',
        },
      ],
    },
  },
  apis: ['*.js'],
}

export const buildDocs = (server) => {
  server.use(
    '/docs',
    swaggerUI.serve,
    swaggerUI.setup(swaggerJsDoc(swaggerConfig))
  )
}
