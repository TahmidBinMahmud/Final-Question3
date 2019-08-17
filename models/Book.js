var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var bookSchema = new Schema({
  title: {
    type: String,
    required: "Title required"
  },
  author: {
    type: String,
    required: "Author required"
  },
  rating: {
      type: Number,
      required: "Rating required"
  }
});

var Book = mongoose.model('Article', bookSchema)
module.exports = Book;