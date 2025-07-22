const fs = require('fs');

// Create a readable stream from a file
const readableStream = fs.createReadStream('myimg.png', { 
  highWaterMark: 64 * 1024 // 64KB chunks
});

// Handle errors
readableStream.on('error', (err) => {
  console.error('Error reading file:', err);
});

// Create a writable stream to a file
const writableStream = fs.createWriteStream('output.png');

// Pipe the readable stream to the writable stream
readableStream.pipe(writableStream);

// Handle data event
readableStream.on('data', (chunk) => {
  console.log('Data received:', chunk.length / 1024, 'KB');
});

// Handle errors
writableStream.on('error', (err) => {
  console.error('Error writing file:', err);
});

console.log('File copied successfully');

// Streams are a fundamental concept in Node.js that allow for efficient data handling. They:
// Process data piece by piece without loading everything into memory
// Provide better memory efficiency for large datasets
// Allow processing to start before all data is available
// Enable powerful data processing pipelines
// Are used extensively in core Node.js APIs