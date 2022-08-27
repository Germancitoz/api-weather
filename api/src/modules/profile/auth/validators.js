import { body, validationResult } from 'express-validator'

const validateFields = (request, response, next) => {
  const errors = validationResult(request)
  if (!errors.isEmpty()) {
    return response.status(400).json({
      success: false,
      message: errors,
    })
  }
  next()
}

export const validateLogin = [
  body('name').exists().isLength({ min: 3 }),
  body('password').not().isEmpty(),
  validateFields,
]

export const validateSignup = [
  body('name').trim().isLength({ min: 3 }),
  body('email').isEmail().normalizeEmail(),
  body('password').exists(), // todo strongPassword
  body('location').exists(),
  validateFields,
]
