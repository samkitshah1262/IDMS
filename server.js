const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());  /* bodyParser.json() is deprecated */
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */
// const db = require("./app/models/user.models");
// db.sequelize.sync();
// // drop the table if it already exists
const db = require("./app/models");
const { sequelize } = require("./app/models");
const { QueryTypes } = require("sequelize");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
    
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });


app.get("/", (req, res) => {
  res.json({ message: "Welcome to IDMS application." });
});
// set port, listen for requests
// const PORT = process.env.PORT || 8080;

require("./app/routes/user.routes")(app);
require("./app/routes/item.routes")(app);
require("./app/routes/transaction.routes")(app);
app.listen(8000, () => {
  console.log(`Server is running on port ${8000}.`);
});