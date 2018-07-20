var LocalStrategy = require('passport-local').Strategy;
const path = require('path');
import UserController from './controllers/user';

const userController = new UserController;

module.exports = (app, passport) => {
    app.get('/login',
        (req, res) => {
            res.sendFile(path.join(__dirname, './public/index.html'));
        });
    app.get('/signup',
        (req, res) => {
            res.sendFile(path.join(__dirname, './public/index.html'));
        });
    app.post('/login',
        passport.authenticate('local-login', { failureRedirect: '/' }),
        function (req, res) {
            if (req.user) {
                return res.send(req.user.username);
            } else {
                return res.send('No user found');
            }
        });
    app.post('/logout', function (req, res) {
        req.logout();
        res.send("logged out");
    });
    app.post('/signup', passport.authenticate('local-signup', { failureFlash: true }),
        function (req, res) {
            res.send('Signed up');
        }
    );

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

    app.get('/username', (req, res) => {
        if (req.user) {
            return res.send(req.user.username);
        }
        else {
            return res.send("guest");
        }
    })
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
    app.get('/user/:username',
        (req, res) => {
            res.sendFile(path.join(__dirname, './public/index.html'));
        });
    app.post('/user', (req, res) => {
        userController.createUser(req.body)
            .then(() => {
                return res.status(200).send("User added.")
            });
        return;
    });
    app.put('/user/cricket/', (req, res) => {
        const game = req.body;
        if (req.user) {
            return userController.addCricketGame(req.user.id, game)
                .then(() => {
                    return res.status(200).send("Cricket game added.")
                });
        } else {
            return res.send('No user logged in');
        }
    });
    app.put('/user/x01/', (req, res) => {
        const game = req.body;
        if (req.user) {
            return userController.addX01Game(req.user.id, game)
                .then(() => {
                    return res.status(200).send("X01 game added.")
                });
        } else {
            return res.send('No user logged in');
        }
    })

    app.get('/',
        (req, res) => {
            res.sendFile(path.join(__dirname, './public/index.html'));
        });

    app.get('/home',
        (req, res) => {
            res.sendFile(path.join(__dirname, './public/index.html'));
        });

    app.get('/service-worker.js', function (req, res) {
        res.sendStatus(200);
    });

    //The 404 Route (ALWAYS Keep this as the last route)
    app.get('*', function (req, res) {
        res.redirect('/');
    });

    function isLoggedIn(req, res, next) {

        // if user is authenticated in the session, carry on 
        if (req.isAuthenticated())
            return next();

        // if they aren't redirect them to the home page
        res.redirect('/');
    }

}