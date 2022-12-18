const router = require('express').Router();

const usersRouter = require('./users');
const moviesRouter = require('./movies');
const { createUser, login } = require('../controllers/users');
const auth = require('../middlewares/auth');
const NotFoundError = require('../errors/not-found-err');
const { signupValidation, signinValidation } = require('../middlewares/joiValidation');
const { NOT_FOUND_ROUTE_ERR_MESSAGE } = require('../utils/constants');

router.post('/signup', signupValidation, createUser);
router.post('/signin', signinValidation, login);

router.use(auth);
router.use('/users', usersRouter);
router.use('/movies', moviesRouter);

router.use((req, res, next) => {
  next(new NotFoundError(NOT_FOUND_ROUTE_ERR_MESSAGE));
});

module.exports = router;
