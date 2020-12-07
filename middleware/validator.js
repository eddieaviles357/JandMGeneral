"use strict";
// dependencies
const { json } = require("express");
const { isEmail, isAlpha, isAlphanumeric } = require("validator"); // Validate user input

const validator = async(req, res, next) => {
  // initialize to strings for validation to work
  let { name, email, comment } = req.body;

  // use to remove the form
  const MAX_NAME_LENGTH = 50;
  const MAX_COMMENT_LENGTH = 140;

  if(comment.length > MAX_COMMENT_LENGTH || name.length > MAX_NAME_LENGTH) {
    console.log("ERROR::EXCEDED::LENGTH");
    res.render("partials/rejected");
    console.log("yesyes")
    return;
  }
  
  log(name, email, comment);
  log2(name, "name");
  log2(comment, "comment");
    
  // remove whitespace
  if(comment.length === 0) { comment += "No Comment" };

  let noWhtSpcName = removeWhiteSpace(name, "name", true);
  let noWhtSpcComment = removeWhiteSpace(comment, "comment", true);


  console.log(noWhtSpcName)
  console.log(noWhtSpcComment)

  res.locals.submit = false;




if(
  !isEmail(email) || 
  !isAlpha(noWhtSpcName, "en-US") || 
  !isAlphanumeric(noWhtSpcComment, "en-US") )
  { 
    console.log("error");
    next();
    return;
  } 
  else 
  {
    res.locals.submit = true;
    next();
    return;
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
    return arg.trim().split(" ").join("SPC"); // array 
  }