const router = require('express').Router();
let SurveyResponse = require('../models/surveyResponse.model');

router.route('/').get((req, res) => {
    SurveyResponse.find()
    .then(surveyResponses => res.json(surveyResponses))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const answer = req.body.answer;
  const question = req.body.question;

  const newSurveyResponse = new SurveyResponse({
    id,
    name,
    answer,
    question,
  });

  newSurveyResponse.save()
    .then(() => res.json('SurveyResponse added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;