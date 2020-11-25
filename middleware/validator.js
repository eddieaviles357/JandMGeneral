const { json } = require("express");
const { isEmail, isAlpha, isAlphanumeric } = require("validator"); // Validate user input



const validator = (req, res, next) => {
  // initialize to strings for validation to work
  let name = req.body.name;
  let email = req.body.email;
  let comment = req.body.comment;

  // use to remove the form
  let nameLength = 0;
  let commentLength = 0;
    
    
  commentLength = comment.length;
  
  if(commentLength > 140) {
    console.log("error");
    res.render("partials/rejected");
  }
  
  log(name, email, comment);
  log2(name, "name");
  log2(comment, "comment");
    
  // remove whitespace
  let noWhtSpcName = removeWhiteSpace(name, "name", true);
  let noWhtSpcComment = removeWhiteSpace(comment, "comment", true);
  
  if(
    !isEmail(email) || 
    !isAlpha(noWhtSpcName, "en-US") || 
    !isAlphanumeric(noWhtSpcComment, "en-US") )
    { 
      console.log("error");
      res.render("partials/rejected");
    } 
    else 
    {
      req.submit = true;
      console.log("isSubmit: ", req.submit);
      next();
    }
}
  
module.exports = validator;
  
function log(name, email, comment) {
  console.log(
    `++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    ==== Type of Name: ( ${typeof name} ): ( ${name} ), isAlpha: ( ${isAlpha(name, "en-US") } ),
    ==== Email is: ( ${typeof email} ): ( ${email} ), isEmail: ( ${isEmail(email)} ),
  ==== Comment is: ( ${typeof comment} ): ( ${comment} ), isAlphaNumeric: ( ${isAlphanumeric(comment, "en-US")} ),
  ==== sanitize chars comment: ( ${escape(comment)} )
  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++`);
}
function log2(name, string) {
  console.log(
    `isAlpha afterWhiteSpaceRemoved${string}: ( ${isAlpha(removeWhiteSpace(name, string), "en-US")} ),
    escape ${string}: ( ${escape(name)} )`);
  }
function removeWhiteSpace(arg, string, itIs = false) {
    if(itIs) {
      
      console.log(`No whitespace ( ${string} ) is: ( ${arg.trim().split(" ").join("S")} )`);
    }
    return arg.trim().split(" ").join("S"); // array 
  }