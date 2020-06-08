const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateEquipmentInput(data) {
  let errors = {};

  // Convert empty fields to strings for validator
  data.name = !isEmpty(data.name) ? data.name : '';
  data.amount = !isEmpty(data.amount) ? data.amount : '';
  data.rentalRate = !isEmpty(data.rentalRate) ? data.rentalRate : '';
  data.category = !isEmpty(data.category) ? data.category : '';

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name is required';
  }
  if (Validator.isEmpty(data.amount)) {
    errors.amount = 'Amount is required';
  }
  if (Validator.isEmpty(data.rentalRate)) {
    errors.rentalRate = 'Rental rate is required';
  }
  if (Validator.isEmpty(data.category)) {
    errors.page = 'Category is required';
  }

  if (!Validator.isLength(data.amount, {
    min: 1
  })) {
    errors.password = 'Amount must be at least one';
  }

  if (!Validator.isLength(data.rentalRate, {
    min: 1
  })) {
    errors.rentalRate = 'Rental rate must be at least one';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};