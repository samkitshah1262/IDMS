import { Sequelize, Model, DataTypes } from 'sequelize';
const { Model } = require("sequelize");

const User = require("/user.models")['User'];
module.exports = (sequelize, Sequelize) => {
    const Item = sequelize.define("item", {
        item_id: {
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull: false
        },
        item_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        sport_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        availibility_status: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
    });
    const Transaction = sequelize.define("transactions",{
      user_id: {
        type: Sequelize.STRING,
        references: {
            model: User,
            key: 'user_id',
        },
    },
      item_id: {
        type: Sequelize.STRING,
        references: {
            model: Item,
            key: 'item_id',
        }
      },
      transaction_id: {
        type: Sequelize.BOOLEAN,
        autoIncrement: true,
        primaryKey: true
      },
        auth_id: {
            type: Sequelize.STRING,
            references: {
                model: Auth,
                key: 'auth_id',
            }
        },
        status: {
            type: Sequelize.INTEGER,
        },
        date_issued: {
            type: Sequelize.DATE().NOW,
            timestamps: true,
            defaultValue: Sequelize.NOW
        },
        date_returned: {
            type: Sequelize.DATE.NOW,
            timestamps: true,
            defaultValue: Sequelize.NOW
        },
    });

    return Transaction , Item;
};