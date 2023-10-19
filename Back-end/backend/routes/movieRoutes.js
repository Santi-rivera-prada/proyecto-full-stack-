const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieControllers');

// Ruta para obtener todas las películas
router.get('/', movieController.getAllMovies);

// Ruta para crear una película
router.post('/', movieController.createMovie);

// Ruta para actualizar una película por su ID
router.put('/:id', movieController.updateMovie);

// Ruta para eliminar una película por su ID
router.delete('/:id', movieController.deleteMovie);

module.exports = router