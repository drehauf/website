const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

const encrypt = (password, onSucess, onError) => {
  bcrypt.genSalt(10, (error, salt) => {
    bcrypt.hash(password, salt, (error, hash) => {
      if (error) {
        onError(error);
      }
      onSucess(hash);
    });
  });
};

const decrypt = (password, user, onSucess, onError) => {
  bcrypt.compare(password, user.password)
    .then((isMatch) => {
      if (isMatch) {
        const payload = {
          id: user.id,
          username: user.username
        };
        jwt.sign(payload, keys.secretOrKey, { // Sign token
          expiresIn: 31556926 // 1 year in seconds
        }, (error, token) => {
          onSucess(token);
        });
      } else {
        onError({
          error: 'Password incorrect'
        })
      }
    });
};

module.exports = { encrypt, decrypt };