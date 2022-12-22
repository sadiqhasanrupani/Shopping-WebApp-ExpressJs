const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/path");

const productPath = path.join(rootDir, "data", "products.json");

const getProductsFromFile = (cb) => {
  fs.readFile(productPath, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  // creating a constructor to take the values

  constructor(title) {
    // assigning the local title of Product call into the title
    this.title = title;
  }

  save() {
    getProductsFromFile(function (products) {
      products.push(this);
      fs.writeFile(productPath, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
