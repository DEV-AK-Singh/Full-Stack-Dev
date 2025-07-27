namespace UserNameSpace {
    export class User {
        name: string;
        age: number;
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
    }

    export class Admin extends User {
        role: string;
        constructor(name: string, age: number, role: string) {
            super(name, age);
            this.role = role;
        }
    }
}

namespace ProductNameSpace {
    export class Product {
        name: string;
        price: number;
        constructor(name: string, price: number) {
            this.name = name;
            this.price = price;
        }
    }

    export class Order extends Product {
        quantity: number;
        constructor(name: string, price: number, quantity: number) {
            super(name, price);
            this.quantity = quantity;
        }
    }
}

const user = new UserNameSpace.User("John", 30);
const admin = new UserNameSpace.Admin("John", 30, "Admin");
const product = new ProductNameSpace.Product("Laptop", 1000);
const order = new ProductNameSpace.Order("Laptop", 1000, 2);
console.log(user);
console.log(admin);
console.log(product);
console.log(order);