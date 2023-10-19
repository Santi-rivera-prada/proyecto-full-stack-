// Importar el modelo de usuarios
const User = require('../models/usersModel');

// Controlador para registrar un usuario
const registerUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar el usuario' });
  }
};

// Controlador para iniciar sesión de un usuario
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !user.comparePassword(password)) {
      res.status(401).json({ error: 'Credenciales inválidas' });
      return;
    }

    res.json({ message: 'Inicio de sesión exitoso' });
  } catch (error) {
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
};

// Controlador para obtener información de un usuario
const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el usuario' });
  }
};

// Controlador para actualizar información de un usuario
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el usuario' });
  }
};

// Controlador para eliminar un usuario
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
};

// Exportar los controladores
module.exports = {
  registerUser,
  loginUser,
  getUser,
  updateUser,
  deleteUser
}