const path = require("path");

const pages = [
  "homepage"
];
const requires = [];

for (let i = 0, len = pages.length; i < len; i += 1) {
  requires.push(require(path.resolve("./lib/pages/" + pages[i])));
}

module.exports = requires;
