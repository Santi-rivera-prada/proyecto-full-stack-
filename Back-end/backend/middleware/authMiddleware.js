const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Obtener el token de autorización del encabezado de la solicitud
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: 'No se proporcionó un token de autorización' });
  }

  try {
    // Verificar y decodificar el token
    const token = authHeader.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    
    // Agregar el ID de usuario al objeto de solicitud para su uso posterior
    req.userId = decodedToken.userId;
    
    // Continuar con el siguiente middleware o controlador
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Token de autorización inválido' });
  }
};

module.exports = authMiddleware;