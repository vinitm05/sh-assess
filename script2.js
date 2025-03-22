const http = require("http");
const routes = require("./routes");

const server = http.createServer(routes.handler);

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
