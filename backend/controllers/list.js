const Movie = require("../models/movie");

exports.getList = (req, res, next) => {
  Movie.find()
    .lean()
    .then((data) => {
      res.json({ list: data, userId: 1 });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postMovie = (req, res, next) => {
  const movie = new Movie({
    title: req.body.title,
    movieId: req.body.movieId,
    releaseDate: req.body.releaseDate,
    genres: req.body.genres,
    posterPathId: req.body.posterPathId,
  });
  movie
    .save()
    .then((result) => {
      res.json({ result: result });
    })
    .catch((err) => {
      res.json({ result: err });
    });
};
