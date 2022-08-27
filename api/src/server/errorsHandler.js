import ERRORS from '../config/errors.js'

export default (response, name) => {
  const ERROR = ERRORS[name] ?? [505, `Error with name ${name}, is not defined`]
  const [code, message] = ERROR
  return response.status(code).json({
    success: false,
    message,
  })
}
