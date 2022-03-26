const router = require('express').Router();
const Product = require('../models/Product');
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin
} = require('../middleware/verifyToken');
const productController = require('../controllers/productController');

//CREATE PRODUCT
router.post('/', verifyTokenAndAdmin, productController.createProduct);

//GET Product

router.get('/find/:id', productController.getOneProduct);

// GET ALL Product
router.get('/', productController.getAllProduct);

//  UPDATE
router.put('/:id', verifyTokenAndAdmin, productController.updateProduct);

//DELETE
router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    console.log('delete req params :', req.params.id);
    res.status(200).json('product has been deleted...');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
