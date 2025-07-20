// // Check Node.js version
// console.log(`Node.js version: ${process.version}`);

// // Explore global object
// console.log(global);

// // CommonJS module example
// const fs = require('fs'); // Built-in module

// // Writing a file
// fs.writeFile('newfile.txt', 'Hello Node.js!', (err) => {
//   if (err) throw err;
//   console.log('File written!');
// });

// // Async file read
// fs.readFile('example.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url == "/") {
//     // console.log(req.headers);
//     // console.log(req.method);
//     // console.log(req.connection.remotePort); connection -> socket (connection is depreciated!)
//     // console.log(req.connection.remoteAddress);
//     // console.log(req.socket.remotePort);
//     // console.log(req.socket.remoteAddress); 
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end("<h1>Hello World</h1>");
//   }
//   else if (req.url == "/json") {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify({ message: "API Response" }));
//   }
//   else if (req.url == "/plain") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end(JSON.stringify({ message: "API Response" }));
//   }
// });

// server.listen(4000, ()=>{
//     console.log('Server is running and up!');
// });

// const os = require('os');
// console.log(os.platform());
// console.log(os.homedir());
// console.log(os.userInfo());
// console.log(os.availableParallelism());
// console.log(os.cpus());
// console.log(os.hostname())

// --env-- node file.js --argv--
// console.log(process.argv);
// console.log(process.env);

// console.log("Debugging!");

// sync code > nextTick > Promises > Timers > Check phase.
// console.log('1. Start');

// // Next tick queue
// process.nextTick(() => console.log('2. Next tick'));

// // Microtask queue (Promise)
// Promise.resolve().then(() => console.log('3. Promise'));

// // Timer phase
// setTimeout(() => console.log('4. Timeout'), 0);

// // Check phase
// setImmediate(() => console.log('5. Immediate'));

// console.log('6. End');