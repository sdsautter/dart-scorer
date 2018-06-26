'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cricket: DataTypes.ARRAY(DataTypes.JSONB),
    x01: DataTypes.ARRAY(DataTypes.JSONB),
    legWins: DataTypes.INTEGER,
    legTotal: DataTypes.INTEGER,
    setWins: DataTypes.INTEGER,
    setTotal: DataTypes.INTEGER,
  }, {});
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};