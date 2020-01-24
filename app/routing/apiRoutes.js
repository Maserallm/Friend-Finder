const friendData = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  app.post("/api/friends", function(req, res) {
    let userData = req.body;

    let newFriend = {
      name: userData.name,
      photo: userData.photo,
      scores: []
    };

    for (let i = 0; i < userData.scores.length; i++) {
      newFriend.scores.push(userData.scores[i]);
    }

    let checkArray = [];

    for (let i = 0; i < friendData.length; i++) {
      let difference = 0;
      for (let f = 0; f < newFriend.scores.length; f++) {
        difference += Math.abs(
          parseInt(newFriend.scores[f]) - parseInt(friendData[i].scores[f])
        );
      }
      checkArray.push(difference);
    }

    let index = 0;

    for (let i = 0; i < checkArray.length; i++) {
      if (checkArray[i] <= checkArray[index]) {
        index = i;
      }
    }

    let findMatch = friendData[index];
    res.json(findMatch);

    friendData.push(newFriend);
  });
};
