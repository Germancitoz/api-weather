import { verifyToken } from '../../../services/jwt.js'
import Profile from '../Profile.js'

export const isAuthenticated = async (request, response, next) => {
  const token = request.headers.authorization?.split(' ')[1] // Remove Bearer

  if (!token) return response.status(400).json({ error: 'not token found' })

  try {
    const payloadId = verifyToken(token)
    const profile = await Profile.findById(payloadId)
    if (!profile) {
      return response
        .status(404)
        .json({ error: 'This token does have no profile' })
    }

    request.id = payloadId
    next()
  } catch (error) {
    return response.status(404).json({ error: error.message })
  }
}
