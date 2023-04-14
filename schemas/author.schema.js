const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Author {
    id: ID!
    name: String!
    email: String!
    posts: [Post!]
  }

  extend type Query {
    author(id: ID!): Author
    authors: [Author!]!
  }

  input AuthorInput {
    name: String!
    email: String!
  }

  extend type Mutation {
    addAuthor(input: AuthorInput!): Author
  }
`;

module.exports = typeDefs;
