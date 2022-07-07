import { verifyToken } from '../../../services/jwt.js'

export const isAuthenticated = async (request, response, next) => {
  const token = request.headers.authorization?.split(' ')[1] // Remove Bearer

  if (!token) return response.status(400).json({ error: 'not token found' })

  try {
    const payload = verifyToken(token)
    request.id = payload
    next()
  } catch (error) {
    return response.status(404).json({ error: error.message })
  }
}
