'use strict';
var bcrypt = require('bcrypt-nodejs');

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

  User.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };

  // checking if password is valid
  User.validPassword = function (input, user) {

    return bcrypt.compareSync(input, user);
  };
  return User;
};