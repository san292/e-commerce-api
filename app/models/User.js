const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'champs obligatoire'],
      unique: true
    },
    email: {
      type: String,
      required: [true, 'champs obligatoire'],
      unique: true
    },
    password: {
      type: String,
      required: [true, 'champs obligatoire']
    },
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);
module.exports = mongoose.model('User', UserSchema);
