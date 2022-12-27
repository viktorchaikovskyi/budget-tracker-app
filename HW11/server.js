const http = require("http");
const os = require("os");
const path = require("path");

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    
    response.write("<h2>System information</h2>");
    response.write("Current user name: " + os.userInfo().username);
    response.write("OS type: " + os.type());
    response.write("System work time: " + (os.uptime()/60).toFixed(2) + "minutes");
    response.write("Current work directory: " + path.dirname(__filename));
    response.end("Server file name: " + path.basename(__filename));
  }).listen(5000);

  console.log('Server running at http://127.0.0.1:5000/');
  