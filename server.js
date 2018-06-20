// Declare Dependencies 
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');
const methodOverride = require('method-override');
const path = require('path');
const Sequelize = require('sequelize'); 
const User = require('./server/models/User');

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

//Routes
require('./routes.js')(app);

// Sequelize
var sequelize = new Sequelize('postgres://postgres:sautter@localhost:5432/darts');
sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

  // force: true will drop the table if it already exists
  User.sync({force: true}).then(function () {
    // Table created
    return User.create({
      firstName: 'John',
      lastName: 'Peahen'
    });
  });
  

app.listen(PORT, () => {
    console.log(`Localhost:${PORT}`);
  });
