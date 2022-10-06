

const jwt = require('jsonwebtoken')
const { AuthenticationError, UserInputError} = require('apollo-server-express');
const { Message } = require ('../../database/models');

module.exports = {
    Mutation: {
        async saveMessage (root, args, context){

        }
    }
}