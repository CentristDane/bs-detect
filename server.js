var express = require("express");

var config = require('./config.js');
var bodyParser = require('body-parser');
var path = require("path");

var Twit = require('twitter');
var T = new Twit(config);

var app = express();
var PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});


// This route receives the posted form.
// As explained above, usage of 'body-parser' means
// that `req.body` will be filled in with the form elements
app.post('/twitterOutput', function(req, res) {

    userInput = req.body.userInput;

    if (userInput != null || userInput != "") {
        var params = {
            q: userInput,
            count: 20, // displays 20 tweets
            result_type: 'recent'
        };

        T.get('search/tweets', params, gotData);

        function gotData(err, data, response) {
            var tweets = data.statuses;

            if (tweets != null) {
                res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
                 res.write('<div style="background-color: 3bb1d0;"></div>');
                  res.write('<button> <a href="/">GO BACK</a> <button>');

                for (var i = 0; i < tweets.length; i++) {
                    var tweetholder = [];
                    var user_name = tweets[i].user.name;
                    var s_name = tweets[i].user.screen_name;
                    var p_image = tweets[i].user.profile_image_url_https;
                    var t_message = tweets[i].text;
                    var location = tweets[i].user.location;
                    //   tweets[i]=$("#tweetholder");
                    // tweets[i].text("Results")

                    res.write('<style> body{background:radial-gradient(circle farthest-side at 0% 50%,#fb1 23.5%,rgba(240,166,17,0) 0)21px 30px,radial-gradient(circle farthest-side at 0% 50%,#B71 24%,rgba(240,166,17,0) 0)19px 30px,linear-gradient(#fb1 14%,rgba(240,166,17,0) 0, rgba(240,166,17,0) 85%,#fb1 0)0 0,linear-gradient(150deg,#fb1 24%,#B71 0,#B71 26%,rgba(240,166,17,0) 0,rgba(240,166,17,0) 74%,#B71 0,#B71 76%,#fb1 0)0 0,linear-gradient(30deg,#fb1 24%,#B71 0,#B71 26%,rgba(240,166,17,0) 0,rgba(240,166,17,0) 74%,#B71 0,#B71 76%,#fb1 0)0 0,linear-gradient(90deg,#B71 2%,#fb1 0,#fb1 98%,#B71 0%)0 0 #fb1;background-size:40px 60px;} </style>');
                    res.write('<br>');
                    res.write('<div style="background-color:4f5f66" width=30%; >');
                    res.write('<img src=' + p_image + '>');
                    res.write('<br>');
                    res.write('<b style="color:ee8d1d">' + 'Name: ' + '</b>' + '<p style="color:white">'+ user_name + '</p>' + '<br>');
                    res.write('<b style="color:ee8d1d">' + 'Screen Name: ' + '</b>' + '<a href="https://twitter.com/' + s_name + '">' + '@' + s_name + '</a>' + '<br>');
                    res.write('<b style="color:ee8d1d">' + 'Message: ' + '</b>' + '<p style="color:white">'+ t_message +'</p>' + '<br>');
                    res.write('</div>');
                    // res.write('<b>' + 'Location: ' + '</b>' + location + '<br>');
                    res.write('<br>');
                }
                res.end();
            }
        }
    }

    //console.log(userInput);
});


app.listen(PORT, function() {
    console.log('App listening on: http://localhost:' + PORT);
})






















/////////////ES TESTTTTTTTTTTTT///////////////




// // Dependencies
// // =============================================================
// var express = require("express");
// var bodyParser = require("body-parser");
// var path = require("path");
// var Twit = require('twitter');
// var T = new Twit(config);
// var config = require('./config.js');
// // Sets up the Express App
// // =============================================================
// var app = express();
// var PORT = process.env.PORT || 3000;
// //
// // Sets up the Express app to handle data parsing
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// // Basic route that sends the user first to the AJAX Page
// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "home.html"));
// });

// app.post('/twitterOutput', function(req, res){

//   userInput = req.body.userInput;

//              if(userInput != null || userInput != ""){
//                 var params = {
//                   q: userInput,
//                   count: 20, // displays 20 tweets
//                   result_type: 'recent'
//                 };

//                T.get('search/tweets', params, gotData);
//                function gotData(err, data, response) {
//                  var tweets = data.statuses;

//                  if(tweets != null){
//                  res.writeHead(200, {'content-type':'text/html; charset=utf-8'});

//                  for (var i = 0; i < tweets.length; i++) {
//                    var tweetholder=[];
//                    var user_name = tweets[i].user.name;
//                    var s_name = tweets[i].user.screen_name;
//                    var p_image = tweets[i].user.profile_image_url_https;
//                    var t_message = tweets[i].text;
//                     var location = tweets[i].user.location;
//                   //   tweets[i]=$("#tweetholder");
//                   // tweets[i].text("Results")

//                    res.write('<br>');
//                    res.write('<img src='+p_image+'>');
//                    res.write('<br>');
//                    res.write('<b>'+'Name: '+'</b>' + user_name + '<br>');
//                    res.write('<b>'+'Screen Name: '+'</b>'  +'<a href="https://twitter.com/'+s_name+'">'+'@'+s_name+'</a>'+'<br>');
//                    res.write('<b>'+'Message: '+'</b>' + t_message  + '<br>');
//                    res.write('<b>'+'Location: '+'</b>' + location  + '<br>');
//                    res.write('<br>');
//                  }
//                  res.end();
//                }
//                }
//              }

//   //console.log(userInput);
// });

// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });