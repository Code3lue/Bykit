"use strict";

//Dependencies
/////////////////////////////////////////////////
//var http = require("http")
var express = require('express');
var db = require("./app/models");

//var path = require("path")
var bodyParser = require('body-parser');
//var methodOverride = require("method-override");


////////////////////////////////////////////////
//express app
var PORT = process.env.NODE_ENV || 8080;
var app = express();
/////////////////////////////////////////////////
//express parsing

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//////////////////////////////////////////////////////
//static directory
app.use(express.static("app/public"));

/////////////////////////////////////////////////////
//routes

//require("./app/routes/html-routes.js")(app);
//require("./app/routes/user-routes.js")(app);





//////////////////////////////////////////////////////
//app listening
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("Listening on port %s", PORT);
  });
});
