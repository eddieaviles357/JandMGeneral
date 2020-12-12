"use strict";
const dotenv = require("dotenv"),
      path = require("path"),
      express = require("express"),
      app = express();

// load env variables
dotenv.config({ path: "./config/config.env" });

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// use static files
app.use(express.static(__dirname + "/public"));

// view engine
app.set("views", path.join(__dirname, "/views"));
// app.set("views", path.join(__dirname, "/views/partials"));
app.set("view engine", "ejs");

// routes
const home = require("./routes/index");

app.use('/', home);
// end of routes

const PORT = process.env.PORT || 3000;

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
