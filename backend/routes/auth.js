const express = require('express');
const crypto = require('crypto');
const router = express.Router();
const User = require('../models/User.js');

function hashPassword(password) {
  let hash = crypto.createHash('sha256');
  hash.update(password);
  return hash.digest('hex');
}

module.exports = function(passport) {

  router.get('/username', (req, res) => {
    if (req.user) res.json({loggedIn: true, username: req.user.username});
    else res.json({loggedIn: false});
  })

  router.post('/login', (req, res, next) => {
    req.body.password = hashPassword(req.body.password);
    passport.authenticate('local', (err, user) => {
      if (err) return res.status(500).json({success: false});
      if (!user) return res.status(400).json({success: false});
      req.logIn(user, (err) => {
        if (err) return res.status(500).json({success: false});
        return res.json({success: true});
      });
    })(req, res, next);
  });

  router.post('/register', (req, res) => {
    if (req.body.username && req.body.password) {
      (new User({
        username: req.body.username,
        password: hashPassword(req.body.password)
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
