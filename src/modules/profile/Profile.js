import bcrypt from 'bcrypt'
import Mongoose from 'mongoose'

const profileSchema = Mongoose.Schema(
  {
    name: { type: 'string', unique: true },
    email: { type: 'string', required: true },
    password: { type: 'string', required: true },
    location: { type: 'string' },
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
  return new Promise(async (resolve, reject) => {
    const user = this
    const isValid = await bcrypt.compare(password, user.password)
    resolve(isValid)
  })
}

const Profile = Mongoose.Model(profileSchema)
export default Profile
