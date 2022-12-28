import { readFile, writeFile } from "fs";
import { v4 as uuidv4 } from "uuid";
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
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  price: number;

  constructor(
    title: string,
    imageUrl: string,
    description: string,
    price: number
  ) {
    this.id = uuidv4();
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    const id: string = uuidv4();
    this.id = uuidv4();
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

  static findId(id: string, callBack: CallableFunction) {
    type productDetail = { id: string };

    interface ProductData {
      id: string;
      title: string;
      imageUrl: string;
      description: string;
      price: number;
    }

    getProductsFromFile((products: Array<any>) => {
      const product: Array<any> =  products.find((p) => p.id === id);
      callBack(product);
    });
  }
}

export default Product;
