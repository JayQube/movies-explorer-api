const userRouter = require('express').Router();
const { getCurrentUser, updateProfile } = require('../controllers/users');
const { updateProfileValidation } = require('../middlewares/joiValidation');

userRouter.get('/me', getCurrentUser);

userRouter.patch('/me', updateProfileValidation, updateProfile);

module.exports = userRouter;
