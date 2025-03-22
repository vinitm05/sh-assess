const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");

    fs.readFile("formValues.txt", (err, data) => {
      const name = data ? data.toString() : "No name yet";
      res.end(
        `
              <p>${name}</p>
              <form action="/message" method="POST">
                <label>message:</label>
                <input type="text" name="username"></input>
                <button type="submit">Add</button>
              </form>
              `
      );
    });
  } else if (url === "/message") {
    res.setHeader("Content-Type", "text/html");
    let body = [];
    req.on("data", (chunks) => {
      body.push(chunks);
    });
    req.on("end", () => {
      const buffer = Buffer.concat(body);
      const formData = buffer.toString();
      const formValues = formData.split("=")[1];

      // Write the name to formValues.txt
      fs.writeFile("formValues.txt", formValues, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        res.end();
      });
    });
  } else {
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Page Not Found</h1>");
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
