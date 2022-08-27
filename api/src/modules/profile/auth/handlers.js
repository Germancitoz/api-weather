import errorsHandler from '../../../server/errorsHandler.js'
import { createToken } from '../../../services/jwt.js'
import Profile from '../Profile.js'

export const handleLogin = async (request, response) => {
  const { name, password } = request.body

  const profile = await Profile.findOne().where({ name })

  if (!profile) return errorsHandler(response, 'AUTH_NOT_PROFILE_FOUND')
  if (!(await profile.comparePassword(password)))
    return errorsHandler(response, 'AUTH_PASSWORD_MISMATCH')

  const token = createToken({ _id: profile._id })
  return response.status(200).json({ token })
}

export const handleSignup = async (request, response) => {
  const { name, email, password, location } = request.body

  if (await Profile.findOne().where({ email }))
    return errorsHandler(response, 'AUTH_EMAIL_USED')

  if (await Profile.findOne().where({ name }))
    return errorsHandler(response, 'AUTH_NAME_USED')

  const profile = new Profile({ name, email, password, location })
  await profile.save()

  const token = createToken({ _id: profile._id })
  return response.status(200).json({ token })
}
