const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const surveySchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: false,
    trim: true,
    minlength: 5,
    maxlength: 5
  },
  username: {
    type: String,
    required: true,
    unique: false,
    trim: true,
    minlength: 3
  },
  question: {
    type: String,
    required: true,
    unique: false,
    minlength: 1,
  }
}, {
  timestamps: true,
});

const Survey = mongoose.model('Survey', surveySchema);

module.exports = Survey;