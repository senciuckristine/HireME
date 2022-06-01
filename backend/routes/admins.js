const router = require('express').Router();
let Admin = require('../models/admin.model.js');

router.route('/').get((req, res) => {
  Admin.find()
    .then(admins => res.json(admins))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;
  const company = req.body.company;

  const newAdmin = new Admin({
    username,
    password,
    name,
    company,
  });
  

  newAdmin.save()
    .then(() => res.json('Admin added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;