const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');

// Load input validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// Load User model
const User = require('../../models/User');

// REGISTER
router.post('/register', (request, result) => {

  // Form validation
  const { errors, isValid } = validateRegisterInput(request.body);

  // Check validation
  if (!isValid) {
    return result.status(400).json(errors);
  }
  User.findOne({ username: request.body.username })
    .then((user) => {
      if (user) {
        return result.status(400).json({
          error: 'Username is already in use'
        });
      } else {
        const newUser = new User({
          username: request.body.username,
          password: request.body.password
        });

        // Hash password before saving in database
        bcrypt.genSalt(10, (error, salt) => {
          bcrypt.hash(newUser.password, salt, (error, hash) => {
            if (error) {
              throw error;
            }
            newUser.password = hash;
            newUser.save()
              .then((user) => {
                result.json(user);
              })
              .catch((error) => {
                console.log(error);
              });
          });
        });
      }
    });
});

// LOGIN
router.post('/login', (request, result) => {

  // Form validation
  const { errors, isValid } = validateLoginInput(request.body);

  // Check validation
  if (!isValid) {
    return result.status(400).json(errors);
  }
  const username = request.body.username;
  const password = request.body.password;  

  // Find user by email
  User.findOne({
    username: username
  })
    // Check if user exists
    .then((user) => {
      
      if (!user) {
        return result.status(404).json({
          error: 'Username not found'
        });
      }

      // Check password
      bcrypt.compare(password, user.password).then((isMatch) => {
        if (isMatch) {
          const payload = {
            id: user.id,
            username: user.username
          };

          // Sign token
          jwt.sign(payload, keys.secretOrKey, {
            expiresIn: 31556926 // 1 year in seconds
          }, (error, token) => {
            result.json({
              success: true,
              token: 'Bearer ' + token
            });
          }
          );
        } else {
          return result.status(400).json({
            error: 'Password incorrect'
          });
        }
      });
    });
});

router.get('/', (request, result) => {
  User.find()
  .then((users) => {
    console.log(users);
  })
  .catch((error) => {
    console.log(error);
  })
});

module.exports = router;