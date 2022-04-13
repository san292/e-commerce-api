const User = require('../models/User');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const authController = {
  register: asyncHandler(async (req, res) => {
    // vérifier si un des champs est vide
    console.log('req.body----------->', req.body);
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      res.status(400);
      throw new Error('tous les champs sont obligatoires');
    }

    // vérifier si l'utilsateur existe

    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error('cet utilsateur existe déja');
    }

    // hacher le mot de passe

    const hachedPassword = CryptoJS.AES.encrypt(
      req.body.password.trim(),
      process.env.PASS_SECRET
    ).toString();

    //créer l'utilsateur

    const user = await User.create({
      username,
      email,
      password: hachedPassword
    });
    if (user) {
      res.status(201).json({
        _id: user.id,
        username: user.username,
        email: user.email
      });
    } else {
      res.status(400);
      throw new Error('donnée invalide');
    }
  }),

  login: asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // verifier l'email de l'utilisateur
    const user = await User.findOne({
      email
    });
    if (!user) {
      res.status(400);
      throw new Error('utilisateur non trouvé');
    }

    // verifier le mot de passe

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SECRET
    );

    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    const inputPassword = password;

    // creation du Token
    const accesToken = jwt.sign(
      {
        id: user._id,
        isadmin: user.isAdmin
      },
      process.env.JWT_KEY,
      { expiresIn: '10d' }
    );

    if (user && originalPassword === inputPassword) {
      res.status(200).json({
        _id: user.id,
        username: user.username,
        email: user.email,
        isadmin: user.isAdmin,
        accesToken
      });
    } else {
      res.status(400);
      throw new Error('verifier votre email ou mot de passe');
    }
  })
};

module.exports = authController;
