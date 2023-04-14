const Author = require('../models/author.model');

const resolvers = {
  Query: {
    author: async (_, { id }) => {
      try {
        const author = await Author.findById(id).populate('posts');
        return author;
      } catch (err) {
        throw new Error(`Failed to fetch author with id ${id}: ${err.message}`);
      }
    },
    authors: async () => {
      try {
        const authors = await Author.find().populate('posts');
        return authors;
      } catch (err) {
        throw new Error(`Failed to fetch authors: ${err.message}`);
      }
    }
  },
  Mutation: {
    addAuthor: async (_, { input }) => {
      try {
        const author = new Author(input);
        await author.save();
        return author;
      } catch (err) {
        throw new Error(`Failed to add author: ${err.message}`);
      }
    }
  }
};

module.exports = resolvers;
