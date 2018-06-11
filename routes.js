const path = require('path');

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

    //The 404 Route (ALWAYS Keep this as the last route)
    app.get('*', function (req, res) {
        res.redirect('/');
    });
};