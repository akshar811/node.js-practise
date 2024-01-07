const mongoose = require("mongoose");

const usermodel = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
});

const user = mongoose.model("user", usermodel);

module.exports = user;
