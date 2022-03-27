const router = require('express').Router();

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
router.delete('/:id', verifyTokenAndAdmin, productController.deleteProduct);

module.exports = router;
