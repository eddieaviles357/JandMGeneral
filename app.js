
const dotenv = require("dotenv");
const path = require("path");

const express = require("express");
// const { json } = require("express");
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
  const name = req.body.name;
  const comment = req.body.comment;
  const email = req.body.email;
  console.log(`Name: ${name}, Comment: ${comment}, Email: ${email}`);
  res.send(
    `<h1>Thanks for submitting</h1><a href="/">Press to go home</a>`)
  // res.redirect('/#contact');
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