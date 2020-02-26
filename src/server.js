const ApolloServer = require('apollo-server').ApolloServer;
const ApolloServerLambda = require('apollo-server-lambda').ApolloServer;
const { gql } = require('apollo-server-lambda');

// Type and Resolver definitions
const typeDefs = gql`
  type Query {
    introduce: String
  }
`;

const resolver = {
  Query: {
    introduce: () => 'I am a serverless template from Waheed Afolabi 😎.',
  },
};

// Create both factory functions (for serverless lambda and local)
function createLamdbaServer() {
  return new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
  });
}

function createLocalServer() {
  return new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
  });
}

module.exports = {
  createLamdbaServer,
  createLocalServer,
};
