const { QueryTypes } = require("sequelize");
const { users } = require("../models");
const db = require("../models");
const user = db.users;
const Op = db.Sequelize.Op;

exports.creater = async (req,res) => {

    let id;

    const users = await db.sequelize.query("SELECT COUNT(*) as x FROM `users`", {type : QueryTypes.SELECT})

    console.log(users, " here");
    newid = users[0]['x'];
    console.log(newid ," count");
    const newuser = {
        user_id : newid,
        email : req.body.email,
        name : req.body.name,
        user_type : req.body.user_type,
        phone : req.body.phone,
    }

    user.create(newuser)
    .then(data => {
        console.log(data);
        res.status(200).send("data inserted");
    })  
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });  
};



































// const { path } = require('express/lib/application');
// const mysql = require('mysql');
// const dotenv = require('dotenv');

// dotenv.config();
// let instance = null;


// const connection = mysql.createConnection({
//     host: process.env.HOST,
//     user: process.env.LOL,
//     password: process.env.PASSWORD,
//     database: process.env.DATABASE,
//     port: process.env.DB_PORT
// });


// connection.connect((err) => {
//     if (err) {
//         console.log(err.message);
//     }
//     // console.log(connection);
//     console.log('db ' + connection.state);
// });




// class DbService{
//     static getDbServiceInstance(){
//         return instance ? instance : new DbService();
//     }

//     async getAllData() {
//         try {
//             const response = await new Promise((resolve, reject) => {
//                 const query = "SELECT * FROM user;";

//                 connection.query(query, (err, results) => {
//                     if (err) reject(new Error(err.message));
//                     resolve(results);
//                 })
//             });
//             console.log(response);
//             return response;
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     async addtransaction(user_id, item_id, level, transaction_id, auth_id){
//         try {
//             const dateAdded = new Date();
//             const insertId = await new Promise((resolve, reject) => {
//                 const query = "INSERT INTO transaction (user_id, item_id, date_issued, level, transaction_id, auth_id) VALUES (?,?,?,?,?,?);";

//                 connection.query(query, [user_id, item_id, dateAdded, level, transaction_id, auth_id] , (err, result) => {
//                     if (err) reject(new Error(err.message));
//                     console.log(result);
//                     resolve(result.insertId);
//                 })
//             });
//             console.log(insertId);
//             return ({
//                 user_id : user_id,
//                 item_id : item_id,
//                 level: level,
//                 date_issued : dateAdded,
//                 transaction_id : transaction_id,
//                 auth_id : auth_id 
//             });
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     async addUser(user_id, email, name, user_type, phone, auth_id) {
//         try {
//             const insertId = await new Promise((resolve, reject) => {
//                 const query = "INSERT INTO user (user_id, email, name, user_type, phone, auth_id) VALUES (?,?,?,?,?,?);";

//                 connection.query(query, [user_id, email, name, user_type, phone, auth_id] , (err, result) => {
//                     if (err) reject(new Error(err.message));
//                     resolve(result.insertId);
//                 })
//             });
//             console.log(insertId);
            
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     async getpending(){
//         try {
//             const response = await new Promise((resolve, reject) => {
//                 const query = "SELECT * FROM transaction WHERE level < 2;";

//                 connection.query(query, (err, results) => {
//                     if (err) reject(new Error(err.message));
//                     resolve(results);
//                 })
//             });
//             console.log(response);
//             return response;
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     async getavailablesport(sport){
//         try{
//             const response = await new Promise((resolve, reject) => {
//                 const query = `SELECT item_name, COUNT(item_name) as stock FROM inventory_main WHERE sport_name = '${sport}' GROUP BY item_name ;`;

//                 connection.query(query, (err, results) => {
//                     if (err) reject(new Error(err.message));
//                     resolve(results);
//                 })
//             });
//             console.log(response);
//             return response;
//         } catch (error) {
//             console.log(error);
//         }
//     }


// }


// module.exports = DbService;