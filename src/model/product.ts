import { readFile, writeFile } from "fs";

import { dataPath } from "../utils/path";
import { join } from "path";

const productPath: string = join(dataPath, "products.json");

export interface RequestBody {
  title: string;
  imageUrl: string;
  description: string;
  price: number;
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
  imageUrl: string;
  description: string;
  price: number;

  constructor(title: string, imageUrl: string, description: string, price: number) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
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
