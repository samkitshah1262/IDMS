const dotenv = require("dotenv");
const path = require("path");

if (!process.env.HOST) {
  dotenv.config({
    path: path.join(__dirname, "..", ".env"),
  });
}

module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "123456",
    DB: "testdb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };