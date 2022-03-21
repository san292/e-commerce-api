const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 3000;

const userRoute = require('./app/router/user');
const authRoute = require('./app/router/auth');
const productRoute = require('./app/router/product');

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('DB connection successfull!'))
  .catch((error) => {
    console.error(error);
  });
app.use(express.json());

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/products', productRoute);

app.listen(PORT, () => {
  console.log(`backend server is running in localhost ${PORT}`);
});
