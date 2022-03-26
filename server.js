const express = require('express');
const app = express();
const colors = require('colors');
const dotenv = require('dotenv');
const errorMiddleware = require('./app/middleware/errorMiddleware');
const connectDB = require('./app/config/db');
const PORT = process.env.PORT || 3000;
dotenv.config();
const userRoute = require('./app/router/user');
const authRoute = require('./app/router/auth');
const productRoute = require('./app/router/product');
const cartRoute = require('./app/router/cart');
const orderRoute = require('./app/router/order');
const stripeRoute = require('./app/router/stripe');
const cors = require('cors');

corsOptions = {
  origin: '*',
  credentials: true
};
connectDB();

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);
app.use('/api/checkout', stripeRoute);

app.use(errorMiddleware.errorHandler);

app.listen(PORT, () => {
  console.log(`backend server is running in localhost ${PORT}`);
});
