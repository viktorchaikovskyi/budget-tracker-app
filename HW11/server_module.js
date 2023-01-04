const http = require("http");
const os = require("os");
const greetingUser = require("./personalmodule");

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("Date o request: " + greetingUser.date + "<br>");
    response.write(greetingUser.showMessage(os.userInfo().username));
    response.write(os.userInfo().username);
    response.end();
  }).listen(8000);

  console.log('Server running at http://127.0.0.1:8000/');