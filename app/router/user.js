const router = require('express').Router();
const User = require('../models/User');
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin
} = require('../middleware/verifyToken');
const userController = require('../controllers/userController');

//GET USER
router.get('/find/:id', verifyTokenAndAuthorization, userController.getUser);

//GET ALL USER
router.get('/', verifyTokenAndAuthorization, userController.getAllUser);

//GET USER STATS
router.get('/stats', verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  console.log('datebefore', date);
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  console.log('dateafter', date);

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: '$createdAt' }
        }
      },
      {
        $group: {
          _id: '$month',
          total: { $sum: 1 }
        }
      }
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put('/:id', verifyTokenAndAuthorization, userController.updateUser);

//DELETE
router.delete('/:id', verifyTokenAndAuthorization, userController.deleteUser);

module.exports = router;
