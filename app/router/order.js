const router = require('express').Router();
const res = require('express/lib/response');
const Order = require('../models/Order');
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin
} = require('../middleware/verifyToken');
const orderController = require('../controllers/orderController');

//CREATE
router.post('/', verifyToken, orderController.createOrder);

//GET USER Order

router.get(
  '/find/:userId',
  verifyTokenAndAuthorization,
  orderController.getOneOrder
);

// GET USER ORDERS
router.get('/', verifyTokenAndAdmin, orderController.getAllorders);

//  UPDATE
router.put('/:id', verifyTokenAndAdmin, orderController.updateOrder);

//DELETE
router.delete('/:id', verifyTokenAndAdmin, orderController.deleteOrder);

// GET MONTHLY INCOME
router.get('/income', verifyTokenAndAdmin, orderController.getMonthlyIncome);

module.exports = router;
