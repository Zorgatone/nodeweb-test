const pathlib = require("path");

const Page = require("./page");

module.exports = class Router {
  constructor(expressApp) {
    this.app = expressApp;
  }

  addPage(page) {
    const pagePath = page.path;

    if (!(
      page instanceof Page &&
      "string" === typeof pagePath && pagePath.length > 0 &&
      page.methods instanceof Array && page.methods.length > 0
    )) {
      return;
    }

    this.app.all(pagePath, (req, res) => this.onRequest(req, res, page));
  }

  onRequest(req, res, page) {
    if (!this._checkMethod(page, req)) {
      res.status(405);
      res.end();
      return;
    }

    page.read()
    .then(data => {
      res.status(200);
      res.set("Content-type", page.contentType);
      res.end(data);
    })
    .catch(() => {
      res.status(500);
      res.end();
    });
  }

  _checkMethod(page, request) {
    for (let i = 0, len = page.methods.length; i < len; i += 1) {
      if (request.method.toUpperCase() === page.methods[i].toUpperCase()) {
        return true;
      }
    }

    return false;
  }
}
