module.exports = {

  'create': function (req, res, next) {
    CommentsAndRatings.create(req.params.all(), function addCommentary(err, commentary) {
      if (err) return next(err);

      res.redirect('/book/show/' + commentary.currentBook)
    });
  }
};

