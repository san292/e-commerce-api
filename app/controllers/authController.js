const User = require('../models/User');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

const authController = {
  register: async (req, res) => {
    console.log('req.body----------->', req.body);
    const newUser = await new User({
      username: req.body.username.trim(),
      email: req.body.email.trim(),
      password: CryptoJS.AES.encrypt(
        req.body.password.trim(),
        process.env.PASS_SECRET
      ).toString()
    });
    try {
      if (!newUser) {
        res.status(400);
        throw new Error('tous les champs sont obligatoires !');
      }
      const savedUser = await newUser.save();
      res.status(200).json(savedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  login: async (req, res) => {
    try {
      const user = await User.findOne({
        username: req.body.username
      });

      !user && res.status(401).json('Utilisateur non trouvé');

      const hashedPassword = CryptoJS.AES.decrypt(
        user.password,
        process.env.PASS_SECRET
      );

      const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
      const inputPassword = req.body.password;

      originalPassword !== inputPassword &&
        res.status(401).json('mot de passe erroné');

      const accesToken = jwt.sign(
        {
          id: user._id,
          isadmin: user.isAdmin
        },
        process.env.JWT_KEY,
        { expiresIn: '10d' }
      );

      const { password, ...others } = user._doc;

      res.status(200).json({ ...others, accesToken });
      console.log('userdoc--------->', user._doc);
      console.log('accesToken--------->', accesToken);
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

module.exports = authController;
