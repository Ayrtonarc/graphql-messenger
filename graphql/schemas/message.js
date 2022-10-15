
const { gql } = require('apollo-server-express');

module.exports = gql`


type MessageResponse {
    id: String!
    text: String!
    from: String!
    to: String!
    createdAt: String!
}

extend type Mutation {
    sendMessage(text: String!, username: String! ) : MessageResponse
}

`;