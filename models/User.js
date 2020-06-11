const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: [
      true, 
      'Username required'
    ],
    min: [
      3,
      'Username must be at least 3 characters in length'
    ],
    max: [
      30,
      'Username must be less than 15 characters in length'
    ],
    lowercase: [
      true,
      'Username must be lowercase'
    ],
    match: [
      /^[a-zA-Z]+$/, 
      'Username can only contain letters'
    ],
    unique: true
  },
  password: {
    type: String,
    required: [
      true,
      'Password required'
    ],
    // match: [
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    //   'Password must contain at least 8 characters: at least one uppercase letter, one lowercase letter, one number and one special character'
    // ]
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('users', UserSchema);