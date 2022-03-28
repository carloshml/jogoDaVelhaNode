const express = require('express');
const app = express();
require('./config')(app);
const port = 3000;
//npx nodemon app.js 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});