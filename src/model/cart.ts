import fs from "fs";
import { cartDataPath } from "../utils/path";

const path = cartDataPath;

interface CartData {
  products: any[],
  totalPrice: number
}
interface ProductData {
  id: string;
  qty: number;
}


class Cart {
  static addProduct(id: string, productPrice: number) {
    fs.readFile(path, (err, fileContent: any) => {
      let cart: CartData = {
        products: [],
        totalPrice: 0,
      };
      // if their is no error then we will store that data into a cart object.
      if (!err) {
        cart = JSON.parse (fileContent);
      }
      // analysing the cart => finding exisiting cart
      const exisitingProductIndex = cart.products.findIndex((p) => p.id === p);
      const exisitingProduct = cart.products[exisitingProductIndex];
      let updatedProduct: ProductData;

      if (exisitingProduct) {
        updatedProduct = { ...exisitingProduct };
        updatedProduct.qty = updatedProduct.qty + 1;
        cart.products = [...cart.products];
        cart.products[exisitingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id: id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      }
      cart.totalPrice = +cart.totalPrice;
      cart.totalPrice += productPrice;
      fs.writeFile(path, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  }
}

export default Cart;
