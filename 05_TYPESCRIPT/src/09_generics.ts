// function fruits(name: string | number | boolean): string | number | boolean {
//     return name;
// };

// const fruits = <T>(name: T): T => name; 
// let result = fruits("apple");
// let result2 = fruits(1);
// let result3 = fruits(true);

const usersMap = <T>(key: string, value: T): [string, T] => [key, value];
const userKey1 = usersMap("name", "John");
const userKey2 = usersMap("age", 30);
const userKey3 = usersMap("isAdmin", true);
console.log(userKey1);
console.log(userKey2);
console.log(userKey3);