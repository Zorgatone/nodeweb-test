const express = require("express");
const pug = require("pug");
const fs = require("fs");

const app = express();

const title = "My page title";

app.get("/", (req, res) => {
  fs.readFile("www/index.pug", null, (err, txt) => {
    if (err) {
      res.set("Content-type", "text/plain");
      res.end("Error");
    } else {
      res.set("Content-type", "application/xhtml+xml;charset=UTF-8");
      res.end(pug.render(txt, {
        title
      }));
    }
  });
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});
