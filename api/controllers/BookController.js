module.exports = {

  'new': function (req, res) {
    res.view();
  },

  'create': function (req, res, next) {
    req.acceptsCharset('utf-8');

    Book.create(req.params.all(), function bookCreated(err, book) {

      if (err) return next(err);

      res.redirect('/book')
    });
  },

  'show': function (req, res, next) {
    Book.findOne(req.param('id')).populateAll().exec(function foundBook(err, book) {
      if (err) return next(err);
      if (!book) return next();

      res.view({
        book: book
      });
    });
  },

  'index': function (req, res, next) {
    Book.find(function foundBook(err, books ) {
      if (err) return next(err);

      res.view({
        books: books
      })
    })
  },

  'edit': function (req, res, next) {
    Book.findOne(req.param('id'), function foundBook(err, book) {
      if (err) return next(err);
      if (!book) return next();

      res.view({
        book: book
      })
    })
  },

  'update': function (req, res, next) {
    Book.update(req.param('id'), req.params.all(), function bookUpdated(err) {
      if (err) {
        console.log("err", err);
        return res.redirect('/book/edit/' + req.param('id'))
      }

      res.redirect('/book/show/' + req.param('id'));
    })
  },

  'destroy': function (req, res, next) {
    Book.destroy(req.param('id')).exec(function () {
      res.redirect('/book/');
    });
  }
};
