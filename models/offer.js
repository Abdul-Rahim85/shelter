const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const offerSchema = new Schema({
  offerType: {
    type: String,
    required: true
  },

  userId: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    required: true
  },

  offerPlace: {
    type: String,
    required: true
  },

  ownerType: {
    type: String,
    required: true
  },

  quantity: {
    type: Number,
    required: true
  },

  note: {
    type: String
  }
}, { timestamps: true });

const Offer = mongoose.model('Offer', offerSchema);

module.exports = Offer;