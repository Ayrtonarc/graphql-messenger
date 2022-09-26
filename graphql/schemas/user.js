// graphql/schema/user.js

const { gql } = require('apollo-server-express');

module.exports = gql`

 type User {
     id: Int!
     firstname: String!
     lastname: String!
     email: String!
     password: String!
 }

 extend type Mutation {
     register(firstname: String, lastname: String!, nickname: String!, password: String!, email: String! ): RegisterResponse
     login(email: String!, password: String!): LoginResponse
 }

 type RegisterResponse {
    id: Int!
    firstname: String
    lastname: String
    nickname: String
    email: String!
 }

  type LoginResponse {
    id: Int!
    name: String!
    email: String!
    token: String!
 }
`;