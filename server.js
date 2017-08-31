var express = require('express');
var app = express();
var path = require('path');

/////////////////////////////////////////////////////////
app.use(express.static(__dirname + '/dist'))
app.listen(process.env.PORT || 8080)
console.log("Server is running!")


//to main tain even if page is refreshed
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'))
});
