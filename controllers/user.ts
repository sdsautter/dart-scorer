const db = require("../models");

export default class UserController {
    public createUser(user) {
        return db.User.findOne({ where: { 'username': user.username.toLowerCase() } })
            .then((data) => {
                if (data === null || user.username.toLowerCase() !== 'guest') {
                    return db.User.create({
                        username: user.username.toLowerCase().trim(),
                        password: db.User.generateHash(user.password),
                        cricket: [],
                        x01: [],
                        legWins: 0,
                        legTotal: 0,
                        setWins: 0,
                        setTotal: 0
                    })
                } else {
                    return "User already exists."
                }
            })
    }


    public getCricketStats(username): Promise<any> {
        return db.User.findOne({ where: { username: username.toLowerCase() } })
            .then((data) => {
                if (data !== null) {
                    return data.cricket
                } else {
                    return null;
                }
            })
            .catch(err => err)
    }

    public getX01Stats(username): Promise<any> {
        return db.User.findOne({ where: { username: username.toLowerCase() } })
            .then((data) => {
                if (data !== null) {
                    return data.x01
                } else {
                    return null;
                }
            })
            .catch(err => err)
    }

    public addCricketGame(id, game): Promise<any> {
        return db.User.findOne({ where: { id } })
            .then((user) => {
                const cricket = user.cricket;
                cricket.push(game);
                return db.User.update({ cricket }, { where: { id } })
            })
    }

    public addX01Game(id, game) {
        return db.User.findOne({ where: { id } })
            .then((user) => {
                const x01 = user.x01;
                x01.push(game);
                return db.User.update({ x01 }, { where: { id } })
            })
    }

    public findById(id) {
        return db.User.findOne({ where: { id } })
            .then((user) => {
                return user;
            })
            .catch((err) => {
                return err;
            })
    }
}