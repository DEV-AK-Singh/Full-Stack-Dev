// typeof
// instanceof

// type guard
// function logValue(value: number | string) {
//     if (typeof value === "number") {
//         console.log(value.toFixed(2));
//     } else {
//         console.log(value.toUpperCase());
//     }
// }
// logValue("hello");
// logValue(3.14);

// class User {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
// }
// class Company_1 {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
// }
// function logValue(value: User | Company) {
//     if (value instanceof User) {
//         console.log("User:", value.name);
//     } else {
//         console.log("Company:", value.name);
//     }
// }

// interface User {
//     name: string;
//     type: "user";
// }
// interface Company {
//     name: string;
//     type: "company";
// }
// function logValue(value: User | Company) {
//     if (value.type === "user") {
//         console.log("User:", value.name);
//     } else {
//         console.log("Company:", value.name);
//     }
// }