// dependencies
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

// set up express server
var app = express();

// use static resources like javascript and css files
app.use(express.static("assets"));

// set port
var PORT = process.env.PORT || 8080;

//use bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// import routes
require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);

// start port and listen
app.listen(PORT, function (err, res) {
    console.log("App listening on http://localhost:" + PORT);
});