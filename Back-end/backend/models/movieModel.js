const mongoose = require('mongoose');

// Definir el esquema para la colección de películas
const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  genre: {
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
});

// Crear el modelo de películas a partir del esquema definido
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie