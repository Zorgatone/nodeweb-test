const pathlib = require("path");

const Page = require("../page");

module.exports = class Homepage extends Page {
  constructor() {
    super();
    this.path = "/";
    this.filePath = pathlib.resolve("./www/index.pug");
    this.methods = ["GET"];
    this.contentType = "application/xhtml+xml;charset=UTF-8";
  }
};
