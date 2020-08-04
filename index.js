require('dotenv').config();

const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

const resolvers = {
  Query: {
    me: () => {
      return {
        id: 'ID00001',
        username: 'J.K. Rowling',
        status: {
          views: 100,
          likes: 200,
          retweets: 300,
          responses: 400,
        }
      }
    }
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  engine: {
    apiKey: process.env.APOLLO_KEY,
    graphVariant: "current"
  },
  name: 'personal-graph'
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${ url }`);
});
