class Product {
    public name: string;
    public price: number;
    private inCart: boolean = false;
    protected isOrdered: boolean = false;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    addToCart(): void {
        this.inCart = true;
    }

    removeFromCart(): void {
        this.inCart = false;
    }

    order(): void {
        this.isOrdered = true;
    }

    cancelOrder(): void {
        this.isOrdered = false;
    }

    buyNow(): void {
        if (this.inCart) {
            console.log("Product is in cart");
        }else{
            console.log("Product is not in cart");
        }
    }

    getCartStatus(): boolean {
        return this.inCart;
    }
};

const product1 = new Product("Product 1", 10);
const product2 = new Product("Product 2", 20);
product1.addToCart();
product1.buyNow();
product2.buyNow();

console.log(product1.name);
console.log(product1.price);
console.log(product1.getCartStatus());
// console.log(product1.inCart); // Error: Private property 'inCart' must be accessed through a getter
// console.log(product1.isOrdered); // Error: Private property 'isOrdered' must be accessed through a getter

class Order extends Product {
    constructor(name: string, price: number) {
        super(name, price);
    }
    getOrderStatus(): boolean {
        return this.isOrdered;
    }
};

const order1 = new Order("Order 1", 100);
order1.order();
console.log(order1.getOrderStatus());
