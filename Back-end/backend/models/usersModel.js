const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Definir el esquema para la colección de usuarios
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Antes de guardar el usuario en la base de datos, hashear la contraseña
userSchema.pre('save', async function (next) {
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(user.password, salt);
  user.password = hashedPassword;
  next();
});

// Método para comparar la contraseña ingresada con la contraseña almacenada
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Crear el modelo de usuarios a partir del esquema definido
const User = mongoose.model('User', userSchema);

module.exports = User