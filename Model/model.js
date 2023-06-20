const mongoose = require('mongoose');

const user = new mongoose.Schema({
  name: String,
  mobile: String,
  address: String,
  age: Number,
  createdAt: { 
    type: Date, 
    default: Date.now
  },
  isVerified: {
    type: Boolean,
    default: false
  }
});

const userModel = new mongoose.model('users', user);

module.exports = { userModel };
