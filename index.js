var express = require('express'),
  mongoose = require('mongoose');
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  errorHandler = require('error-handler'),
  morgan = require('morgan'),
  routes = require('./routes'),
  api = require('./routes/api'),
  http = require('http'),
  path = require('path');

var app = express();

// DB configuration
var configDB = require('./config/database.js'); // require config.js file
mongoose.connect(configDB.url); // connect to our database



// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(express.static(__dirname + '/public')); // Set user visible directory


// development only
/*if (env === 'development') {
  app.use(express.errorHandler());
}*/



// serve index and view partials
app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

// JSON API
app.post('/api/save-register-form', api.saveForm);
app.post('/api/get-user-data', api.getCustomer);

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);

// Start Server
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
