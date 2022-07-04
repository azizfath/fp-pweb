require('dotenv').config();

const config = {
  db: {
    /* don't expose password or any sensitive info, done only for demo */
    host: process.env.MARAIDB_HOST,
    user: process.env.MARIADB_USER,
    password: process.env.MARIADB_PASSWORD,
    database: process.env.MARIADB_DATABASE,
    connectionLimit: 10
  }
};
module.exports = config;