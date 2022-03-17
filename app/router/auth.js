const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
// REGISTER;
router.post('/register', async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SECRET
    ).toString()
  });
  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

// LOGIN

router.post('/login', async (req, res) => {
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
      { expiresIn: '1d' }
    );

    const { password, ...others } = user._doc;

    res.status(200).json({ ...others, accesToken });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
