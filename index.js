const express = require("express");
//const pug = require("pug");
//const fs = require("fs");
//const MongoClient = require("mongodb").MongoClient;
//const url = "mongodb://localhost:27017";

const app = express();

const Router = new require("./lib/router");

const router = new Router(app);
const pages = require("./lib/pages");

for (let i = 0, len = pages.length; i < len; i += 1) {
  const Page = pages[i];
  router.addPage(new Page());
}

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});
