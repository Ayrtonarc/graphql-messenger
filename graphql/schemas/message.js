const { gql } = require('apollo-server-express');

module.exports = gql`
scalar Date

type MessageResponse {
    id: String!
    text: String!
    from: String
    to: String!
    createdAt: Date
    updatedAt: Date
}
extend type Query{
    getAllMessages(from: String!) : [MessageResponse]
}

extend type Mutation {
    sendMessage(text: String!, to: String! ) : MessageResponse
}
type Subscription{
    newMessage: MessageResponse
}
`;