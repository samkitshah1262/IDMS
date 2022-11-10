import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize('::memory:');
const User = sequelize.define('User', {
  username: DataTypes.STRING,
  birthday: DataTypes.DATE,
});