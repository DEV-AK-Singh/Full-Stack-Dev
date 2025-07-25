// import fs from 'fs';
// const { readFile, writeFile } = require('fs').promises;

// // File Operations
// Read and write files
// Create and delete files
// Append to files
// Rename and move files
// Change file permissions

// // Directory Operations
// Create and remove directories
// List directory contents
// Watch for file changes
// Get file/directory stats
// Check file existence

// // Advanced Features
// File streams
// File descriptors
// Symbolic links
// File watching
// Working with file permissions

// Performance Tip: For large files, consider using streams (fs.createReadStream and fs.createWriteStream) to avoid high memory usage.

// fs.readFile('mytext.txt', 'utf-8', (err, data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data, `${data.length} bytes`);
// });

// fs.readFile('myimg.png', (err, data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data, `${data.length} bytes`);
// });

// Using fs.promises (Node.js 10.0.0+)
// const fs = require('fs').promises;

// async function readFileExample() {
//   try {
//     const data = await fs.readFile('mytext.txt', 'utf8');
//     console.log('File content:', data);
//   } catch (err) {
//     console.error('Error reading file:', err);
//   }
// }

// readFileExample();

// // Or with util.promisify (Node.js 8.0.0+)
// const { promisify } = require('util');
// const readFileAsync = promisify(require('fs').readFile);

// async function readWithPromisify() {
//   try {
//     const data = await readFileAsync('mytext.txt', 'utf8');
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }
// }

// readWithPromisify();

// async function readWithFileASync() {
//     try {
//         const data = await readFileAsync('mytext.txt', 'utf8');
//         console.log(data);
//     } catch (error) {
//         console.error(error);
//     }
// }

// readWithFileASync()

// not recommended in prod. can block the event loop
// const fs = require('fs');
// try {
//   // Read file synchronously
//   const data = fs.readFileSync('myfile.txt', 'utf8');
//   console.log('File content:', data);
// } catch (err) {
//   console.error('Error reading file:', err);
// }

// const fs = require('fs').promises; 
// async function writeFileExample() {
//   try {
//     // Write text to a file
//     await fs.writeFile('myfile.txt', 'Hello, World!', 'utf8');

//     // Write JSON data
//     const data = { name: 'John', age: 30, city: 'New York' };
//     await fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8');

//     console.log('Files created successfully');
//   } catch (err) {
//     console.error('Error writing files:', err);
//   }
// } 
// writeFileExample();

// const fs = require('fs').promises; 
// async function appendToFile() {
//   try { 
//     const logEntry = `${new Date().toISOString()}: Application started\n`;
//     await fs.appendFile('app.log', logEntry, 'utf8'); 
//     console.log('Log entry added');
//   } catch (err) {
//     console.error('Error appending to file:', err);
//   }
// } 
// appendToFile();

// const fs = require('fs').promises;
// async function writeWithFileHandle() {
//   let fileHandle;
//   try {
//     // Open a file for writing (creates if doesn't exist)
//     fileHandle = await fs.open('output.txt', 'w');
//     // Write content to the file
//     await fileHandle.write('First line\n');
//     await fileHandle.write('Second line\n');
//     await fileHandle.write('Third line\n');
//     console.log('Content written successfully');
//   } catch (err) {
//     console.error('Error writing to file:', err);
//   } finally {
//     // Always close the file handle
//     if (fileHandle) {
//       await fileHandle.close();
//     }
//   }
// }
// writeWithFileHandle();

// const fs = require('fs');
// const { pipeline } = require('stream/promises');
// const { Readable } = require('stream'); 
// async function writeLargeFile() {
//   // Create a readable stream (could be from HTTP request, etc.)
//   const data = Array(1000).fill().map((_, i) => `Line ${i + 1}: ${'x'.repeat(100)}\n`);
//   const readable = Readable.from(data); 
//   // Create a writable stream to a file
//   const writable = fs.createWriteStream('large-file.txt'); 
//   try {
//     // Pipe the data from readable to writable
//     await pipeline(readable, writable);
//     console.log('Large file written successfully');
//   } catch (err) {
//     console.error('Error writing file:', err);
//   }
// } 
// writeLargeFile();

// const fs = require('fs').promises;
// async function deleteFile() {
//   const filePath = 'file-to-delete.txt'; 
//   try {
//     // Check if file exists before deleting
//     await fs.access(filePath); 
//     // Delete the file
//     await fs.unlink(filePath);
//     console.log('File deleted successfully');
//   } catch (err) {
//     if (err.code === 'ENOENT') {
//       console.log('File does not exist');
//     } else {
//       console.error('Error deleting file:', err);
//     }
//   }
// }
// deleteFile();

// const fs = require('fs').promises;
// const path = require('path'); 
// async function deleteFiles() {
//   const filesToDelete = [
//     'temp1.txt',
//     'temp2.txt',
//     'temp3.txt'
//   ]; 
//   try {
//     // Delete all files in parallel
//     await Promise.all(
//       filesToDelete.map(file =>
//         fs.unlink(file).catch(err => {
//           if (err.code !== 'ENOENT') {
//             console.error(`Error deleting ${file}:`, err);
//           }
//         })
//       )
//     ); 
//     console.log('Files deleted successfully');
//   } catch (err) {
//     console.error('Error during file deletion:', err);
//   }
// } 
// deleteFiles();

