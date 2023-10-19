const errorMiddleware = (err, req, res, next) => {
    // Verificar si el error es una instancia de Error
    if (err instanceof Error) {
      // Manejar el error de forma adecuada
      res.status(500).json({ error: 'Error interno del servidor' });
    } else {
      // Continuar con el siguiente middleware o controlador
      next(err);
    }
  };
  
  module.exports = {
    errorMiddleware
  }