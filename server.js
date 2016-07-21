var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.static('build'));

app.get('/*', function(req, res){
  res.sendFile(__dirname + '/build/index.html');
});

app.post('/workspaces', (req, res) => {
    res.json(req.body);
    //TODO: Process real workspace body
});

app.listen(8081, function() {
    console.log('Running on port 8081');
});

exports.app = app;
