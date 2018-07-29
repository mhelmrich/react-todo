const express = require('express');
const router = express.Router();
const TodoItem = require('../models/TodoItem.js');

router.post('/add', (req, res) => {
  (new TodoItem({
    task: req.body.task
  }))
  .save()
  .then(response => {
    res.send(response);
  })
  .catch(error => {
    res.send(error);
  })
});

module.exports = router;
