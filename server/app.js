
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended:false});

var portDecision = process.env.PORT || 3000;

// spin up server
app.listen( portDecision, function(){
  console.log('Server is listening on heroku or port 3000');
}); //end server powering up

// base url hit
app.get('/', function(req,res){
  console.log('base url hit');
  res.sendFile(path.resolve('public/index.html'));
}); // end get

//get requested calculation and calculate
app.post( '/calculate', urlencodedParser, function ( req, res) {
  //console.log('in post');
  //console.log('this is req', req.body);
  //calculate string
  var finishedCalculation = eval(req.body.takeThis);
  console.log('finishedCalculation', finishedCalculation);
  //send back
  var sendBack = {takeThis: finishedCalculation};
  res.send(sendBack);
  console.log(sendBack);
});
// setup 'public' as a static resource /// this means anyone can use it
app.use(express.static('public'));
