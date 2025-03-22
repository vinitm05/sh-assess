const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/home") {
    res.end("<h1>Welcome home</h1>");
  } else if (req.url === "/about") {
    res.end("<h1>Welcome to About Us</h1>");
  } else if (req.url === "/node") {
    res.end("<h1>Welcome to my Node Js project</h1>");
  } else {
    res.end("<h1>Page Not Found</h1>");
  }
});

// Starting the server
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
