const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { JWT_DEV } = require('../utils/configuration');

const { NODE_ENV, JWT_SECRET } = process.env;

const ConflictError = require('../errors/conflict-err');
const BadRequestError = require('../errors/bad-reques-err');

const { BAD_REQUEST_ERR_MESSAGE, CONFLICT_ERR_MESSAGE } = require('../utils/constants');

module.exports.createUser = (req, res, next) => {
  const {
    name, email, password,
  } = req.body;
  bcrypt.hash(password, 10)
    .then((hash) => User.create({
      name, email, password: hash,
    }))
    .then((user) => res.send({
      name: user.name,
      email: user.email,
    }))
    .catch((err) => {
      if (err.code === 11000) {
        next(new ConflictError(CONFLICT_ERR_MESSAGE));
      } else if (err.name === 'ValidationError') {
        next(new BadRequestError(BAD_REQUEST_ERR_MESSAGE));
      } else {
        next(err);
      }
    });
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;
  User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
        NODE_ENV === 'production' ? JWT_SECRET : JWT_DEV,
        { expiresIn: '7d' },
      );
      res.send({ token });
    })
    .catch(next);
};

module.exports.getCurrentUser = (req, res, next) => {
  User
    .findById(req.user._id)
    .then((user) => res.send(user))
    .catch(next);
};

module.exports.updateProfile = (req, res, next) => {
  const {
    name, email,
  } = req.body;
  User
    .findByIdAndUpdate(req.user._id, { name, email }, {
      new: true,
      runValidators: true,
    })
    .then((user) => res.send(user))
    .catch((err) => {
      if (err.code === 11000) {
        next(new ConflictError(CONFLICT_ERR_MESSAGE));
      } else if (err.name === 'ValidationError') {
        next(new BadRequestError(BAD_REQUEST_ERR_MESSAGE));
      } else {
        next(err);
      }
    });
};
