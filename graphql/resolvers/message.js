const jwt = require('jsonwebtoken')
const { AuthenticationError, UserInputError} = require('apollo-server-express');
const {User, Message } = require ('../../database/models');

module.exports = {

    // Query: {
        
    // },
    
    Mutation: {
        async sendMessage (root, args, context){
            const user = context;
           if(!user) throw new AuthenticationError('Se requiere autenticacion');
            
            const { text, username} = args;
            const userExist = await User.findOne({where: { username: username}});

            if(!userExist){
                throw new UserInputError('Usuario no existe')
            } 
            
            if(text.trim() === ''){
                throw new UserInputError('Mensaje esta vacio');
            }

            const message = await Message.create({
                
                from: user.username
            

            })

            //console.log("Zahori-----------", JSON.stringify(newMessage,null,4))
            


        }
    }
}