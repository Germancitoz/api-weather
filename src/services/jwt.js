import jwt from 'jsonwebtoken'
import JWT_CONFIG from '../config/jwt.js'

export const createToken = (payload) => {
  return jwt.sign(payload, JWT_CONFIG.PRIVATE_KEY, {
    expiresIn: JWT_CONFIG.EXPIRES_IN,
  })
}

export const verifyToken = (token) => {
  return jwt.verify(token, JWT_CONFIG.PRIVATE_KEY)
}
