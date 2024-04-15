// Dependencies
const http = require("http");
const app = require("./app");
// port
const PORT = process.env.PORT || 3000;

// creating the server
const server = http.createServer(app);

// listen
server.listen(PORT, () => {
  console.log(`Server is listening to ${PORT}`);
});
