// import array of friends data
var friends = require('../data/friends');

var api = function(app) {
  //    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
  app.get('/api/friends', function(req, res) {
    res.json(friends);
  });

  //* A POST routes `/api/friends`. This will be used to handle incoming survey results.
  // This route will also be used to handle the compatibility logic.
  app.post('/api/friends', function(req, res) {
    // store request from the client post request into req.body
    var newFriend = req.body;

    // this array will be used to hold scores for other users from friends data array that is not the current user
    var otherUsersScores = [];

    // this array will hold the difference between current user's scores against those from other users, question
    // by question using absolute value
    var diffs = [];

    // this array will be used to hold the total difference between each of the other users and the current user
    var totalDiffs = [];

    // function to loop through each of the scores array in each friend object in the friends array and calculates the
    // absolute differences
    friends.forEach(function(friend, index, arr) {
      if (otherUsersScores.length < 10) {
        for (var i = 0; i < friend.scores.length; i++) {
          otherUsersScores.push(friend.scores[i]);
          diffs.push(Math.abs(newFriend.scores[i] - otherUsersScores[i]));
        }

        totalDiffs.push(diffs.reduce(sum, 0));
      }

      // empty these two arrays so that it can be used for the next user in the friends array
      otherUsersScores = [];
      diffs = [];
    });

    // variable to hold user whose total difference from current user is closest to zero
    var match = totalDiffs.reduce(function(prev, curr) {
      return Math.abs(curr - 0) < Math.abs(prev - 0) ? curr : prev;
    });

    // loop through the friends array and return the data of the friend with the same index number as the match from the total Diffs array.
    for (var i = 0; i < friends.length; i++) {
      if (totalDiffs.indexOf(match) === friends.indexOf(friends[i])) {
        res.json(friends[i]);
      }
    }

    // push the data of the current user to the friends array
    friends.push(newFriend);
  });
};

// sums diffs array
function sum(total, num) {
  return total + num;
}

// exports the get and post api requests
module.exports = api;
