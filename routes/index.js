const express = require("express");
const router = express.Router({ mergeParams: true });
const validator = require("../middleware/validator");

module.exports = 
  router
  .get('/', (req,res) => {
    // used to render form
    let submit = false;
    res.render("index", { submit: submit });
  })
  .post('/', validator)
