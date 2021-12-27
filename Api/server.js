const express = require("express");
const cors = require("cors");

const { json } = require("express");
const todoRouter = require("./todoRouter/todoRouter.js");

// initialize server
const server = express();
server.use(json());
server.use(cors());

server.get("/", (req, res) => {
  res.status(200).send("Todo List Server");
});

// router
server.use("/todo", todoRouter);

module.exports = server;
