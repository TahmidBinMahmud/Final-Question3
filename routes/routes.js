module.exports = function(app) {

    var book = require('./../controllers/controllers.js');
  
    //app.get('/new-book', book.new);
    app.get('/single-book', book.show);
    app.post('/book/create', book.create);
    app.get('/book/:bookID', book.single);
  
  }