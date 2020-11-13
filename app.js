const dotenv = require("dotenv");
const path = require("path");

const express = require("express");
const { isEmail, isAlpha } = require('validator'); // to validate user input

const app = express();

// load env variables
dotenv.config({ path: "./config/config.env" });

// body parser
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))
// use static files
app.use(express.static(__dirname + "/public"));
console.log(path.basename(__dirname));

app.get('/',function(req,res){
  res.sendFile("/index.html");
});

app.post('/', (req, res) => {
  const { name, email, comment } = req.body;
  if(isEmail(email) && isAlpha(name, 'en-US'))
  { console.log('yes')}
 
  console.log(`Name: ${name}, Comment: ${comment}, Email: ${email}`);
  res.redirect(301, '/');
})

const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`App up in ${process.env.NODE_ENV} listening on port ${PORT}!`);
// });


const server = app.listen(
  PORT, () => 
  console.log(`server up in ${process.env.NODE_ENV} mode on port ${PORT}`)
  );
  
  // Handle unhandled promise rejections
  process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
  // Close server and exit process
  server.close(() => process.exit(1));
})