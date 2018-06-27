"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db = require("../models");
class UserController {
    createUser(user, res) {
        return db.User.create({
            username: user.username,
            password: user.password,
            cricket: [],
            x01: [],
            legWins: 0,
            legTotal: 0,
            setWins: 0,
            setTotal: 0
        })
            .then(() => res.status(200).send('User created.'));
    }
    getCricketStats(username) {
        return db.User.findOne({ where: { username } })
            .then((data) => data.cricket);
    }
    getX01Stats(username) {
        return db.User.findOne({ where: { username } })
            .then((data) => data.x01);
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
}
exports.default = UserController;
//# sourceMappingURL=user.js.map