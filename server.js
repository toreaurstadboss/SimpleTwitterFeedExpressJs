var express = require("express");
var request = require("request");
let config = require("./config");
const https = require("https");
const fs = require("fs");
var url = require("url");
var Twitter = require("twitter");

var key = fs.readFileSync(__dirname + "/certs/selfsigned.key");
var cert = fs.readFileSync(__dirname + "/certs/selfsigned.crt");
const port = 3000;
var options = {
  key: key,
  cert: cert
};

var app = express();

var client = new Twitter(config);

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

function getTweets(userName, tweetCount, res) {
  var params = {
    q: userName,
    count: tweetCount
  };

  var responseFromTwitter = {};

  let tweetSearched = false;

  // Initiate your search using the above paramaters
  client.get("search/tweets", params, function(err, data, response) {
    console.log("Found # Tweets: " + data.statuses.length);
    res.charset = "utf-8";
    res.append("Content-Type", "application/json; charset=utf-8");

    // If there is no error, proceed
    if (!err) {
      res.end(JSON.stringify(data.statuses));
    }
  });
}

app.get("/tweets/:username", function(req, res) {
  let tweetsFound = getTweets(req.params.username, 10, res);
  console.log(tweetsFound);
});

app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));

var server = https.createServer(options, app);
server.listen(port, () => {
  console.log("server starting on port: " + port);
});

module.exports = server;
