const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  image: { type: String },

});


const userModel = mongoose.model("user", userSchema);
module.exports=userModel