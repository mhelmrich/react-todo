const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = require('./models/User');
const auth = require('./routes/auth');
const dbRoutes = require('./routes/databaseAccess.js');

const app = express();

mongoose.connect(process.env.MONGODB_URI);

app.use(express.static('build'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({secret: process.env.SECRET}));

passport.serializeUser((user, done) => done(null, user._id));

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => done(err, user));
});

passport.use(new LocalStrategy((username, password, done) => {
  User.findOne({username: username}, (err, user) => {
    if (err) return done(err);
    if (!user) return done(null, false);
    if (user.password !== password) return done(null, false);
    return done(null, user);
  });
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', auth(passport));
app.use('/db', dbRoutes);

app.listen(3000, () => {
  console.log('Server for React Todo App listening on port 3000!')
});
