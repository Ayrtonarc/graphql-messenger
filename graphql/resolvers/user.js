// graphql/resolvers/user.js

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { AuthenticationError } = require('apollo-server-express');

const  {User}  = require('../../database/models');

module.exports = {
  Mutation: {
    async register(root, args, context) {
      const { firstname, lastname, email, password } = args;

      console.log("argsssss",args);
      return await User.create({firstname, lastname, email, password })
      // .then(result => {
      //   console.log("result en register",result)
      //   return result;
      // })
      // .catch(err=> console.log("error en register",err) );
     
    },

    async login(root, { input }, context) {
      const { email, password } = input;
      const user = await User.findOne({ where: { email } });
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ id: user.id }, 'mySecret');
        return { ...user.toJSON(), token };
      }
      throw new AuthenticationError('Invalid credentials');
    },
  },
};