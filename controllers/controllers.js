var Book = require('./../models/Book.js');

// module.exports.new = function(request, response) {
//     response.sendFile('/form.html')
// }
var dummyBook = {
    title: "Book Name",
    author: "Author Name",
    rating: "Rating"
  }

module.exports.show = function(request, response) {
    response.render('single.ejs', {books: dummyBook});
  }

  module.exports.create = function(request, response) {
    var new_book = new Book(request.body);
    new_book.save(function(err, data) {
      if (err)
        return response.status(400)
          .json({
            error: "Please enter all informations correctly"
          });
      console.log(data);
      return response.status(200)
        .json({
          message: "Book successfully added"
        });
  
    })
    console.log(request.body._id);
  }

  module.exports.single = function(request, response) {

    Book.findOne({_id:request.params.bookID},
      function(err, data){
        if(err){
          response.status(400)
            .json({
              error: "Database query error"
            });
        }else{
        response.render('single.ejs', {
          books: data
        })
      }
    });
  }