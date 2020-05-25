const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateLoginInput(data) {
  let errors = {};

  // Convert empty fields to strings for validator
  data.username = !isEmpty(data.username) ? data.username : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  // Email checks
  if (Validator.isEmpty(data.username)) {
    errors.username = 'Username is required';
  } else if (Validator.isEmail(data.username)) {
    errors.username = 'Username is invalid';
  }

  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};