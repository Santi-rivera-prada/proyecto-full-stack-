const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => console.error('Error de conexión a la base de datos:', error));
db.once('open', () => console.log('Conexión exitosa a la base de datos'));

app.use(express.json());

const movieRoutes = require('./routes/movieRoutes');
const userRoutes = require('./routes/usersRoutes');

app.use('/api', movieRoutes);
app.use('/api', userRoutes);

// Middleware de manejo de errores (debe ir al final)
const errorMiddleware = require('./middleware/errorMiddleware');
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});