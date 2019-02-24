var express = require('express');
var server = express();

var staticAssets = express.static('public');
server.use(staticAssets);
server.get('/', function(request, response) {
    response.render('pages/index');
  });
  
server.listen(3000, function () {
  console.log('Server has started listening on port 3000.');
});