// const http = require('http');

// const server = http.createServer((req, res) => {
//   // Set status code and multiple headers
//   res.writeHead(200, {
//     'Content-Type': 'text/html',
//     'X-Powered-By': 'Node.js',
//     'Cache-Control': 'no-cache, no-store, must-revalidate',
//     'Set-Cookie': 'sessionid=abc123; HttpOnly'
//   });

//   res.set

//   res.end('<h1>Hello, World!</h1>');
// });

// server.listen(3000, () => {
//   console.log('Server running at http://localhost:3000/');
// });



// Handling Different HTTP Methods
// const http = require('http');
// const { URL } = require('url');

// // In-memory data store (for demonstration)
// let todos = [
//   { id: 1, task: 'Learn Node.js', completed: false },
//   { id: 2, task: 'Build an API', completed: false }
// ];

// const server = http.createServer((req, res) => {
//   const { method, url } = req;
//   const parsedUrl = new URL(url, `http://${req.headers.host}`);
//   const pathname = parsedUrl.pathname;

//   // Set CORS headers (for development)
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

//   // Handle preflight requests
//   if (method === 'OPTIONS') {
//     res.writeHead(204);
//     res.end();
//     return;
//   }

//   // Route: GET /todos
//   if (method === 'GET' && pathname === '/todos') {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify(todos));
//   }
//   // Route: POST /todos
//   else if (method === 'POST' && pathname === '/todos') {
//     let body = '';
//     req.on('data', chunk => {
//       body += chunk.toString();
//     });

//     req.on('end', () => {
//       try {
//         const newTodo = JSON.parse(body);
//         newTodo.id = todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1;
//         todos.push(newTodo);
//         res.writeHead(201, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify(newTodo));
//       } catch (error) {
//         res.writeHead(400, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify({ error: 'Invalid JSON' }));
//       }
//     });
//   }

//   // Route: PUT /todos/:id
//   else if (method === 'PUT' && pathname.startsWith('/todos/')) {
//     const id = parseInt(pathname.split('/')[2]);
//     let body = '';

//     req.on('data', chunk => {
//       body += chunk.toString();
//     });

//     req.on('end', () => {
//       try {
//         const updatedTodo = JSON.parse(body);
//         const index = todos.findIndex(t => t.id === id);

//         if (index === -1) {
//           res.writeHead(404, { 'Content-Type': 'application/json' });
//           res.end(JSON.stringify({ error: 'Todo not found' }));
//         } else {
//           todos[index] = { ...todos[index], ...updatedTodo };
//           res.writeHead(200, { 'Content-Type': 'application/json' });
//           res.end(JSON.stringify(todos[index]));
//         }
//       } catch (error) {
//         res.writeHead(400, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify({ error: 'Invalid JSON' }));
//       }
//     });
//   }

//   // Route: DELETE /todos/:id
//   else if (method === 'DELETE' && pathname.startsWith('/todos/')) {
//     const id = parseInt(pathname.split('/')[2]);
//     const index = todos.findIndex(t => t.id === id);

//     if (index === -1) {
//       res.writeHead(404, { 'Content-Type': 'application/json' });
//       res.end(JSON.stringify({ error: 'Todo not found' }));
//     } else {
//       todos = todos.filter(t => t.id !== id);
//       res.writeHead(204);
//       res.end();
//     }
//   }

//   // 404 Not Found
//   else {
//     res.writeHead(404, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify({ error: 'Not Found' }));
//   }
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}/`);
// });



// Streaming Responses
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Get the file path from the URL
  const filePath = path.join(__dirname, req.url);

  // Check if file exists
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      res.statusCode = 404;
      res.end('File not found');
      return;
    }

    // Get file stats
    fs.stat(filePath, (err, stats) => {
      if (err) {
        res.statusCode = 500;
        res.end('Server error');
        return;
      }

      // Set appropriate headers
      res.setHeader('Content-Length', stats.size);
      res.setHeader('Content-Type', 'application/octet-stream');

      // Create read stream and pipe to response
      const stream = fs.createReadStream(filePath);

      // Handle errors
      stream.on('error', (err) => {
        console.error('Error reading file:', err);
        if (!res.headersSent) {
          res.statusCode = 500;
          res.end('Error reading file');
        }
      });

      // Pipe the file to the response
      stream.pipe(res);
    });
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`File server running at http://localhost:${PORT}/`);
});
