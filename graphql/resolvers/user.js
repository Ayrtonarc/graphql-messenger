// graphql/resolvers/user.js

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { AuthenticationError, UserInputError } = require('apollo-server-express');
const { EMAIL_PATTERN } = require('../../utils/globalconstants');
const  {User}  = require('../../database/models');
const { Op } = require('sequelize');

module.exports = {
  Mutation: {
    async register(root, args, context) {
      let { firstname, lastname, nickname, email, password } = args;
      email = email.trim().toLowerCase();

      //let user = await User.findOne({ where: { [{ email }]  });
      //if(user) throw UserInputError("Este email ya esta registrado");
      if (!EMAIL_PATTERN.test(email)) throw new UserInputError("email no valido")
      console.log("argsssss",args);
      return await User.create({firstname, lastname, nickname, email, password })
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