'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    EventId: DataTypes.STRING,
    Place: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    eventName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Events',
  });
  return User;
};