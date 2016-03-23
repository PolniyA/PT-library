/**
 * BookController
 *
 * @description :: Server-side logic for managing books
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  'new': function (req, res) {
    res.view();
  },

  'create': function (req, res, next) {
    Book.create(req.params.all(), function bookCreated(err, book) {
      if (err) return next(err);

      res.redirect('/book/show/' + book.id)
    });
  },

  'show': function (req, res, next) {
    Book.findOne(req.param('id'), function foundBook(err, book) {
      if (err) return next(err);
      if (!book) return next();

      res.view({
        book: book
      })
    })
  }
};

