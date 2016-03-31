/**
 * StockController
 *
 * @description :: Server-side logic for managing stocks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  'new': function (req, res, next) {
    Book.findOne(req.param('owner'), function foundBook(err, book) {
      if (err) return next(err);
      if (!book) return next();

      res.view({
        book: book
      })
    })
  },

  'create': function (req, res, next) {
    Stock.create(req.params.all(), function stockCreated(err, stock) {
      if (err) return next(err);

      res.redirect('/book/show/' + stock.owner)
    });
  },
};

