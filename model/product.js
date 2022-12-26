"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductsFromFile = void 0;
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const path_2 = __importDefault(require("../utils/path"));
const productPath = path_1.default.join(path_2.default, "data", "products.json");
const getProductsFromFile = (cb) => {
    (0, fs_1.readFile)(productPath, (err, fileContent) => {
        if (err) {
            cb([]);
        }
        else {
            cb(JSON.parse(fileContent.toString()));
        }
    });
};
exports.getProductsFromFile = getProductsFromFile;
class Product {
    constructor(title) {
        this.title = title;
    }
    save() {
        (0, exports.getProductsFromFile)((products) => {
            products.push(this);
            (0, fs_1.writeFile)(productPath, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }
    static fetchAll(cb) {
        (0, exports.getProductsFromFile)(cb);
    }
}
exports.default = Product;
