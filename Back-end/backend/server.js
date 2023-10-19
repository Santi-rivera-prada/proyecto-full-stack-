const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");
const errorHandler = require("./middleware/errorMiddleware").default;
const connectDB = require("./config/db")

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use("/api/movies", require("./routes/movieRoutes"));
app.use("/api/users", require("./routes/usersRoutes"));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`.yellow);
});
