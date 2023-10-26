const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  releaseYear: {
    type: Number,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  adult: {
    type: Boolean,
    required: true,
  },
  backdrop_path: String,
  genre_ids: [Number],
  original_language: String,
  original_title: String,
  overview: String,
  popularity: Number,
  poster_path: String,
  release_date: String,
  video: Boolean,
  vote_average: Number,
  vote_count: Number,
}, {
  timestamps: true,
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
