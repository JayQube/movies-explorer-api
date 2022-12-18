const rateLimit = require('express-rate-limit');
const { TO_MANY_RESPONSES_ERR_MESSAGE } = require('../utils/constants');

module.exports = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: TO_MANY_RESPONSES_ERR_MESSAGE,
  standardHeaders: true,
  legacyHeaders: false,
});
