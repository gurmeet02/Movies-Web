const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  title: {
    type: String,
  },
  movieId: {
    required: true,
    type: Number,
  },
  releaseDate: {
    type: String,
  },
  description: {
    type: String,
  },
  genres: {
    type: Array,
  },
  posterPathId: {
    type: String,
  },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
