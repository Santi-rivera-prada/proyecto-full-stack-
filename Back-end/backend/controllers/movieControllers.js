const Movie = require('../models/movieModel');

// Controlador para crear una nueva película
exports.createMovie = async (req, res) => {
  try {
    const { title, director, year } = req.body;
    const movie = new Movie({ title, director, year });
    await movie.save();
    res.status(201).json(movie);
  } catch (error) {
    console.error('Error al crear la película:', error);
    res.status(500).send('Error interno del servidor');
  }
};

// Controlador para listar todas las películas
exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    console.error('Error al obtener la lista de películas:', error);
    res.status(500).send('Error interno del servidor');
  }
};

// Controlador para obtener una película por su ID
exports.getMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).send('Película no encontrada');
    }
    res.status(200).json(movie);
  } catch (error) {
    console.error('Error al obtener la película por ID:', error);
    res.status(500).send('Error interno del servidor');
  }
};

// Controlador para actualizar una película por su ID
exports.updateMovie = async (req, res) => {
  try {
    const { title, director, year } = req.body;
    const movie = await Movie.findByIdAndUpdate(req.params.id, { title, director, year }, { new: true });
    if (!movie) {
      return res.status(404).send('Película no encontrada');
    }
    res.status(200).json(movie);
  } catch (error) {
    console.error('Error al actualizar la película:', error);
    res.status(500).send('Error interno del servidor');
  }
};

// Controlador para eliminar una película por su ID
exports.deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndRemove(req.params.id);
    if (!movie) {
      return res.status(404).send('Película no encontrada');
    }
    res.status(200).send('Película eliminada');
  } catch (error) {
    console.error('Error al eliminar la película:', error);
    res.status(500).send('Error interno del servidor');
  }
};
