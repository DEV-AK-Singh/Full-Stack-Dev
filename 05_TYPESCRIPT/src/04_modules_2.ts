import { Product, ProductService } from "./04_modules_1";
import serviceName from "./04_modules_1";

// const product1: Product = { name: "Product 1", price: 10 }; 
// console.log(product1.name);
// console.log(product1.price);

const productService = new ProductService();
const products = productService.getProducts();
console.log(products);

// console.log(serviceName);