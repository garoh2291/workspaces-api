module.exports = {
  userExists: {
    name: "UserExists",
    message: "Username already exists",
    status: 404,
  },
  userNotFound: {
    name: "userNotFound",
    message: "User is not found",
    status: 404,
  },
  wrongPasswordError: {
    name: "wrongPasswordError",
    message: "Wrong password",
    status: 404,
  },
  notAuthorized: {
    name: "notAuthorized",
    message: "Not Authorized",
    status: 401,
  },
  bearerInvalid: {
    name: "bearerInvalid",
    message: "bearer is invalid",
    status: 401,
  },
  defaultError: {
    name: "somethingWentWrong",
    message: "Something went wrong please try again later",
    status: 500,
  },
  userExists: {
    name: "UserExists",
    message: "User with email address already exists",
    status: 409,
  },
  jwtNotExists: {
    name: "jwtNotExists",
    message: "jwt does not exists",
    status: 401,
  },
  notAuthorized: {
    name: "notAuthorized",
    message: "Not Authorized",
    status: 401,
  },
  jsonWebTokenError: {
    name: "JsonWebTokenError",
    message: "jwt  is invalid",
    status: 401,
  },
  tokenExpiredError: {
    name: "TokenExpiredError",
    message: "token is expired",
    status: 401,
  },
  userNotFound: {
    name: "userNotFound",
    message: "User is not found",
    status: 404,
  },
  emailOrPasswordNotFound: {
    name: "emailOrPasswordNotFound",
    message: "Invalid login or password",
    status: 403,
  },
  emailDuplicationError: {
    name: "emailDuplicationError",
    message: "The email address is already registered",
    status: 400,
  },
  nothingToUpdate: {
    name: "NothingToUpdate",
    message: "no data send for update",
    status: 400,
  },
  invalidRefreshToken: {
    name: "invalidRefreshToken",
    message: "Refresh token is invalid",
    status: 401,
  },
  bearerInvalid: {
    name: "bearerInvalid",
    message: "bearer is invalid",
    status: 401,
  },
  expiredToken: {
    name: "expiredToken",
    message: "User activation token is expired",
    status: 400,
  },
  invalidToken: {
    name: "invalidToken",
    message: "User activation token is invalid",
    status: 400,
  },
  nothingToRemove: {
    name: "nothingToRemove",
    message: "There is nothing to remove",
    status: 404,
  },
};
