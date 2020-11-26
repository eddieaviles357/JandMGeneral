const express = require("express");
const router = express.Router({ mergeParams: true });
const validator = require("../middleware/validator");

module.exports = 
  router
  .get('/', (req,res) => {
    // used to render form
    res.locals.submit = false;
    res.render("index");
  })
  .post('/', validator, (req, res) => {
    const submit = res.locals.submit;
    (submit) ? 
      res.render("index", { submit }): 
      res.render("partials/rejected");
    // res.render("index", { submit });
  })
