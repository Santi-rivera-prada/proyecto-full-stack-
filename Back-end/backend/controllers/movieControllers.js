// Importar el modelo de películas
const Movie = require('../models/movieModel');

// Controlador para obtener todas las películas
const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las películas' });
  }
};

// Controlador para crear una película
const createMovie = async (req, res) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la película' });
  }
};

// Controlador para actualizar una película por su ID
const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findByIdAndUpdate(id, req.body, { new: true });
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la película' });
  }
};

// Controlador para eliminar una película por su ID
const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    await Movie.findByIdAndDelete(id);
    res.json({ message: 'Película eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la película' });
  }
};

// Exportar los controladores
module.exports = {
  getAllMovies,
  createMovie,
  updateMovie,
  deleteMovie
}