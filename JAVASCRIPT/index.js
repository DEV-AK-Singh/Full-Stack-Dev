// // Declare different variables
// let age = 25;
// const name = "Alex";

// // Type checking
// console.log(typeof age); // "number"
// console.log(typeof name); // "string"

// // Basic operations
// console.log(age + 5); // 30
// console.log(name + " Smith"); // "Alex Smith"

// // Basic if/else statement
// if (age >= 18) {
//   console.log("Adult");
// } else {
//   console.log("Minor");
// }

// // Ternary operator
// const status = age >= 18 ? "Adult" : "Minor";

// // Basic for loop
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// // Loop through array
// const fruits = ["apple", "banana", "orange"];
// for (const fruit of fruits) {
//   console.log(fruit);
// }
// for (let i in fruits){
//     console.log(fruits[i])
// }
// fruits.forEach((ele)=>{
//     console.log(ele)
// })

// // Function declaration
// function greet(name) {
//   return `Hello ${name}`;
// }

// // Arrow function
// const add = (a, b) => a + b;

// // Arrays Ops
// const numbers = [1, 2, 3];
// const doubles = numbers.map(ele=>ele*2);
// console.log(doubles);
// const filterOdds = numbers.filter(ele=>ele%2!=0);
// console.log(filterOdds);
// const sum = numbers.reduce((p, c)=>p+c);
// console.log(sum);

// // this keyword
// const person = {
//   name: "Alice",
//   greet: function () {
//     console.log(`Hello, my name is ${this.name}`);
//   },
// };

// const unboundGreet = person.greet;
// unboundGreet();

// const boundGreet = person.greet.bind({name:"Raj"});
// boundGreet(); // Output: Hello, my name is Alice

// function multiply(a, b) {
//     return a * b;
// }

// const double = multiply.bind(null, 2); // 'null' for thisArg as it's not relevant here
// console.log(double(5)); // Output: 10 (2 * 5)
// const double = multiply.bind(null, 2, 3); // 'null' for thisArg as it's not relevant here
// console.log(double()); // Output: 10 (2 * 5)

// import { exit, stdin as input, stdout as output } from "node:process";
// import * as readline from 'node:readline/promises';
// const rl = readline.createInterface({ input, output });
// const answer = await rl.question("Enter your name: ");
// console.log(`Hello, ${answer}!`);
// exit();

// console.log(process.argv);

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let history = [];

// function showMenu() {
//   console.log("\nSimple Calculator");
//   console.log("1. Add");
//   console.log("2. Subtract");
//   console.log("3. Multiply");
//   console.log("4. Divide");
//   console.log("5. Show History");
//   console.log("6. Exit");
// }

// function askQuestion(query) {
//   return new Promise((resolve) => rl.question(query, resolve));
// }

// async function main() {
//   while (true) {
//     showMenu();
//     const choice = await askQuestion("Enter your choice (1-6): ");

//     if (choice === "6") {
//       console.log("Exiting calculator. Goodbye!");
//       break;
//     } else if (choice === "5") {
//       console.log("\n--- Operation History ---");
//       if (history.length === 0) {
//         console.log("No operations yet.");
//       } else {
//         history.forEach((entry) => console.log(entry));
//       }
//     } else if (["1", "2", "3", "4"].includes(choice)) {
//       let a = await askQuestion("Enter first number: ");
//       let b = await askQuestion("Enter second number: ");

//       a = parseFloat(a);
//       b = parseFloat(b);

//       if (isNaN(a) || isNaN(b)) {
//         console.log("Invalid input. Please enter numeric values.");
//         continue;
//       }

//       let result;
//       let operation;

//       switch (choice) {
//         case "1":
//           result = a + b;
//           operation = `${a} + ${b} = ${result}`;
//           break;
//         case "2":
//           result = a - b;
//           operation = `${a} - ${b} = ${result}`;
//           break;
//         case "3":
//           result = a * b;
//           operation = `${a} * ${b} = ${result}`;
//           break;
//         case "4":
//           if (b === 0) {
//             operation = `Error: Cannot divide ${a} by zero`;
//           } else {
//             result = a / b;
//             operation = `${a} / ${b} = ${result}`;
//           }
//           break;
//       }

//       console.log("Result:", operation.includes("Error") ? "Error" : result);
//       history.push(operation);
//     } else {
//       console.log("Invalid choice. Please select a valid option.");
//     }
//   }

//   rl.close();
// }

// main();

// const fetchData = (callback) => {
//   setTimeout(() => {
//     callback("Data received!");
//   }, 2000);
// };

// fetchData((data)=>{console.log(data)});

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Data Received!!");
//     // reject("Data Failed!!");
//   }, 1000);
// });

// promise.then((value)=>{
//     console.log("SUCCESS:", value);
// }).catch((err)=>{
//     console.log("ERROR:", err);
// })

// try {
//   const response = await promise;
//   console.log("Success:", response);
// } catch (error) {
//   console.log("Error:", error);
// }

// console.log("Start");
// setTimeout(() => console.log("Timeout"), 0);
// Promise.resolve().then(() => console.log("Promise"));
// console.log("End");

// import {add} from "./math.js"
// console.log(add(1,2))

// try {
//   throw new Error("Something went wrong");
// } catch (error) {
//   console.error(error.message);
// }