const jwt = require('jsonwebtoken');

// Middleware de autenticación
function authenticate(req, res, next) {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ msg: 'Acceso denegado. No se proporcionó un token de autenticación.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded.user;

    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token de autenticación no válido.' });
  }
}

module.exports = authenticate;
