"use strict";
const express = require("express");
const router = express.Router({ mergeParams: true });
// user defined
const validator = require("../middleware/validator");
const mailSender = require("../middleware/mailSender.js")

module.exports = 
  router
  .get('/', (req,res) => {
    // used to render form
    res.locals.submit = false;
    res.render("index");
  })
  .post('/', validator, mailSender, (req, res) => {
    const { submit } = res.locals;
    (submit) ? res.render("index", { submit }): res.render("partials/rejected");
  })
