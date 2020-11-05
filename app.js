// import express from "express";
const { createSecretKey } = require("crypto");
const express = require("express");
const path = require("path");

const app = express();

const port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, "/public")));

app.get('/', (req, res) => {
  // res.render("index.html");
  const message = "message send";
  console.log(req)
  // res.sendFile()
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.redirect("/");
  
})

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});