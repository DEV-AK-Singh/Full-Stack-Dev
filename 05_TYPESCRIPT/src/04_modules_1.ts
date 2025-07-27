export type Product = {
    name: string;
    price: number;
};

export class ProductService {
    getProducts(): Product[] {
        return [
            { name: 'Product 1', price: 10 },
            { name: 'Product 2', price: 20 },
            { name: 'Product 3', price: 30 },
        ];
    }
}

const serviceName = 'Product Service';
export default serviceName;