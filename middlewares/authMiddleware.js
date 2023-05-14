const jwt = require("jsonwebtoken");
const errorConfig = require("../config/errorConfig");
const secret = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (typeof token === "undefined") {
      //if autorization is undefined throw error
      return res.status(401).json({ error: errorConfig.notAuthorized });
    }

    const bearer = token.split(" ");

    //if authorization first word is not bearer or second is undefined throw error
    if (
      bearer[0].toLowerCase() !== "bearer" ||
      typeof bearer[1] === "undefined"
    ) {
      return res.status(401).json({ error: errorConfig.bearerInvalid });
    }

    token = bearer[1];

    //decode token and get user _id
    const decodedData = jwt.verify(token, secret);

    req.userId = decodedData.id;

    next();
  } catch (e) {
    return res.status(404).json({ error: errorConfig.notAuthorized });
  }
};
