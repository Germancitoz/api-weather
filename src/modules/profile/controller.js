import Profile from './Profile.js'

export const getAllProfiles = async (request, response) => {
  const profiles = await Profile.find().select('-password')
  response.status(200).json(profiles)
}

export const getProfileByName = async (request, response) => {
  const { name } = request.params

  const profile = await Profile.find().where({ name }).select('-password')
  response.status(200).json(profile)
}

//todo check if the user is
export const updateProfile = async (request, response) => {
  const { id } = request
  const { name, email, password, location, description, image } = request.body
  await Profile.findByIdAndUpdate(id, {
    name,
    email,
    password,
    location,
    description,
    image,
  })
  response.status(200).json({ success: true })
}

export const deleteProfile = async (request, response) => {
  const { id } = request
  const { password } = request.body

  const profile = await Profile.findById(id)
  if (!profile.comparePassword(password))
    return response.status(404).json({ error: 'Password incorrect' })

  await profile.delete()
  response.status(200).json({ success: true })
}
