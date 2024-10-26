const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const requestSchema = new Schema({
  type: {
    type: String,
    required: true
  },

  owner: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    required: true
  },

  comment: {
    type: String,
  },

  priorty: {
    type: Number
  },

  helpPlace: {
    type: String,
    required: true
  },

  note: {
    type: String
  }
}, { timestamps: true });

const Request = mongoose.model('Request', requestSchema);

module.exports = Request;