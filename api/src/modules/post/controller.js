import Post from './Post.js'

export const getPosts = async (request, response) => {}

export const getPostById = async (request, response) => {}

export const createPost = async (request, response) => {
  const data = await Post.find().populate('author', 'name').select('title')
  return response.json({ data })
}

export const updatePost = async (request, response) => {}

export const deletePost = async (request, response) => {}
