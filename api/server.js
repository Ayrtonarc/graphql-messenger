// api/server.js

const express = require('express');
const { createServer } = require('http');
const path = require("path");
const fs = require("fs");
const https = require("https");
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');
const typeDefs = require('../graphql/schemas');
const resolvers = require('../graphql/resolvers');
const context = require('../graphql/context');
const app = express();

app.use(cors());

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  introspection: true,
  playground: {
    settings: {
      'schema.polling.enable': false,
    },
  },
});
apolloServer.start().then(async() => {
    await apolloServer.applyMiddleware({ app, path: apolloServer.graphqlPath });
});

// descomentar para local
const server = createServer(app);

// const server = https.createServer({
//   key: fs.readFileSync(path.join("/etc/letsencrypt/live/ltmcrypto.com/privkey.pem")),
//   cert: fs.readFileSync(path.join("/etc/letsencrypt/live/ltmcrypto.com/cert.pem"))
// }, app);

module.exports = server;



/*
//a pollo server
apolloServer.start().then(async (res) => {
    await apolloServer.applyMiddleware({ app, path: apolloServer.graphqlPath });
    // app.listen(() => console.log(`Gateway API running at port: ${4002}`));
  });
*/



