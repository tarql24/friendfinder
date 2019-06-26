// Dependencies
// =============================================================
var express = require('express');
// var path = require('path');
// var bodyParser = require('body-parser');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Sets up the Express app to handle data parsing
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(express.static('app'));

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users
// visit or request data from various URLs.
// ================================================================================

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);
// require('./routes/apiRoutes')(app);
// require('./routes/htmlRoutes')(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log('App listening on PORT: ' + PORT);
});
