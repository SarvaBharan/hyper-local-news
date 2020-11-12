let http = require('http');
let hostname = 'localhost';
let port = 3000;

let app = http.createServer((req, res) => {
  res.setHeader('content-type', 'application/json');
  res.end(JSON.stringify({
    name: "Chethan",
    city: "Bangalore"
  }));
})

app.listen(port, hostname, () => console.info(`Server started on port: ${port}`));