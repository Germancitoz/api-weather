import ERRORS from '../config/errors.js'

export default (response, name) => {
  const ERROR = ERRORS[name] ?? [500, name]
  const [code, message] = ERROR
  return response.status(code).json({
    success: false,
    message,
  })
}
