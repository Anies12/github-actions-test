const { StatusCodes } = require('http-status-codes');

const respose = {
  created: (response, data, message) =>
    response.status(StatusCodes.CREATED).json({ data, message }),
  ok: (response, data, message) =>
    response.status(StatusCodes.OK).json({ data, message }),
  badRequest: (response, message) =>
    response.status(StatusCodes.BAD_REQUEST).json({ message }),
  notFound: (response, message) =>
    response.status(StatusCodes.NOT_FOUND).json({ message }),
  unAuthorized: (response, message) =>
    response.status(StatusCodes.UNAUTHORIZED).json({ message }),
  conflict: (response, message) =>
    response.status(StatusCodes.CONFLICT).json({ message }),
  forbidden: (response, message) =>
    response.status(StatusCodes.FORBIDDEN).json({ message }),
  notAllowedMethod: (request, response, message) =>
    response.status(StatusCodes.METHOD_NOT_ALLOWED).json({
      message:
        message ||
        `The requested resource does not support http method '${request.method}'.'${request.path}'`
    }),
  internalServerError: (next, error) => next(error)
};

module.exports = respose;
