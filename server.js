// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var Twit = require('twitter');
var T = new Twit(config);
var config = require('./config.js');
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
//
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

app.post('/twitterOutput', function(req, res){

  userInput = req.body.userInput;

             if(userInput != null || userInput != ""){
                var params = {
                  q: userInput,
                  count: 20, // displays 20 tweets
                  result_type: 'recent'
                };

               T.get('search/tweets', params, gotData);
               function gotData(err, data, response) {
                 var tweets = data.statuses;

                 if(tweets != null){
                 res.writeHead(200, {'content-type':'text/html; charset=utf-8'});

                 for (var i = 0; i < tweets.length; i++) {
                   var tweetholder=[];
                   var user_name = tweets[i].user.name;
                   var s_name = tweets[i].user.screen_name;
                   var p_image = tweets[i].user.profile_image_url_https;
                   var t_message = tweets[i].text;
                    var location = tweets[i].user.location;
                  //   tweets[i]=$("#tweetholder");
                  // tweets[i].text("Results")

                   res.write('<br>');
                   res.write('<img src='+p_image+'>');
                   res.write('<br>');
                   res.write('<b>'+'Name: '+'</b>' + user_name + '<br>');
                   res.write('<b>'+'Screen Name: '+'</b>'  +'<a href="https://twitter.com/'+s_name+'">'+'@'+s_name+'</a>'+'<br>');
                   res.write('<b>'+'Message: '+'</b>' + t_message  + '<br>');
                   res.write('<b>'+'Location: '+'</b>' + location  + '<br>');
                   res.write('<br>');
                 }
                 res.end();
               }
               }
             }

  //console.log(userInput);
});

