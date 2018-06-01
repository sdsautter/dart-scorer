const path = require('path');

module.exports = (app) => {
    app.get('/cricket',
        (req, res) => {
            res.sendFile(path.join(__dirname, './public/index.html'));
        });

    app.get('/x01',
        (req, res) => {
            res.sendFile(path.join(__dirname, './public/index.html'));
        });

    //The 404 Route (ALWAYS Keep this as the last route)
    app.get('*', function (req, res) {
        res.redirect('/');
    });
};