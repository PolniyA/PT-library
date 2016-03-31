module.exports = {

  attributes: {

    // The book's title
    // e.g. Dandelion Wine
    title: {
      type: 'string',
      required: true,
      unique: true
    },

    // The author's full name
    // e.g. Bradbury Ray
    author: {
      type: 'string',
      required: true
    },

    // The year of publishing
    // e.g. 1957
    year: {
      type: 'string',
      required: true
    },

    // The book's genre
    // e.g. prose
    genre: {
      type: 'string',
      required: true
    },

    // The book's description
    // e.g. "World-renowned fantasist Ray Bradbury has on several occasions stepped outside the arenas of horror, ..."
    description: {
      type: 'text',
      required: true
    },

    // The book's picture
    // this field is a base64 present
    picture: {
      type: 'text',
      required: true
    },

    // The set of comments for each book
    comments: {
      collection: 'commentsAndRatings',
      via: 'comments'
    },

    // The float number that takes from user's rating
    // e.g. 3.785
    rating: {
      collection: 'commentsAndRatings',
      via: 'rating'
    }
  }
};
