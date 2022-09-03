import express from 'express'
import { handleLogin, handleSignup } from './handlers.js'
import { validateLogin, validateSignup } from './validators.js'

const router = express.Router()

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *
 */
router.post('/login', [validateLogin], handleLogin)
router.post('/signup', [validateSignup], handleSignup)

export default router
