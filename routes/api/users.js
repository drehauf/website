const express = require('express');
const router = express.Router();

const { encrypt, decrypt } = require('../../validation/validator.js');
const User = require('../../models/User');

//MARK: POST Register
router.post('/register', (request, response) => {
  User.findOne({
    username: request.body.username
  })
    .then((user) => {
      if (user) {
        return response.status(400).json({
          error: 'Username is not available'
        });
      } else {
        const newUser = new User({
          username: request.body.username,
          password: request.body.password,
          isAdmin: request.body.isAdmin
        });
        encrypt(newUser.password, (hash) => {
          newUser.password = hash;
          newUser.save()
            .then((user) => {
              response.status(200).json(user);
            })
            .catch((error) => {
              response.status(500).json(error);
            })
        }, (error) => {
          throw error;
        });
      }
    });
});

//MARK: POST Login
router.post('/login', (request, response) => {
  User.findOne({
    username: request.body.username
  })
    .then((user) => {
      if (!user) {
        return response.status(404).json({
          error: 'Username not found'
        });
      }
      decrypt(request.body.password, user, (token) => {
        response.status(200).json({
          success: true,
          token: 'Bearer ' + token
        });
      }, (error) => {
        response.status(404).json(error);
      });
    });
});

//MARK: GET All
router.get('/', (request, response) => {
  User.find()
    .then((item) => {
      response.status(200).json(item);
    })
    .catch((error) => {
      response.status(500).json(error);
    })
});

//MARK: GET By Username
router.get('/:username', (request, response) => {
  User.findOne({
    username: request.params.username
  })
    .then((user) => {
      response.status(200).json(user);
    })
    .catch((error) => {
      response.status(500).json(error);
    });
});

//MARK: DELETE By Username
router.delete('/:username', (request, response) => { // response can be null
  if (request.body.username && request.body.password) { 
    User.findOne({
      username: request.body.username
    })
      .then((user) => {
        if (user) {
          decrypt(request.body.password, user, (token) => {
            if (user.isAdmin === true) {
              User.findOneAndDelete({
                username: request.params.username
              })
                .then((user) => {
                  response.status(200).json(user);
                })
                .catch((error) => {
                  response.status(500).json(error);
                });
            } else {
              response.status(403).json({
                error: 'Admin required'
              })
            }
          }, (error) => {
            response.status(404).json(error);
          });
        } else { // is username or password missing? or wrong? which one
          return response.status(404).json({
            error: 'Username not found'
          });
        }
      })
      .catch((error) => {
        response.status(500).json(error);
      })
  } else {
    response.status(404).json({ // username or password wrong?
      error: 'Username not found'
    })
  }
});

//MARK: PATCH By Username
router.patch('/:username', (request, response) => {
  User.findOneAndUpdate({
    username: request.params.username
  }, request.body, {
    new: true
  })
  .then((user) => {
    if (!user) { // same as <DELETE by user as admin>, (username/password) missing/wrong?
      response.status(404).json({
        error: 'User not found'
      });
    }
    response.status(200).json(user);
  })
  .catch((error) => {
    response.status(500).json(error);
  })
});

module.exports = router;