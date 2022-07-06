import { body, validationResult } from 'express-validator'

export const validateLogin = [
  body('email').isEmail(),
  body('password').not().isEmpty(),
  (request, response, next) => {
    const errors = validationResult(request)
    if (!errors.isEmpty()) {
      return response.status(400).json(errors)
    }
    next()
  },
]

export const validateSignup = []
