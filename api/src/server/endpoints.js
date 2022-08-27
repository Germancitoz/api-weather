import postRouter from '../modules/post/endpoints.js'
import authRouter from '../modules/profile/auth/endpoints.js'
import profileRouter from '../modules/profile/endpoints.js'

export const setEndpoints = (server) => {
  server.use('/auth', authRouter)
  server.use('/profiles', profileRouter)
  server.use('/posts', postRouter)
}
