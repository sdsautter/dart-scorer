'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cricket: DataTypes.ARRAY(DataTypes.JSONB),
    x01: DataTypes.ARRAY(DataTypes.JSONB)
  }, {});
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};