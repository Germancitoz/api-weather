import express from 'express'
import { handleLogin } from './handlers/auth.js'
const router = express.Router()

router.post('/login', handleLogin)

export default router
