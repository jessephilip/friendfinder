// dependencies
var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

// import routes
var apiRoutes = require("./routing/api-routes.js");
var htmlRoutes = require("./routing/html-routes.js");

//use bodyParser, do not encode url.
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(path.join(__dirname + "/assets")));

app.use("/", htmlRoutes);

// set port
var PORT = 8080;

app.listen(PORT, function (err, res) {
    if (err) throw err;
    console.log("App listening on http://localhost:" + PORT);
});