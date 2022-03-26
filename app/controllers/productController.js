const Product = require('../models/Product');

const productController = {
  // CREATE product

  createProduct: async (req, res) => {
    const newProduct = await new Product(req.body);
    try {
      const savedProduct = newProduct.save();
      res.status(200).json(savedProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // GET one product

  getOneProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // GET all product

  getAllProduct: async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
      let products;

      if (qNew) {
        products = await Product.find().sort({ createdAt: -1 }).limit(2);
      } else if (qCategory) {
        products = await Product.find({
          categories: {
            $in: [qCategory]
          }
        });
      } else {
        products = await Product.find();
      }
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // UPDATE product

  updateProduct: async (req, res) => {
    try {
      const updateProduct = await Product.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body
        },
        { new: true }
      );
      res.status(200).json(updateProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // DELETE product

  deleteProduct: async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.status(200).json('votre produit a été supprimé');
    } catch (error) {
      res.status(500).json;
    }
  }
};
module.exports = productController;
