// Node.js uses an event-driven architecture where objects called "emitters" emit named events that cause function objects ("listeners") to be called.

// const EventEmitter = require('events');
// const emitter = new EventEmitter(); 
// // Emit event with arguments
// emitter.on('userJoined', (username, userId) => {
//   console.log(`${username} (${userId}) has joined the chat`);
// }); 
// emitter.emit('userJoined', 'JohnDoe', 42);
// // Outputs: JohnDoe (42) has joined the chat

// const EventEmitter = require('events');
// const emitter = new EventEmitter(); 
// // This listener will be called only once
// emitter.once('connection', () => {
//   console.log('First connection established');
// }); 
// emitter.emit('connection'); // This will trigger the listener
// emitter.emit('connection'); // This won't trigger the listener again

// const EventEmitter = require('events');
// const emitter = new EventEmitter();
// // Always handle 'error' events
// emitter.on('error', (err) => {
//   console.error('An error occurred:', err.message);
// });
// // This will trigger the error handler
// emitter.emit('error', new Error('Something went wrong'));

// 1. Always Handle Errors
// Good practice: Always listen for 'error' events
// myEmitter.on('error', (err) => {
//   console.error('Error in event emitter:', err);
// });

// 2. Use Named Functions for Better Stack Traces
// // Instead of anonymous functions
// function handleData(data) {
//   console.log('Received data:', data);
// }
// myEmitter.on('data', handleData);

// 3. Clean Up Listeners
// // Add a listener
// const listener = () => console.log('Event occurred');
// myEmitter.on('event', listener); 
// // Later, remove the listener when no longer needed
// myEmitter.off('event', listener);