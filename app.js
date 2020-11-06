
const dotenv = require("dotenv");
const path = require("path");

const express = require("express");
const { json } = require("express");
const app = express();

// load env variables
dotenv.config({ path: "./config/config.env" });

// body parser
app.use(express.json());

// use static files
app.use(express.static(path.join(__dirname, "./public")));


app.get('/', (req, res) => {
  // res.render("index.html");
  // res.sendFile()
  res.end();
})

app.post('/contact', (req, res) => {
  res.setHeader("content-type", "application/json").json(req.body);
  console.log(req.body)
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