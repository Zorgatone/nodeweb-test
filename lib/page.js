const pathlib = require("path");
const fs = require("fs");
const pug = require("pug");

module.exports = class Page {
  constructor() {}
  get path() {
    // if ("string" === typeof this._path) {
    //   return pathlib.resolve(this._path);
    // }
    return this._path;
  }
  set path(value) {
    // if ("string" === typeof value) {
    //   this._path = pathlib.resolve(value);
    // }
    this._path = value;
  }
  get filePath() {
    if ("string" === typeof this._filePath) {
      return pathlib.resolve(this._filePath);
    }
  }
  set filePath(value) {
    if ("string" === typeof value) {
      this._filePath = pathlib.resolve(value);
    }
  }
  read() {
    const filePath = pathlib.resolve(this.filePath);

    if ("string" !== typeof filePath) {
      return "";
    }

    return new Promise((resolve, reject) => {
      fs.readFile(filePath, (err, data) => {
        if (err) {
          return reject(err);
        }

        return resolve(data);
      });
    })
    .then(data => {
      if (filePath.endsWith(".pug")) {
        let rendered;

        try {
          rendered = pug.render(data, this.data);
        } catch (e) {
          rendered = null;
        }

        return rendered;
      } else {
        return data;
      }
    });
  }
};
