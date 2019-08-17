var Book = require('./../models/Book.js');

// module.exports.new = function(request, response) {
//     response.sendFile('/form.html')
// }

module.exports.show = function(request, response) {
    response.render('single.ejs');
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
    console.log(request.body);
  }