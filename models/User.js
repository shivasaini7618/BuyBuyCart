const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  slug: { type: String, unique: true }
});

module.exports = mongoose.model("User", userSchema);
