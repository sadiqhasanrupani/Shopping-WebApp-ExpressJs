import { readFile, write, writeFile } from "fs";
import path, { dirname } from "path";
import rootDir from "../utils/path";

const productPath: string = path.join(
  __dirname,
  "../",
  "../",
  "../",
  "data",
  "products.json"
);

export interface RequestBody {
  product_title: string;
}

export const getProductsFromFile = (cb: CallableFunction) => {
  readFile(productPath, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent.toString()));
    }
  });
};

class Product {
  title: string;
  constructor(title: string) {
    this.title = title;
  }

  save() {
    getProductsFromFile((products: Array<any>) => {
      products.push(this);

      writeFile(productPath, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb: CallableFunction) {
    getProductsFromFile(cb);
  }
}

export default Product;
