const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 3000;
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('DB connection successfull!'))
  .catch((error) => {
    console.error(error);
  });

app.listen(PORT, () => {
  console.log(`backend server is running in localhost ${PORT}`);
});
