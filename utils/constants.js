const REGEX_URL = /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-/])*)?/;

const BAD_REQUEST_ERR_MESSAGE = 'Переданы некорректные данные';
const CONFLICT_ERR_MESSAGE = 'Этот Email уже занят, выберите другой';
const NOT_FOUND_ERR_MESSAGE = 'Фильм с таким id не найден';
const FORBIDDEN_ERR_MESSAGE = 'Нет прав на удаление фильма';
const INTERNAL_SERVER_ERR = 'На сервере произошла ошибка';
const AUTHORIZATION_ERR_MESSAGE = 'Неправильные почта или пароль';
const UNAUTHORIZED_ERR_MESSAGE = 'Необходима авторизация';
const NOT_FOUND_ROUTE_ERR_MESSAGE = 'Маршрут не найден';

const EMAIL_VALIDATION_ERR_MESSAGE = 'Адрес email не соответствует требованиям';
const URL_IMAGE_VALIDATION_ERR_MESSAGE = 'URL постера не соответствует требованиям';
const URL_TRAILER_VALIDATION_ERR_MESSAGE = 'URL трейлера не соответствует требованиям';
const URL_THUMBNAIL_VALIDATION_ERR_MESSAGE = 'URL превью постера не соответствует требованиям';
const TO_MANY_RESPONSES_ERR_MESSAGE = 'Вы отправляете слишком много запросов. Подождите немного и попробуйте снова';

module.exports = {
  REGEX_URL,
  BAD_REQUEST_ERR_MESSAGE,
  CONFLICT_ERR_MESSAGE,
  NOT_FOUND_ERR_MESSAGE,
  FORBIDDEN_ERR_MESSAGE,
  INTERNAL_SERVER_ERR,
  AUTHORIZATION_ERR_MESSAGE,
  UNAUTHORIZED_ERR_MESSAGE,
  NOT_FOUND_ROUTE_ERR_MESSAGE,
  EMAIL_VALIDATION_ERR_MESSAGE,
  URL_IMAGE_VALIDATION_ERR_MESSAGE,
  URL_TRAILER_VALIDATION_ERR_MESSAGE,
  URL_THUMBNAIL_VALIDATION_ERR_MESSAGE,
  TO_MANY_RESPONSES_ERR_MESSAGE,
};
