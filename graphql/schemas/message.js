
const { gql } = require('apollo-server-express');

module.exports = gql`


type MessageResponse {
    id: Int!
    emmiter: String!
    receiver: String!
    text: String!
    createdAt: String!
}

extend type Mutation {
    saveMessage(text: String!, receiver: String! ) : MessageResponse
}

`;