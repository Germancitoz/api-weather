import express from 'express'
import { handleLogin, handleSignup } from './handlers.js'
import { validateLogin, validateSignup } from './validators.js'

const router = express.Router()

router.post('/login', validateLogin, handleLogin)
router.post('/signup', validateSignup, handleSignup)

export default router
