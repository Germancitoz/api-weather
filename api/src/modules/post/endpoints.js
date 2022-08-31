import express from 'express'
import { isAuthenticated } from '../profile/auth/middlewares.js'
import {
  createPost,
  deletePost,
  getPostById,
  getPosts,
  updatePost,
} from './controller.js'

const router = express.Router()

router.get('/', getPosts)
router.get('/:id', getPostById)
router.put('/', [isAuthenticated], createPost)
router.post('/', [isAuthenticated], updatePost)
router.delete('/', [isAuthenticated], deletePost)

export default router
