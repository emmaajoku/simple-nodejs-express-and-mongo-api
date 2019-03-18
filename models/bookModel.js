const mongoose = require('mongoose');

const { Schema } = mongoose;

const boolModel = new Schema(
  {
    title: { type: String },
    author: { type: String },
    genre: { type: String },
    published: { type: String },
    read: { type: Boolean, default: false },

  },

);

module.exports = mongoose.model('Book', boolModel);
