"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require('path');
const user_1 = require("./controllers/user");
const userController = new user_1.default;
module.exports = (app) => {
    app.get('/settings', (req, res) => {
        res.sendFile(path.join(__dirname, './public/index.html'));
    });
    app.get('/rules', (req, res) => {
        res.sendFile(path.join(__dirname, './public/index.html'));
    });
    app.get('/cpu', (req, res) => {
        res.sendFile(path.join(__dirname, './public/index.html'));
    });
    app.get('/cpu*', (req, res) => {
        res.redirect('/cpu');
    });
    app.get('/pvp', (req, res) => {
        res.sendFile(path.join(__dirname, './public/index.html'));
    });
    app.get('/pvp*', (req, res) => {
        res.redirect('/pvp');
    });
    //The 404 Route (ALWAYS Keep this as the last route)
    app.get('*', function (req, res) {
        res.redirect('/');
    });
    app.post('/users', (req, res) => {
        userController.createUser(req.body, res);
        return;
    });
    app.put('/users/cricket/', (req, res) => {
        const game = res.body;
        userController.addCricketGame(1, game)
            .then(() => {
            return res.status(200).send("Cricket game pooped itself.");
        });
    });
};
//# sourceMappingURL=routes.js.map