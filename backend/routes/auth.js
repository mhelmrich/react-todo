const express = require('express');
const router = express.Router();
const User = require('../models/User.js');

module.exports = function(passport) {

  router.post('/login', passport.authenticate('local', (err) => {
    if (err) res.json({success: false})
    else res.json({success: true});
  }));

  router.post('/signup', (req, res) => {
    if (req.body.username && req.body.password) {
      (new User({
        username: req.body.username,
        password: req.body.password,
      }))
      .save().then(() => res.json({success: true}))
      .catch((err) => res.status(500).json({success: false}));
    }
    else res.status(400).json({success: false});
  });

  router.use((req, res, next) => {
    if (req.user) next();
    else res.status(400).json({success: false});
  });

  router.post('/logout', (req, res) => {
    req.logout();
    res.json({success: true});
  });

  return router;
}