// const fs = require('fs').promises;
// const path = require('path'); 
// async function deleteDirectory(dirPath) {
//   try {
//     // Check if the directory exists
//     const stats = await fs.stat(dirPath); 
//     if (!stats.isDirectory()) {
//       console.log('Path is not a directory');
//       return;
//     } 
//     // For Node.js 14.14.0+ (recommended)
//     await fs.rm(dirPath, { recursive: true, force: true }); 
//     // For older Node.js versions (deprecated but still works)
//     // await fs.rmdir(dirPath, { recursive: true }); 
//     console.log('Directory deleted successfully');
//   } catch (err) {
//     if (err.code === 'ENOENT') {
//       console.log('Directory does not exist');
//     } else {
//       console.error('Error deleting directory:', err);
//     }
//   }
// } 
// // Usage
// deleteDirectory('directory-to-delete');

// const fs = require('fs').promises;
// const path = require('path'); 
// async function emptyDirectory(dirPath) {
//   try {
//     // Read the directory
//     const files = await fs.readdir(dirPath, { withFileTypes: true }); 
//     // Delete all files and directories in parallel
//     await Promise.all(
//       files.map(file => {
//         const fullPath = path.join(dirPath, file.name);
//         return file.isDirectory()
//           ? fs.rm(fullPath, { recursive: true, force: true })
//           : fs.unlink(fullPath);
//       })
//     ); 
//     console.log('Directory emptied successfully');
//   } catch (err) {
//     console.error('Error emptying directory:', err);
//   }
// } 
// // Usage
// emptyDirectory('directory-to-empty');

// const fs = require('fs').promises;
// async function renameFile() {
//   const oldPath = 'old-name.txt';
//   const newPath = 'new-name.txt';
//   try {
//     // Check if source file exists
//     await fs.access(oldPath);
//     // Check if destination file already exists
//     try {
//       await fs.access(newPath);
//       console.log('Destination file already exists');
//       return;
//     } catch (err) {
//       // Destination doesn't exist, safe to proceed
//     }
//     // Perform the rename
//     await fs.rename(oldPath, newPath);
//     console.log('File renamed successfully');
//   } catch (err) {
//     if (err.code === 'ENOENT') {
//       console.log('Source file does not exist');
//     } else {
//       console.error('Error renaming file:', err);
//     }
//   }
// }
// // Usage
// renameFile();

// const fs = require('fs').promises;
// const path = require('path');
// async function moveFile() {
//   const sourceFile = 'source/file.txt';
//   const targetDir = 'destination';
//   const targetFile = path.join(targetDir, 'file.txt');
//   try {
//     // Ensure source file exists
//     await fs.access(sourceFile);
//     // Create target directory if it doesn't exist
//     await fs.mkdir(targetDir, { recursive: true });
//     // Move the file
//     await fs.rename(sourceFile, targetFile);
//     console.log('File moved successfully');
//   } catch (err) {
//     if (err.code === 'ENOENT') {
//       console.log('Source file does not exist');
//     } else if (err.code === 'EXDEV') {
//       console.log('Cross-device move detected, using copy+delete fallback');
//       await moveAcrossDevices(sourceFile, targetFile);
//     } else {
//       console.error('Error moving file:', err);
//     }
//   }
// }
// // Helper function for cross-device moves
// async function moveAcrossDevices(source, target) {
//   try {
//     // Copy the file
//     await fs.copyFile(source, target); 
//     // Delete the original
//     await fs.unlink(source); 
//     console.log('File moved across devices successfully');
//   } catch (err) {
//     // Clean up if something went wrong
//     try { await fs.unlink(target); } catch (e) {}
//     throw err;
//   }
// }
// // Usage
// moveFile();

// const fs = require('fs').promises;
// const path = require('path'); 
// async function batchRename() {
//   const directory = 'images';
//   const pattern = /^image(\d+)\.jpg$/; 
//   try {
//     // Read directory contents
//     const files = await fs.readdir(directory); 
//     // Process each file
//     for (const file of files) {
//       const match = file.match(pattern);
//       if (match) {
//         const [_, number] = match;
//         const newName = `photo-${number.padStart(3, '0')}.jpg`;
//         const oldPath = path.join(directory, file);
//         const newPath = path.join(directory, newName); 
//         // Skip if the new name is the same as the old name
//         if (oldPath !== newPath) {
//           await fs.rename(oldPath, newPath);
//           console.log(`Renamed: ${file} - ${newName}`);
//         }
//       }
//     } 
//     console.log('Batch rename completed');
//   } catch (err) {
//     console.error('Error during batch rename:', err);
//   }
// } 
// batchRename();

// const fs = require('fs').promises;
// const path = require('path');
// const os = require('os'); 
// async function updateFileAtomic(filePath, newContent) {
//   const tempPath = path.join(
//     os.tmpdir(),
//     `temp-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
//   );  
//   try {
//     // 1. Write to temp file
//     await fs.writeFile(tempPath, newContent, 'utf8'); 
//     // 2. Verify the temp file was written correctly
//     const stats = await fs.stat(tempPath);
//     if (stats.size === 0) {
//       throw new Error('Temporary file is empty');
//     } 
//     // 3. Rename (atomic on most systems)
//     await fs.rename(tempPath, filePath); 
//     console.log('File updated atomically');
//   } catch (err) {
//     // Clean up temp file if it exists
//     try { await fs.unlink(tempPath); } catch (e) {} 
//     console.error('Atomic update failed:', err);
//     throw err;
//   }
// } 
// // Usage
// updateFileAtomic('important-config.json', JSON.stringify({ key: 'value' }, null, 2));