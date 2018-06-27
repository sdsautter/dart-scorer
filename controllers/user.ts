const db = require("../models");

export default class UserController {
    public createUser(user, res) {
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

    public getCricketStats(username): Promise<any> {
        return db.User.findOne({ where: { username } })
            .then((data) => data.cricket)
    }

    public getX01Stats(username): Promise<any> {
        return db.User.findOne({ where: { username } })
            .then((data) => data.x01)
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
}