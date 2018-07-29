const express = require('express');
const router = express.Router();
const TodoItem = require('../models/TodoItem.js');

router.get('/all', (req, res) => {
  TodoItem.find()
  .then((todos) => {
    res.send(todos);
  })
  .catch((error) => {
    res.send(error);
  })
});

router.post('/add', (req, res) => {
  (new TodoItem({
    task: req.body.task
  }))
  .save()
  .then((todo) => {
    res.send(todo);
  })
  .catch((error) => {
    res.send(error);
  })
});

router.post('/remove', (req, res) => {
  TodoItem.findByIdAndRemove(req.body.id)
  .then((todo) => {
    res.send(todo);
  })
  .catch((error) => {
    res.send(error);
  })
});

router.post('/toggle', (req, res) => {
  TodoItem.findByIdAndUpdate(req.body.id,
    {$set: {completed: req.body.to}})
  .then((todo) => {
    todo.completed = !todo.completed;
    res.send(todo);
  })
  .catch((error) => {
    res.send(error);
  })
});

module.exports = router;
