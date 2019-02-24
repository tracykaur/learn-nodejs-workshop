var express = require('express');
var server = express();
var staticAssets = express.static('public');
server.use(staticAssets);
server.get('/hello', function(request, response) {
    response.send('hello there');
  });
server.listen(3000, function () {
  console.log('Server has started listening on port 3000.');
});