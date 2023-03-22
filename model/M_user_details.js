const mongoose = require("mongoose");

// ---------------Model for 'users'----------------

const detailSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  photo: {
    type: String,
    
  },
  address: {
    type: String,
    required: true,
  },
  pin_code: {
    type: Number,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("detail", detailSchema);
