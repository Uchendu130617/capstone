const http = require('http');

const server = http.createServer((req, res) => {
  res.write("Welcome to DevOps Capstone Project that was Prepared by Group four Cloud Engineering and Devops November Cohort 2025");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
