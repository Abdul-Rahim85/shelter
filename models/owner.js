const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ownerSchema = new Schema({
  country: {
    type: String,
    required: true
  },

  ownerType:{
    type: String,
    required: true
  },

  gender:{
    type: String,
  },
  ownerNumber: {
    type: Number,
    required: true
  },
  contact: {
    type: Array,
    required: true
  }

}, { timestamps: true });


const Owner = mongoose.model('Owner', ownerSchema);

module.exports = Owner;