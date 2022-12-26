import { readFile, writeFile } from "fs";

import { dataPath } from "../utils/path";
import { join } from "path";

const productPath: string = join(dataPath, "products.json");

export interface RequestBody {
  title: string;
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
