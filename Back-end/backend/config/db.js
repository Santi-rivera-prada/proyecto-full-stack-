const mongoose = require('mongoose');
require('dotenv').config();

// Obtén la URI de conexión y el puerto desde el archivo .env
const dbURI = process.env.MONGODB_URI;
const port = process.env.PORT || 3000; // Si no se especifica un puerto en el archivo .env, se usará el puerto 3000

// Configura y conecta a la base de datos de MongoDB
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// Manejador de eventos de conexión
const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Error de conexión a la base de datos:', error);
});

db.once('open', () => {
  console.log('Conexión exitosa a la base de datos');
  console.log(`Servidor en funcionamiento en el puerto ${port}`);
});

module.exports = connectDB