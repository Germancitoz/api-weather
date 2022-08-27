import bcrypt from 'bcrypt'
import mongoose from 'mongoose'

const profileSchema = mongoose.Schema(
  {
    name: { type: 'string', required: true, unique: true },
    email: { type: 'string', required: true, unique: true },
    password: { type: 'string', required: true },
    location: { type: 'string', required: true },
    description: { type: 'string' },
    image: { type: 'string' },
  },
  {
    timestamps: true,
  }
)

profileSchema.pre('save', async function (next) {
  const profile = this
  if (profile.isModified('password')) {
    profile.password = await bcrypt.hash(profile.password, 10)
  }
  next()
})

profileSchema.methods.comparePassword = async function (password) {
  const profile = this
  const isValid = await bcrypt.compare(password, profile.password)
  Promise.resolve(isValid)
}

const Profile = mongoose.model('Profile', profileSchema)
export default Profile
