const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.end(
      `
            <form action="/message" method="POST">
            <label>Name:</label>
            <input type="text" name="username"></input>
            <button type="submit">Add</button>
            </form>
            `
    );
  } else {
    if (req.url == "/message") {
      res.setHeader("Content-type", "text/html");
      let body = [];
      req.on("data", (chunks) => {
        body.push(chunks);
      });
      req.on("end", () => {
        let buffer = Buffer.concat(body);
        let formData = buffer.toString();

        const formValues = formData.split("=")[1];

        fs.writeFile("formValues.txt", formValues, (err) => {
          res.statusCode = 302;
          res.setHeader("Location", "/");
          res.end();
        });
      });
    }
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
