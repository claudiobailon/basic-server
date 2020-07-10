'use strict';

// this will bring in my epress library
const express = require('express');

//bring in the dotenv library
//the job of this library is to find the .env file and get the variable out of it so we can us it in our JS file
require('dotenv').config();

//this gives us a variable that we can use to run all the methods that are in the express library
const app = express();

//this lets us serve a website from a directory
app.use(express.static('./public'));

const PORT = process.env.PORT;

app.get('/', function (request, response) {
  response.send('Hello World')
})


 
//turns on the server
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});


