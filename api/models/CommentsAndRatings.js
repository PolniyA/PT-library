module.exports = {

  attributes: {
    comments: {
      model: 'book',
      type: 'text',
      required: true
    },

    rating: {
      model: 'book',
      type: 'float',
      required: true
    }
  }
};

