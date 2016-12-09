// dependencies

var express = require("express");
var app = express();
var router = express.Router();

router.get("/api/friends", function(err, res) {
    console.log("GET /api/friends");
});

router.post("/api/friends", function(req, res) {
    console.log("POST /api/friends");
});

module.exports = router;