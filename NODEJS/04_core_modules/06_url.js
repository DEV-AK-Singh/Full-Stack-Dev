// let adr = 'http://localhost:8080/default/index.html?year=2017&month=february';

// let url = require('url');
// let q = url.parse(adr, true);
// console.log(q); 

// const { URL, URLSearchParams } = require('url');
// let new_q = new URL(adr);
// console.log(new_q);
// let search_params = new URLSearchParams(new_q.searchParams);
// console.log(search_params.get('year'));
// console.log(search_params.get('month'));

let http = require('http');
let url = require('url');
let fs = require('fs');

http.createServer(function (req, res) {
  let q = url.parse(req.url, true);
  let filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080, ()=>{
    console.log('server started!');
});