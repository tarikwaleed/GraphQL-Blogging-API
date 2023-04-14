const { gql } = require('apollo-server-express');

const postTypeDefs = gql`
  type Post {
    id: ID!
    title: String!
    content: String!
    author: String!
  }

  input PostInput {
    title: String!
    content: String!
    author: String!
  }

  extend type Query {
    getPosts: [Post]
  }

  extend type Mutation {
    createPost(post: PostInput): Post
  }
`;

module.exports = postTypeDefs;
