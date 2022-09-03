import errorHandler from '../../../server/errorsHandler.js'
import { verifyToken } from '../../../services/jwt.js'
import Profile from '../Profile.js'

export const isAuthenticated = async (request, response, next) => {
  const token = request.headers.authorization?.split(' ')[1] // Remove Bearer

  if (!token) return errorHandler(response, 'AUTH_TOKEN_NOT_FOUND')
  try {
    const payloadId = verifyToken(token)
    const profile = await Profile.findById(payloadId._id)

    if (!profile) return errorHandler(response, 'AUTH_TOKEN_WITHOUT_PROFILE')

    request.id = payloadId
    next()
  } catch (error) {
    return errorHandler(response, error.message)
  }
}
