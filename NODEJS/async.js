const fs = require('fs');

// // Synchronous (Blocking thread)
// console.log('1. Starting sync read...');
// const data = fs.readFileSync('myfile.txt', 'utf8');
// console.log('2. File contents:', data);
// console.log('3. Done reading file');
 
// // Asynchronous (Non-Blocking thread)
// console.log('1. Starting async read...');
// fs.readFile('myfile.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log('2. File contents:', data);
// }); 
// console.log('3. Done starting read operation');

