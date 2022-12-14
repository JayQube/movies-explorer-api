const jwt = require('jsonwebtoken');
const { JWT_DEV } = require('../utils/configuration');

const { NODE_ENV, JWT_SECRET } = process.env;
const UnauthorizedError = require('../errors/unauthorized-error');
const { UNAUTHORIZED_ERR_MESSAGE } = require('../utils/constants');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    next(new UnauthorizedError(UNAUTHORIZED_ERR_MESSAGE));
  } else {
    const token = authorization.replace('Bearer ', '');
    let payload;

    try {
      payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : JWT_DEV);
    } catch (err) {
      next(new UnauthorizedError(UNAUTHORIZED_ERR_MESSAGE));
    }

    req.user = payload;
  }
  next();
};
