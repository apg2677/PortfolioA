// Get dependencies
const express = require("express");
const path = require("path");
const http = require("http");
// const bodyParser = require('body-parser');
// const morgan = require('morgan');
// const proxy = require('express-http-proxy');
// const cors = require('cors');
// const request = require('request');

const app = express();

// app.use(cors());

// Point static path to dist
app.use(express.static(path.join(__dirname, "dist/portfolio")));

console.log("Using node server");
// var Client = require('node-rest-client').Client;
// var client = new Client();

// app.get('/server_api/api/v1/rivers', function (req, res) {
//     client.get("http://riverbrain.com/api/v1/rivers", function (data, response) {
//         res.send(data);
//     });
// });

// Catch all other routes and return the index file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/portfolio/index.html"));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || "3001";
app.set("port", port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on ${port}`));
