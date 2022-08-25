import { createToken } from '../../../services/jwt.js'
import Profile from '../Profile.js'

export const handleLogin = async (request, response) => {
  const { name, password } = request.body

  const profile = await Profile.findOne().where({ name })

  if (!profile) return response.status(404).json({ error: 'Not profile found' })

  if (!(await profile.comparePassword(password)))
    return response.status(404).json({ error: 'Password mismatch' })

  const token = createToken({ _id: profile._id })
  return response.status(200).json({ token })
}

export const handleSignup = async (request, response) => {
  const { name, email, password, location } = request.body

  if (await Profile.findOne().where({ email }))
    return response.status(404).json({ error: 'The email is already in use' })

  if (await Profile.findOne().where({ name }))
    return response.status(404).json({ error: 'The name is already in use' })

  const profile = new Profile({ name, email, password, location })
  await profile.save()

  const token = createToken({ _id: profile._id })
  return response.status(200).json({ token })
}
