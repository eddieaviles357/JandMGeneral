const dotenv = require("dotenv"),
      path = require("path"),
      express = require("express"),
      app = express();
const { isEmail, isAlpha } = require("validator"); // Validate user input

// load env variables
dotenv.config({ path: "./config/config.env" });

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// use static files
app.use(express.static(__dirname + "/public"));

// view engine
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

// routes
app.get('/',function(req,res){
  let submit = false;
  res.render("index", { submit: submit });
});

app.post('/', (req, res) => {
  // initialize to strings for validation to work
  let name = '', // no numbers allowed
      email = '', 
      comment = '';
  // let submit = false;

  // concatinate user input
  name += req.body.name;
  email += req.body.email;
  comment += req.body.comment;

  console.log(
    `Name is: ${typeof name}: ${name},
    Email is: ${typeof email}: ${email},
    Comment is: ${typeof comment}: ${comment}`
    );

  if(isEmail(email) && isAlpha(name, "en-US"))
  { 
    submit = true;
    console.log("yes");
  }
  res.render("index", { submit : submit })
})

// end of routes


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