"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require('sequelize');
const sequelize = new Sequelize();
exports.User = sequelize.define('user', {
    userName: {
        type: Sequelize.STRING,
        field: 'username' // Will result in an attribute that is firstName when user facing but first_name in the database
    },
    email: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true // Model tableName will be the same as the model name
});
//# sourceMappingURL=User.js.map