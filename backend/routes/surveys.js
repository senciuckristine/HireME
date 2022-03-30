const router = require('express').Router();
let Survey = require('../models/survey.model');

router.route('/').get((req, res) => {
  Survey.find()
    .then(surveys => res.json(surveys))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const id = req.body.id;
  const question = req.body.question;
  

  const newSurvey = new Survey({
    username,
    id,
    question,
  });

  newSurvey.save()
    .then(() => res.json('Survey added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;