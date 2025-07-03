const users = require('../data/users');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }
  const token = authHeader.split(' ')[1];
  const user = users.find(u => u.token === token);
  if (!user) {
    return res.status(403).json({ error: 'Forbidden: Invalid token' });
  }
  req.user = user;
  next();
};
