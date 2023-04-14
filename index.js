const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');

// Importing typeDefs and resolvers
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

// Connecting to MongoDB using Mongoose
mongoose.connect('mongodb://localhost:27017/blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected!'))
  .catch((error) => console.log(error));

const app = express();

// Creating an instance of ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Adding middleware to express app
server.applyMiddleware({ app });

// Starting the server
app.listen({ port: 4000 }, () => {
  console.log(`Server running at http://localhost:4000${server.graphqlPath}`);
});
