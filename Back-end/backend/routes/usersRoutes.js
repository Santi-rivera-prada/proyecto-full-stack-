const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersControllers');

// Ruta para registrar un usuario
router.post('/register', userController.registerUser);

// Ruta para iniciar sesión de un usuario
router.post('/login', userController.loginUser);

// Ruta para obtener información de un usuario por su ID
router.get('/:id', userController.getUser);

// Ruta para actualizar información de un usuario por su ID
router.put('/:id', userController.updateUser);

// Ruta para eliminar un usuario por su ID
router.delete('/:id', userController.deleteUser);

module.exports = router