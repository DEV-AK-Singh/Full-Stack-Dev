// import path from 'path'; 
// import { join, resolve, basename } from 'path'; 
// console.log(path.basename('data.json', '.json'));

// const path = require('path'); 
// // Get the directory name of the current module
// console.log('Directory name:', __dirname);
// // Get the file name of the current module
// console.log('File name:', __filename);
// // Building paths relative to the current module
// const configPath = path.join(__dirname, 'config', 'app-config.json');
// console.log('Config file path:', configPath);
// // Getting the directory name using path.dirname()
// console.log('Directory using path.dirname():', path.dirname(__filename));

const path = require('path'); 
// console.log(path.resolve('myfile.txt'));
// console.log(path.dirname('myfile.txt'));
// console.log(path.parse('myfile.txt'));
// console.log(path.parse(path.resolve('myfile.txt')));
// console.log(path.parse(path.resolve('myfile.txt')).dir);
console.log(path.normalize('C:\\Users\\Abhishek\\Desktop\\..\\NODEJS\\04_core_modules'))