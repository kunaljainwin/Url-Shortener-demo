const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const urlSchema = new Schema({
  originalUrl: {
    type: String,
    required: true
  },
  shortUrl: {
    type: String,
    required: true,
    unique: true
  },
  dateCreated: {
    type: Date,
    default: Date.now
  },
  clicks: {
    type: Number,
    default: 0
  }
});

const Url = mongoose.model('Url', urlSchema);

module.exports = Url;
