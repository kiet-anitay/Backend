const http = require("node:http");
const app = require("./app");
const server = http.createServer(app);
const PORT = 8080;


server.listen(PORT, console.log("listening to port 8080"))