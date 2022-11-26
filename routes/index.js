const router = require('express').Router();

const usersRouter = require('./users');
const moviesRouter = require('./movies');
const { createUser, login } = require('../controllers/users');
const auth = require('../middlewares/auth');
const NotFoundError = require('../errors/not-found-err');
const { signupValidation, signinValidation } = require('../middlewares/joiValidation');

router.post('/signup', signupValidation, createUser);
router.post('/signin', signinValidation, login);

router.use('/users', auth, usersRouter);
router.use('/movies', auth, moviesRouter);

router.use((req, res, next) => {
  next(new NotFoundError('Маршрут не найден'));
});

module.exports = router;
