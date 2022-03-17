const express = require('express');
const app = express();
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`backend server is running in localhost ${PORT}`);
});
