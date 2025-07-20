// const fs = require('fs');

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

// // Avoid callback hell
// getUser(userId, (err, user) => {
//   if (err) return handleError(err);
//   getOrders(user.id, (err, orders) => {
//     if (err) return handleError(err);
//     processOrders(orders, (err) => {
//       if (err) return handleError(err);
//       console.log('All done!');
//     });
//   });
// });

// // Promises
// getUser(userId)
//   .then(user => getOrders(user.id))
//   .then(orders => processOrders(orders))
//   .then(() => console.log('All done!'))
//   .catch(handleError);

// // Async/Await
// async function processUser(userId) {
//   try {
//     const user = await getUser(userId);
//     const orders = await getOrders(user.id);
//     await processOrders(orders);
//     console.log('All done!');
//   } catch (err) {
//     handleError(err);
//   }
// }

// ✅ Use async/await for better readability
// ✅ Always handle errors with try/catch
// ✅ Run independent operations in parallel with Promise.all
// ❌ Avoid mixing sync and async code patterns
// ❌ Don't forget to await promises

// // Run multiple async operations in parallel
// async function fetchAllData() {
//   try {
//     const [users, products, orders] = await Promise.all([
//       User.find(),
//       Product.find(),
//       Order.find()
//     ]);
//     return { users, products, orders };
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error;
//   }
// }

// // Node Promises
// function getUser(userId) {
//   return new Promise((resolve, reject) => {
//     // Simulating database call
//     setTimeout(() => {
//       resolve({ id: userId, name: 'John' });
//     }, 1000);
//   });
// }

// function getUserPosts(user) {
//   return new Promise((resolve, reject) => {
//     // Simulating API call
//     setTimeout(() => {
//       resolve(['Post 1', 'Post 2', 'Post 3']);
//     }, 1000);
//   });
// }

// // Chain the promises
// getUser(123)
//   .then(user => {
//     console.log('User:', user);
//     return getUserPosts(user);
//   })
//   .then(posts => {
//     console.log('Posts:', posts);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

// // Instance Method
// - Handles fulfillment or rejection
// then(onFulfilled, onRejected)
// - Handles rejections
// catch(onRejected)
// - Runs after promise settles
// finally(onFinally)

// // Static Methods
// - Waits for all promises to resolve
// Promise.all(iterable)
// - Waits for first promise to settle
// Promise.race(iterable)
// - Waits for all to settle
// Promise.allSettled(iterable)

// // Utility Methods
// - Creates a resolved promise
// Promise.resolve(value)
// - Creates a rejected promise
// Promise.reject(reason)

// Async/await makes asynchronous code look and more feel like synchronous code. It does not block the main thread, but is easy to follow and understand.
// async: Used to declare an asynchronous function that returns a Promise
// await: Used to pause execution until a Promise is resolved, can only be used inside async functions

// Async/Await vs Promises vs Callbacks

// Callbacks	
// -> Pros 
// - Simple to understand
// - Widely supported
// -> Cons
// - Callback hell
// - Error handling is complex
// - Hard to reason about

// Promises	
// -> Pros 
// - Chaining with .then()
// - Better error handling
// - Composable
// -> Cons
// - Still requires nesting for complex flows
// - Not as readable as async/await

// Async/Await	
// -> Pros 
// - Clean, synchronous-like code
// - Easy error handling with try/catch
// - Easier debugging
// -> Cons
// - Requires understanding of Promises
// - Easy to accidentally block execution

// Best Practices
// 1. Remember that async functions always return Promises
// 2. Use Promise.all for concurrent operations, When operations can run in parallel, use Promise.all to improve performance.
// 3. Always handle errors, Use try/catch blocks or chain a .catch() to the async function call.
// 4. Avoid mixing async/await with callbacks, Convert callback-based functions to Promises using util.promisify or custom wrappers.
// 5. Create clean async functions, Keep async functions focused on a single responsibility.
// 6. Be aware of the "top-level await" feature available in ECMAScript modules (ESM) in Node.js 14.8.0 and above, which allows using await outside of async functions at the module level.

// Why Handle Errors?
// Errors are inevitable in any program, but how you handle them makes all the difference. In Node.js, proper error handling is crucial because:
// It prevents applications from crashing unexpectedly
// It provides meaningful feedback to users
// It makes debugging easier with proper error context
// It helps maintain application stability in production
// It ensures resources are properly cleaned up

// Basic Error Handling // if-else
// Modern Error Handling // try-catch
// Global Error Handling // global process.on() method

