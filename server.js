// Import the required modules
const http = require('http');

// Define the host and port for your server
const hostname = '127.0.0.1'; // Change this to your desired host
const port = 3000; // Change this to your desired port

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

// Start the server and listen on the specified host and port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
