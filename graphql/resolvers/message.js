

const jwt = require('jsonwebtoken')
const { AuthenticationError, UserInputError} = require('apollo-server-express');
const { Message } = require ('../../database/models');

module.exports = {
    Mutation: {
        async saveMessage (root, args, context){
            const user = context;
           if(!user) throw new AuthenticationError('Required Auth');
            const { text, receiver} = args;
            
            
            await Message.create({text:text, receiver: receiver});

            
            console.log("Zahori-----------", JSON.stringify(newMessage,null,4))
            return newMessage;


        }
    }
}