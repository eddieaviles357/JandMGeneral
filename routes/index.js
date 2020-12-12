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
    res.render("index");
  })
  .get('/about-us', (req, res) => {
    res.render("pages/about-us");
  })
  .get('/services', (req, res) => {
    res.render("pages/services");
  })
  .get('/gallery', (req, res) => {
    res.render("pages/gallery");
  })
  .get('/contact', (req, res) => {
    res.locals.submit = false;
    res.render("pages/contact");
  })
  .get('/testimonials', (req, res) => {
    res.render("pages/testimonials");
  })
  .post('/contact', validator, mailSender, (req, res) => {
    const { submit } = res.locals;
    (submit) ? res.render("/", { submit }): res.render("partials/rejected");
  })