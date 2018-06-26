// Declare Dependencies 
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');
const methodOverride = require('method-override');
const path = require('path');
const db = require("./models");
var passport = require("passport");

// Create Express server
const app = express();
const PORT = process.env.PORT || 4012;
// Define public directory
app.use(express.static(path.join(__dirname, 'public')));
// Define BodyParser
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

//Routes
require('./routes.js')(app);

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
  });
});
