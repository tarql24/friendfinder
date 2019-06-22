// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends data.
// ===============================================================================
var path = require('path');
var friendsArray = require('../data/friends.js');
// var waitListData = require('../data/waitinglistData');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get('/api/friends', function(req, res) {
    res.json(friendsArray);
  });

  app.post('/api/friends', function(req, res) {
    var newFriend = {
      name: req.body.name,
      photo: req.body.photo,
      scores: JSON.parse(req.body.scores)
    };

    //   var diffArray = [];

    //   userArray.forEach(function(item, index) {
    //     var difference = 0;
    //     for (var i = 0; i < item.scores.length; i++) {
    //       difference += Math.abs(item.scores[i] - newPerson.scores[i]);
    //     }
    //     diffArray.push({ difference: difference, index: index });
    //   });

    //   diffArray.sort(function(a, b) {
    //     return a.difference - b.difference;
    //   });

    friendsArray.push(newFriend);
    //   res.json(userArray[diffArray[0].index]);
  });
};
//   app.get('/api/waitlist', function(req, res) {
//     res.json(waitListData);
//   });

// API POST Requests
// Below code handles when a user submits a form and thus submits data to the server.
// In each of the below cases, when a user submits form data (a JSON object)
// ...the JSON is pushed to the appropriate JavaScript array
// (ex. User fills out a reservation request... this data is then sent to the server...
// Then the server saves the data to the tableData array)
// ---------------------------------------------------------------------------

// app.post('/api/friends', function(req, res) {
//   // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
//   // It will do this by sending out the value "true" have a table
//   // req.body is available since we're using the body parsing middleware
//   if (friends.length < 100) {
//     friends.push(req.body);
//     res.json(true);
//   } else {
//     waitListData.push(req.body);
//     res.json(false);
//   }
// });

// // ---------------------------------------------------------------------------
// // I added this below code so you could clear out the table while working with the functionality.
// // Don"t worry about it!

// app.post('/api/clear', function(req, res) {
//   // Empty out the arrays of data
//   tableData.length = [];
//   waitListData.length = [];

//   res.json({ ok: true });
// });
