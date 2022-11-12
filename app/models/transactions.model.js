// import { Sequelize, Model, DataTypes } from 'sequelize';
// const { Model, Sequelize, DataTypes } = require("sequelize");

const User = require("./user.model")['User'];
const Item = require("./item.model")['Item'];
module.exports = (sequelize, Sequelize) => {
    const Transaction = sequelize.define("transaction",{
      user_id: {
        type: Sequelize.STRING,
        // references: {
        //     model: User,
        //     key: 'user_id',
        // },
    },
      item_id: {
        type: Sequelize.STRING,
        // references: {
        //     model: Item,
        //     key: 'item_id',
        // }
      },
      transaction_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
        auth_id: {
            type: Sequelize.INTEGER,
            defaultValue : null
        },
        status: {
            type: Sequelize.STRING,
        },
        date_issued: {
            type: Sequelize.DATE,
            timestamps: true,
            defaultValue: Sequelize.NOW
        },
        date_returned: {
            type: Sequelize.DATE,
            timestamps: true,
            defaultValue: null
        },
    },{
      timestamps : false,
  });

    return Transaction;
};