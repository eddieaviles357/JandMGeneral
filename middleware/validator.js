const { json } = require("express");
const { isEmail, isAlpha, isAlphanumeric } = require("validator"); // Validate user input

const validator = (req, res, next) => {
  // use to remove the form
  let submit = false;
  let commentLength = 0;

  // initialize to strings for validation to work
  let name = '', email = '', comment = '';
  
  name += req.body.name;
  email += req.body.email;
  comment += req.body.comment;

  commentLength = comment.length;

  if(commentLength > 140) {
    console.log("error");
    res.render("rejected");
  }
      
  console.log(
    `Name is: ${typeof name}: ${name},
    Email is: ${typeof email}: ${email},
    Comment is: ${typeof comment}: ${comment}
    sanitize chars: ${escape(comment)}`);
    

  console.log(`isEmail: ${isEmail(email)}
    isAlpha: ${isAlpha(name, "en-US")},
    Comment is: ${isAlpha(comment, "en-US")}`)
  
  // remove whitespace
  let noWhtSpc = comment.split(" ").join("");

  if( !isEmail(email) || !isAlpha(name, "en-US") || !isAlpha(noWhtSpc) ) { 
    console.log("error");
    res.render("rejected");
  } else {
    submit = true;
    console.log("yes");
    res.render("index", { submit: submit });
  }
}

module.exports = validator;