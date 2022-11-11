import { Sequelize, Model, DataTypes } from 'sequelize';

module.exports = (sequelize, Sequelize) => {
const User = sequelize.define('User', {
    user_id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    user_type: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    auth_id:{ 
        type: Sequelize.STRING,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
});
  return User;
}