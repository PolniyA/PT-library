module.exports = {

  attributes: {
    currentBook: {
      model: 'book',
      columnName: 'current_book',
      required: true
    },

    comments: {
      type: 'text',
      required: true
    },

    rating: {
      type: 'float',
      required: true
    }
  }
};

