// loading data

var friends = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var total = 0;
        var savedTotal;
        var friend;
        // push new friend data to existing array of friends
        friends.push(req.body);

        var currentUser = req.body;
        var currentAnswers = req.body.answers;

        for (var i = 0; i < friends.length - 1; i++) {
            var friendAnswers = friends[i].answers;

            for (var inc = 0; inc < friendAnswers.length; inc++) {
                difference = currentAnswers[inc] - friendAnswers[inc];
                if (difference < 0) difference = -difference;
                total += difference;
            }
            if (i === 0) {
                savedTotal = total;
                friend = friends[0];
            }
            else if(total < savedTotal) {
                savedTotal = total;
                friend = friends[i];
            }
            total = 0;  

        }

        console.log("Winning Friend", friend);

        res.sendFile(("../public/home.html"));
    });

    app.post("/api/clear", function () {
        friends = [];
        console.log(friends);
    });
};