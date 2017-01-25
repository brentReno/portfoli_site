var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded( { extended: true } );
var bpJason = bodyParser.json();
var port = process.env.PORT || 4040;
var path = require('path');

app.use( express.static( 'server/public' ) );
app.use(bpJason);
app.use(urlencodedParser);

app.listen(port, function(){
  console.log('server up on:', port);
});

app.get('/', function(req, res){
  console.log('base url hit');
  res.sendFile(path.resolve('server/public/views/index.html'));
});
