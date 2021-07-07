var http = require('http');
const url = require('url');
let branchParser =  require('./branch-parser');

http.createServer(function (req, res) { ////create a server object:
  console.log(req.url);
  
  const queryObject = url.parse(req.url,true).query;

//   console.log(queryObject);
  console.log(queryObject.branch);
//   console.log(branchParser.splitSentences(queryObject.branch));
  
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response

}).listen(process.env.NODE_PORT); //the server object listens on port 8080
