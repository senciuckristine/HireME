const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const surveyResponseSchema = new Schema({
    id: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 5
      },  
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    answer: {
        type: String,
        minlength: 1
    },
    question: {
      type: String,
      required: true,
      minlength: 1
  }
}, {
  timestamps: true,
});

const SurveyResponse = mongoose.model('Survey Response', surveyResponseSchema);

module.exports = SurveyResponse;