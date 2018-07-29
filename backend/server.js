const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dbRoutes = require('./routes/databaseAccess.js');

const app = express();

mongoose.connect(process.env.MONGODB_URI);

app.use(express.static('build'));
app.use(bodyParser.json());
app.use('/db', dbRoutes);

app.listen(3000, () => {
  console.log('Server for React Todo App listening on port 3000!')
});
