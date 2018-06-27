const path = require('path');
import UserController from './controllers/user';

const userController = new UserController;

module.exports = (app) => {
    app.get('/settings',
        (req, res) => {
            res.sendFile(path.join(__dirname, './public/index.html'));
        });
    app.get('/rules',
        (req, res) => {
            res.sendFile(path.join(__dirname, './public/index.html'));
        });

    app.get('/cpu',
        (req, res) => {
            res.sendFile(path.join(__dirname, './public/index.html'));
        });
    app.get('/cpu*',
        (req, res) => {
            res.redirect('/cpu');
        });
    app.get('/pvp',
        (req, res) => {
            res.sendFile(path.join(__dirname, './public/index.html'));
        });
    app.get('/pvp*',
        (req, res) => {
            res.redirect('/pvp');
        });

    /**
     * 
     * USER ROUTES
     * 
     */
    app.get('/user/:username', (req, res) => {
        res.sendFile(path.join(__dirname, './public/index.html'));
        return;
    });
    app.get('/user/:username/cricket', (req, res) => {
        const username = req.params.username;
        userController.getCricketStats(username)
            .then((cricket) => {
                return res.json(cricket);
            });
        return;
    });
    app.get('/user/:username/x01', (req, res) => {
        const username = req.params.username;
        userController.getX01Stats(username)
            .then((x01) => {
                return res.json(x01);
            });
        return;
    });
    app.post('/user', (req, res) => {
        userController.createUser(req.body, res)
            .then(() => {
                return res.status(200).send("User added.")
            });
        return;
    });
    app.put('/user/cricket/', (req, res) => {
        const game = req.body;
        userController.addCricketGame(1, game)
            .then(() => {
                return res.status(200).send("Cricket game added.")
            });
    });
    app.put('/user/x01/', (req, res) => {
        const game = req.body;
        userController.addX01Game(1, game)
            .then(() => {
                return res.status(200).send("X01 game added.")
            });
    })


    //The 404 Route (ALWAYS Keep this as the last route)
    app.get('*', function (req, res) {
        res.redirect('/');
    });

};