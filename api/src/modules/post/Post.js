import mongoose from 'mongoose'

const postSchema = mongoose.Schema(
  {
    profile: { type: mongoose.Types.ObjectId, ref: 'Profile' },
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    price: { type: 'number', required: true },
    location: { type: 'string', required: true },
    image: { type: 'string', required: true },
  },
  {
    timestamps: true,
  }
)

const Post = mongoose.model('Post', postSchema)
export default Post
