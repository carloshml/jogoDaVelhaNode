var express = require('express');
var bodyParser = require('body-parser');
//acessando do app.js para baixo
var app=express();
app.set('view engine','ejs');
app.set('views','app/views');
//por ele ser um midleware
app.use(express.static('./app/public'))
app.use(bodyParser.urlencoded({extended:true}));

require('./config')(app);
const port = 3000;
//npx nodemon app.js 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});