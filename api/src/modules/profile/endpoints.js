import express from 'express'
import { isAuthenticated } from './auth/middlewares.js'
import {
  deleteProfile,
  getAllProfiles,
  getProfileByName,
  updateProfile,
} from './controller.js'

const router = express.Router()

router.get('/', getAllProfiles)
router.get('/:name', getProfileByName)

router.put('/', [isAuthenticated], updateProfile)
router.delete('/', [isAuthenticated], deleteProfile)

export default router
