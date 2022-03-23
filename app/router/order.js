const router = require('express').Router();
const res = require('express/lib/response');
const Order = require('../models/Order');
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin
} = require('./verifyToken');

//CREATE
router.post('/', verifyToken, async (req, res) => {
  const newOrder = new Order(req.body);
  console.log('newOrder', newOrder);
  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET USER CART

router.get('/find/:userId', verifyTokenAndAuthorization, async (req, res) => {
  try {
    const order = await Order.findOne({ userId: req.params.userId });
    console.log('prduit depuis le fichier Order L26', Order);
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET USER ORDERS
router.get('/', verifyTokenAndAdmin, async (req, res) => {
  try {
    const orders = await Order.find();

    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

//  UPDATE
router.put('/:id', verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    console.log('delete req params :', req.params.id);
    res.status(200).json('order has been deleted...');
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET MONTHLY INCOME
router.get('/income', verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  console.log('datebefore', date);
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  console.log('dateafter', date);

  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        $project: {
          month: { $month: '$createdAt' },
          sales: '$amount'
        }
      },
      {
        $group: {
          _id: '$month',
          total: { $sum: '$sales' }
        }
      }
    ]);
    res.status(200).json(income);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
