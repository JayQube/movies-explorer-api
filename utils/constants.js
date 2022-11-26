const REGEX_URL = /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-/])*)?/;

const BAD_REQUEST_ERR_MAESSAGE = 'Переданы некорректные данные.';
const CONFLICT_ERR_MESSAGE = 'Этот Email уже занят, выберите другой.';
const NOT_FOUND_ERR_MESSAGE = 'Фильм с таким id не найден.';
const FORBIDDEN_ERR_MESSAGE = 'Нет прав на удаление фильма.';
const INTERNAL_SERVER_ERR = 'На сервере произошла ошибка';

module.exports = {
  REGEX_URL,
  BAD_REQUEST_ERR_MAESSAGE,
  CONFLICT_ERR_MESSAGE,
  NOT_FOUND_ERR_MESSAGE,
  FORBIDDEN_ERR_MESSAGE,
  INTERNAL_SERVER_ERR,
};
