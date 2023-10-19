const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Conexión a la base de datos
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
    // Iniciar el servidor una vez conectado a la base de datos
    app.listen(PORT, () => {
      console.log(`Servidor en ejecución en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });

// Middleware para parsear el cuerpo de las solicitudes a JSON
app.use(express.json());

// Rutas
const movieRoutes = require('./routes/movieRoutes');
const userRoutes = require('./routes/usersRoutes');

app.use('api/movies', movieRoutes);
app.use('api/users', userRoutes);

// Manejo de errores
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Error interno del servidor' });
});

module.exports = app;