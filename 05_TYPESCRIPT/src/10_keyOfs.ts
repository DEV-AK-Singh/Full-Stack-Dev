type PersonX = {
    name: string;
    age: number;
    address: string;
}

type Keys = keyof PersonX; // "name" | "age" | "address"

let a: Keys = "name";
let b: Keys = "age";
let c: Keys = "address";
// let d: Keys = "email"; // error

let e: PersonX["name"] = "John";
let f: PersonX["age"] = 30;
let g: PersonX["address"] = "123 Main St";

let h: PersonX[keyof PersonX] = "John";
console.log(h);