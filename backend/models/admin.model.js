const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adminSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6
  },
  name: {
    type: String,
    required: true,
    minlength: 3
  },
  company: {
    type: String,
    required: true,
    minlength: 3
  }
}, {
  timestamps: true,
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;