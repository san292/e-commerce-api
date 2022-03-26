const router = require('express').Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin
} = require('../middleware/verifyToken');

const cartController = require('../controllers/cartController');

//CREATE
router.post('/', verifyToken, cartController.create);

//GET USER CART

router.get(
  '/find/:userId',
  verifyTokenAndAuthorization,
  cartController.findOneCartUser
);

// GET ALL
router.get('/', verifyTokenAndAdmin, cartController.findAllCartUser);

// update and delete refactorisé
// router
//   .route('/:id')
//   .put(verifyTokenAndAuthorization, cartController.updatedCart)
//   .delete(verifyTokenAndAuthorization, cartController.deleteCart);

// UPDATE
router.put('/:id', verifyTokenAndAuthorization, cartController.updatedCart);

//DELETE
router.delete('/:id', verifyTokenAndAuthorization, cartController.deleteCart);

module.exports = router;
