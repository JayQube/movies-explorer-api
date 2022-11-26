const rateLimit = require('express-rate-limit');

module.exports = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Вы отправляете слишком много запросов. Подождите немного и попробуйте снова.',
  standardHeaders: true,
  legacyHeaders: false,
});
