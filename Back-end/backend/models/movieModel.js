const mongoose = require('mongoose');

// Definir el esquema para el modelo de películas
const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  likes: {
    type: Number,
    default: 0, // El número de likes se inicializa en 0
  },
  // Puedes agregar otros campos según tus necesidades
});

// Crear el modelo de películas a partir del esquema
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
