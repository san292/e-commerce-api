const jwt = require('jsonwebtoken');
//verify token

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  // console.log('req.user.isAdmin 6', req.user.isAdmin);
  console.log('authHeader', authHeader);
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.JWT_KEY, (err, user) => {
      if (err) res.status(403).json('Token non valide');
      req.user = user;
      console.log('user----->13', user);
      next();
    });
  } else {
    return res.status(401).json("vous n'êtes pas authentifié");
  }
};

//  function for verify token and Authorisation
const verifyTokenAndAuthorization = (req, res, next) => {
  // console.log('reqqqqqqqqqqqqqqqqqq 23', req.user.isAdmin);
  verifyToken(req, res, () => {
    // console.log('req.user.id', req.user.id);
    // console.log('req.params.id', req.params.id);
    console.log('reqqqqqqqqqqqqqqqqqq 27', req.user.isadmin);
    if (req.user.id === req.params.id || req.user.isadmin) {
      console.log('vous etes autorisé 29 ', req.user.isadmin);
      next();
    } else {
      res.status(403).json("vous n'êtes pas autorisé à faire cette action");
    }
  });
};

//  function for verify token and Admin
const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    console.log('req.user.isAdmin 40', req.user.isadmin);
    if (req.user.isadmin) {
      console.log('connecte en tant qu admin');
      next();
    } else {
      res.status(403).json('action reservé aux Admins!');
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin
};
