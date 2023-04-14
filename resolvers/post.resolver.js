const Post = require('./models/post.model');

const resolvers = {
  Query: {
    posts: async () => {
      try {
        const posts = await Post.find();
        return posts;
      } catch (error) {
        throw error;
      }
    },
    post: async (parent, args) => {
      try {
        const post = await Post.findById(args.id);
        return post;
      } catch (error) {
        throw error;
      }
    }
  },
  Mutation: {
    createPost: async (parent, args) => {
      try {
        const post = new Post(args);
        await post.save();
        return post;
      } catch (error) {
        throw error;
      }
    },
    updatePost: async (parent, args) => {
      try {
        const post = await Post.findByIdAndUpdate(args.id, args, { new: true });
        return post;
      } catch (error) {
        throw error;
      }
    },
    deletePost: async (parent, args) => {
      try {
        const post = await Post.findByIdAndDelete(args.id);
        return post;
      } catch (error) {
        throw error;
      }
    }
  },
  Post: {
    id: (parent) => parent._id,
    createdAt: (parent) => parent.createdAt.toISOString(),
    updatedAt: (parent) => parent.updatedAt.toISOString(),
  }
};

module.exports = resolvers;
