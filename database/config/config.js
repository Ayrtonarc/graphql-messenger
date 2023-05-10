// database/config/config.js

require('dotenv').config();

module.exports = {
  development: {
    username: 'root',
    password: 'chat96S$.b',
    database: 'chatdb',
    host: '127.0.0.1',
    dialect: 'mariadb',
  },
  test: {
    username: 'root',
    password: "chat96S$.b",
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mariadb',
  },
  production: {
    username: 'root',
    password: "chat96S$.b",
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mariadb',
  },
};