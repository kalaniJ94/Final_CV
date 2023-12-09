const jwt = require('jsonwebtoken');

const secret = 'test_secret';
const expiration = '2h';

module.exports = {
  authMiddleware: function (req, res, next) {
    let token = req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    // if there is no token, or if the token has been removed, deny access
    if (!token) {
      return res.status(400).json({ message: 'Your session has expired' });
    }

    try {
      const { data } = jwt.verify(token, secret, { expiresIn: expiration });
      req.user = data;
    } catch (error) {
      console.error('Token verification error:', error.message);
      // the 401 status number means unauthorized
      return res.status(401).json({ message: 'Invalid token!' });
    }

    next();
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
  // remove token from client
  revokeToken: function ({ token }) {
    revokedTokens.add(token);
  },
};