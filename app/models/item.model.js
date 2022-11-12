// import { Sequelize, Model, DataTypes } from 'sequelize';

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
        quality: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        status: {
            type: Sequelize.STRING,
            allowNull: false
        },
    },{
        timestamps : false,
    });
  return Item;
}