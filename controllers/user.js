"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db = require("../models");
class UserController {
    createUser(user) {
        const username = user.username.toLowerCase().trim()
            .toLowerCase().trim();
        console.log(username);
        if (username.length >= 3 && username.length <= 15) {
            return db.User.findOne({ where: { username } })
                .then((data) => {
                if (data === null || username !== 'guest') {
                    return db.User.create({
                        username: username,
                        password: db.User.generateHash(user.password),
                        cricket: [],
                        x01: [],
                        legWins: 0,
                        legTotal: 0,
                        setWins: 0,
                        setTotal: 0
                    });
                }
                else {
                    return "User already exists.";
                }
            });
        }
        else {
            return "Username has incorrect amount of characters.";
        }
    }
    getCricketStats(username) {
        return db.User.findOne({ where: { username: username.toLowerCase() } })
            .then((data) => {
            if (data !== null) {
                return data.cricket;
            }
            else {
                return null;
            }
        })
            .catch(err => err);
    }
    getX01Stats(username) {
        return db.User.findOne({ where: { username: username.toLowerCase() } })
            .then((data) => {
            if (data !== null) {
                return data.x01;
            }
            else {
                return null;
            }
        })
            .catch(err => err);
    }
    addCricketGame(id, game) {
        return db.User.findOne({ where: { id } })
            .then((user) => {
            const cricket = user.cricket;
            cricket.push(game);
            return db.User.update({ cricket }, { where: { id } });
        });
    }
    addX01Game(id, game) {
        return db.User.findOne({ where: { id } })
            .then((user) => {
            const x01 = user.x01;
            x01.push(game);
            return db.User.update({ x01 }, { where: { id } });
        });
    }
    findById(id) {
        return db.User.findOne({ where: { id } })
            .then((user) => {
            return user;
        })
            .catch((err) => {
            return err;
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=user.js.map