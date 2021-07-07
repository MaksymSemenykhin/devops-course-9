var http = require('http');
const url = require('url');

http.createServer(function (req, res) { ////create a server object:

  const queryObject = url.parse(req.url,true).query;
  console.log(queryObject);

  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response

}).listen(process.env.NODE_PORT); //the server object listens on port 8080
