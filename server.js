const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const users = require('./routes/api/users');
const app = express();

// Bodyparser middleware
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

// DB Config
const database = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose.connect(database, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB successfully connected');
  })
  .catch((err) => {
    console.log(err)
  });

// Passport middleware
app.use(passport.initialize());
// Passport config
require('./config/passport')(passport);
// Routes
app.use('/api/users', users);

const port = 8000;
app.listen(port, () => {
  console.log('Server is running on port', port);
});