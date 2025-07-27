// type userDataType = {
//     [key: string]: string
// }

// const userData: userDataType = {
//     name: "John",
//     age: "30",
//     address: "123 Main St"
// }

type userDataType = {
    readonly id: number,
    readonly name: string,
    readonly age: number,
    [key: string]: string | number
}

const userData: userDataType = {
    id: 1,
    name: "John",
    age: 30,
    address: "123 Main St",
    email: "Ib6oI@example.com"
}

console.log(userData);
userData.email = "Ib6o2@example.com";
console.log(userData);
// userData.name = "Jane"; // error