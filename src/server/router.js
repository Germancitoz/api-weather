import profileRouter from '../modules/profile/routes.js'

export const setRoutes = (server) => {
  server.use('/profiles', profileRouter)
}
