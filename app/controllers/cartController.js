const Cart = require('../models/Cart');

const cartController = {
  create: async (req, res) => {
    const newCart = new Cart(req.body);
    console.log('newCart', newCart);
    try {
      const savedCart = await newCart.save();
      res.status(200).json(savedCart);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // get one userCart

  findOneCartUser: async (req, res) => {
    try {
      const cart = await Cart.findOne({ userId: req.params.userId });
      console.log('prduit depuis le fichier product L26', product);
      res.status(200).json(cart);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // GET All CartUser
  findAllCartUser: async (req, res) => {
    try {
      const carts = await Cart.find();

      res.status(200).json(carts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //UPDATE cart
  updatedCart: async (req, res) => {
    try {
      const updatedCart = await Cart.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body
        },
        { new: true }
      );
      res.status(200).json(updatedCart);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //DELETE cart
  deleteCart: async (req, res) => {
    try {
      await Cart.findByIdAndDelete(req.params.id);
      console.log('delete req params :', req.params.id);
      res.status(200).json('cart has been deleted...');
    } catch (err) {
      res.status(500).json(err);
    }
  }
};

module.exports = cartController;
