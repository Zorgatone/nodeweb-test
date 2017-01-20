const express = require("express");
const pug = require("pug");
const fs = require("fs");

const app = express();

const title = "My page title";

app.get("/", (req, res) => {
  fs.readFile("www/index.pug", null, (err, txt) => {
    if (err) {
      res.end("Error");
    } else {
      res.end(pug.render(txt, {
        title
      }));
    }
  });
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});
