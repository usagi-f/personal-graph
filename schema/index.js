const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    username: String
    status: Status
  }

  type Status {
    views: Int
    likes: Int
    retweets: Int
    responses: Int
  }

  type Query {
    me: User
  }
`;

module.exports = typeDefs;
