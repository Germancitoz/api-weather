import express from 'express'
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
router.put('/', createPost)
router.post('/', updatePost)
router.delete('/', deletePost)

export default router
