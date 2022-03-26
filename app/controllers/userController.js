const cryptoJs = require('crypto-js');
const User = require('../models/User');
const asyncHandler = require('express-async-handler');

const userController = {
  // GET user
  getUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      const { password, ...others } = user._doc;
      res.status(200).json(...others);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //   GET all user

  getAllUser: async (req, res) => {
    const query = req.query.new;
    console.log('query------------>', query);
    try {
      const users = query
        ? await User.find().sort({ _id: 2 }).limit(5)
        : await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // UPDATE user

  updateUser: async (req, res) => {
    const password = req.body.password;
    if (password) {
      password = cryptoJs.AES.encrypt(password, process.env.PASS_SECRET);
    }

    try {
      const user = await User.findById(req.params.id);
      console.log('user--------->', user);

      if (!user) {
        res.status(400);
        throw new Error("l'utilisateur n'exite pas");
      }

      const UpdateUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true
      });
      console.log('UpdateUser', UpdateUser);

      res.status(200).json(UpdateUser);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //   DELETE user

  deleteUser: asyncHandler(async (req, res) => {
    // try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(400);
      throw new Error("l'utilisateur demandé n'existe pas");
    }
    await user.remove();
    res.status(200).json(`l'utilisateur avecl'ID ${user.id} a été supprimé`);

    // const deleteUser = await User.findByIdAndDelete(req.params.id);
    // res.status(500).json(` l'user ${deleteUser.username} a été supprimé`);
    // } catch (error) {
    //   res.status(500).json(error);
    // }
  })
};
module.exports = userController;
