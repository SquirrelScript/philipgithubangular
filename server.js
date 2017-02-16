var express = require('express');
var http = require('http');
var app = express();
var bodyParser = require('body-parser');
var token = process.env.GITHUBACCESS;
var port = process.env.PORT || 8080;



app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

//routes
app.get('/', function(req, res) {
  res.sendfile(token); // load the single view file (angular will handle the page changes on the front-end)
});

app.get('/thing', function(req, res) {
   res.send(token);
});


app.listen(port, function() {
  console.log('Our app is running on http://localhost:' + port);
});
