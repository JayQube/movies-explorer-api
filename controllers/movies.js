const Movie = require('../models/movie');

const NotFoundError = require('../errors/not-found-err');
const ForbiddenError = require('../errors/forbidden-error');
const BadRequestError = require('../errors/bad-reques-err');

const {
  NOT_FOUND_ERR_MESSAGE,
  FORBIDDEN_ERR_MESSAGE,
  BAD_REQUEST_ERR_MESSAGE,
} = require('../utils/constants');

module.exports.getMovies = (req, res, next) => {
  Movie
    .find({})
    .then((movie) => res.send(movie.reverse()))
    .catch(next);
};

module.exports.createMovie = (req, res, next) => {
  const {
    country, director, duration, year, description, image,
    trailerLink, thumbnail, movieId, nameRU, nameEN,
  } = req.body;
  Movie
    .create({
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      thumbnail,
      movieId,
      nameRU,
      nameEN,
      owner: req.user._id,
    })
    .then((movie) => res.send(movie))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError(BAD_REQUEST_ERR_MESSAGE));
      } else {
        next(err);
      }
    });
};

module.exports.deleteMovie = (req, res, next) => {
  Movie
    .findById(req.params.movieId)
    .then((movie) => {
      if (!movie) {
        throw new NotFoundError(NOT_FOUND_ERR_MESSAGE);
      }
      if (movie.owner.toString() !== req.user._id) {
        throw new ForbiddenError(FORBIDDEN_ERR_MESSAGE);
      }
      return Movie.findByIdAndRemove(req.params.movieId)
        .then((chosenMovie) => {
          res.send(chosenMovie);
        });
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequestError(BAD_REQUEST_ERR_MESSAGE));
      } else {
        next(err);
      }
    });
};
