// const dotenv = require("dotenv");
const path = require("path");

// if (!process.env.HOST) {
//   dotenv.config({
//     path: path.join(__dirname, "..", ".env"),
//   });
// }

module.exports = {
    HOST: "localhost",
    USER: "test2",
    PASSWORD: "test2",
    DB: "inventory",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };