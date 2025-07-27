// // Primitive Data Types
// let a: number = 1;
// let b: string = "Hello";
// let c: boolean = true;
// let d: null = null;
// let e: undefined = undefined;
// let f: symbol = Symbol("symbol"); 
// let g: bigint = 1n;


// // Object Data Types -> Array, Tuple, Object
// let g: number[] = [1, 2, 3];
// let h: [number, string] = [1, "Hello"];
// let i: { name: string; age: number } = { name: "John", age: 30 };


// // Special Data Types -> Any, Unknown, Void, Never
// let j: any = 1; // this will return any
// let k: unknown = 1; // this will return any but typecast to any later
// let l: void = undefined; // this will return undefined
// let m: never; // this will never return 


// // Advanced Data Types -> Union, Intersection, Type Assertions
// let n: number | string = 1; // this will return number or string
// let o: { name: string } & { age: number } = { name: "John", age: 30 }; // this will return number and string 

// type Person = { name: string; age: number };
// let p: Person = { name: "John", age: 30 };

// enum Color {
//     Red,
//     Green,
//     Blue,
// }
// let q: Color = Color.Red;

// let direction: "up" | "down" | "left" | "right" = "up";
// direction = "left";
// direction = "right";
// // direction = "side"; // this will throw error


// // Function Data Types
// const add = (a: number, b: number): number => a + b;
// const multiply = (a: number, b: number): number => a * b;
// const subtract = (a: number, b: number): number => a - b;
// const divide = (a: number, b: number): number => a / b;


// -------------------------------------------------------------------------------------------------------------------------------------------


// Number Data Types
// let a: number = 1; 
// // let b: string = "Hello";
// let b: number = 3;
// let total: number = a + b;
// let binNum = 0b1010;
// let octNum = 0o744;
// let hexNum = 0x1F; 
// console.log(binNum);
// console.log(octNum);
// console.log(hexNum);

// String Data Types
// let a: string = "John";
// let b: string = "Doe";
// let age: number = 30;
// let c: string = a + " " + b + " is " + age + " years old";
// let d: string = `My name is ${a} ${b}`;
// console.log(c);
// console.log(d);

// Boolean Data Types
// let a: boolean = true;
// let b: boolean = false;
// let c: boolean = true;
// let d: boolean = false;
// let e: boolean = a && b;
// let f: boolean = a || b;
// let g: boolean = !c;
// let h: boolean = !d;
// console.log(e);
// console.log(f);
// console.log(g);
// console.log(h);

// Null Data Types
// let a: null = null; 

// Undefined Data Types
// let a: undefined = undefined;

// BigInt Data Types
// let a: bigint = 9n;
// let b: bigint = 2n;
// let c: bigint = 3n;
// let d: bigint = 4n;
// let e: bigint = a + b + c + d;
// console.log(e);

// Symbol Data Types
// let a: symbol = Symbol("symbol");
// let b: symbol = Symbol("symbol");
// let obj : { [key: symbol]: string } = {
//     [a]: "value"
// };
// console.log(obj);
// console.log(obj[a]);


// ---------------------------------------------------------------------------------------------------------------------------------------


// Array Data Types
// let a: number[] = [1, 2, 3];
// let b: string[] = ["Hello", "World"];
// let c: boolean[] = [true, false];
// let d: any[] = [1, "Hello", true];
// let e: number[][] = [[1, 2], [3, 4]];
// let f: string[][] = [["Hello", "World"], ["Goodbye", "World"]];

// let g: Array<number> = [1, 2, 3];
// let h: Array<string> = ["Hello", "World"];
// let i: Array<boolean> = [true, false];
// let j1: Array<any> = [1, "Hello", true];
// let j2: Array<number | string | boolean> = [1, "Hello", true];
// let k: Array<Array<number>> = [[1, 2], [3, 4]];
// let l: Array<Array<string>> = [["Hello", "World"], ["Goodbye", "World"]];

// let m: ReadonlyArray<number[]> = [[1, 2], [3, 4]];
// m.push([5, 6]);


// Tuple Data Types
// let a: [number, string] = [1, "Hello"];
// let b: [number, string, boolean] = [1, "Hello", true];
// let c: [number, string][] = [[1, "Hello"], [2, "World"]];


// Object Data Types
// let a: { name: string; age: number } = { name: "John", age: 30 };
// let b: { name: string; age: number } = { name: "Jane", age: 25 };


// --------------------------------------------------------------------------------------------------------------------------------------


// Any Data Types
// let a: any = 1;
// let b: any = "Hello";
// let c: any = true;
// let d: any = null;
// let e: any = undefined;
// let f: any = Symbol("symbol");
// let g: any = 1n;

// Unknown Data Types
// let a: unknown = 1;
// let b: unknown = "Hello";
// let c: unknown = true;
// let d: unknown = null;
// let e: unknown = undefined;
// let f: unknown = Symbol("symbol");
// let g: unknown = 1n;

// Void Data Types
// function log(message: string): void {
//     console.log(message);
// }

// Never Data Types
// function error(message: string): never {
//     throw new Error(message);
// } 
// error("This is an error");


// --------------------------------------------------------------------------------------------------------------------------------------


// Union Data Types
// let a: number | string = 1;
// let b: number | string = "Hello";
// let c: number | string = true;
// let d: number | string = null;
// let e: number | string = undefined;
// let f: number | string = Symbol("symbol");
// let g: number | string = 1n;


// Interface Data Types
// interface Person {
//     name: string;
//     age: number;
// }
// let a: Person = { name: "John", age: 30 };
// let b: Person = { name: "Jane", age: 25 };

// Type Data Types
// type Person = {
//     name: string;
//     age: number;
// }
// let a: Person = { name: "John", age: 30 };
// let b: Person = { name: "Jane", age: 25 };

// Interface vs Type
// ->interface used for objects
// -> type used for primitives 
// interface Person {
//     name: string;
//     age: number;
// }
// interface WorkingPerson extends Person {
//     jobTitle: string;
// }
// type PersonType = {
//     name: string;
//     age: number;
// }
// type WorkingPersonType = PersonType & {
//     jobTitle: string;
// }

// Enum Data Types
// enum Color {
//     Red,
//     Green,
//     Blue
// }
// let a: Color = Color.Red;
// let b: Color = Color.Green;
// let c: Color = Color.Blue;


// --------------------------------------------------------------------------------------------------------------------------------------


// dom data types
// let a: HTMLElement = document.getElementById("my-element")!;
// let b: HTMLInputElement = document.getElementById("my-input")! as HTMLInputElement;
// let c: HTMLButtonElement = document.getElementById("my-button")! as HTMLButtonElement;