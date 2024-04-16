const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  author: String,
  pageNumber: Number,
  review: Number,
  price: Number,
  category: String,
});

module.exports = mongoose.model("Book", bookSchema);
