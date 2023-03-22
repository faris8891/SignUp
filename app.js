// -----------Express server-----------
const express = require("express");
const app = express();
app.listen(3000, () => {
  console.log("express connected");
});

// ----------------------

// ----------------------
// 
const path = require("path");
let uploads = require("path").join(__dirname, "/uploads");
app.use(express.static("uploads"));

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

// ---------Mongoose connection-----------

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/login_user").then(() => {
  console.log("db connected");
});

// ---------Use router-----------

const login = require("./router/R_login");
app.use("/login", login);

const signUp = require("./router/R_signup");
app.use("/signup", signUp);

const home = require("./router/R_home");
app.use("/", home);
