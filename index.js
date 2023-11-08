//PASO 1
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
//PASO 7
const connect = require("./src/utils/db");

//PASO 2
const server = express();
//PASO 8
connect();

//PASO 3
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

//PASO 13

//PASO 4
server.use("*", (req, res) => {
    res.end("Route not found");
  });

//PASO 5
const PORT = process.env.PORT;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
  