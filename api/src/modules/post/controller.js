import errorsHandler from '../../server/errorsHandler.js'
import Post from './Post.js'

export const getPosts = async (request, response) => {
  const posts = await Post.find().populate({ path: 'profile', select: 'name' })

  return response.status(200).json(posts)
}

export const getPostById = async (request, response) => {
  const { id } = request.params

  const post = await Post.findById(id).populate({
    path: 'profile',
    select: 'name',
  })

  return response.status(200).json(post)
}

export const createPost = async (request, response) => {
  const { id } = request
  const { title, description, price, location, image } = request.body
  const post = new Post({
    profile: id,
    title,
    description,
    price,
    location,
    image,
  })
  return response.status(200).json(post)
}

export const updatePost = async (request, response) => {
  const { id } = request.params
  const { title, description, price, location, image } = request.body

  const post = await Post.findById(id)

  if (!(await Post.findById(id))) return errorsHandler(response, 'No update')

  post.update({
    title,
    description,
    price,
    location,
    image,
  })

  return response.status(200).json({ success: true })
}

export const deletePost = async (request, response) => {}
