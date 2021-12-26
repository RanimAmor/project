var express = require('express');
var mongoose = require('mongoose');
const dotenv = require("dotenv").config({ path: "./config/.env"});
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
var userRoute = require ('./routes/userRoute');
var categoryRoute = require ('./routes/categoryRoute');
var offerRoute = require ('./routes/offerRoute');





//database connection
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true, useUnifiedTopology: true}, (err)=> err ? console.error(err): console.log("connected to the database"))

//middlewares
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

//routes
app.use('/auth', userRoute);
app.use('/categories', categoryRoute);
app.use('/offers', offerRoute);





//starting the server
var server = app.listen( 5000, () => {

  console.log('Server is started on localhost:'+ (5000))
})