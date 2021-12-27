const express = require("express");
const todoRouter = express.Router();

const todoHelper = require("./todoHelper.js");

todoRouter.get("/", (req, res) => {
  todoHelper
    .getAllTodos()
    .then((response) => {
      console.log(response);
      res.status(200).json(response);
    })
    .catch((error) => {
      console.log("error", error);
      res.status(400).send("something is wrong in get call");
    });
});

todoRouter.post("/", (req, res) => {
  todoHelper
    .addTodo(req.body)
    .then((response) => {
      console.log(response);
      res.status(200).json(response);
    })
    .catch((error) => {
      console.log("error", error);
      res.status(400).send("something is wrong in post call");
    });
});

todoRouter.delete("/:id", (req, res) => {
  todoHelper
    .removeTodo(req.params.id)
    .then((response) => {
      console.log(response);
      res.status(200).send("deleted successfully");
    })
    .catch((error) => {
      console.log(error);
      res.status(400).send("delete went wrong");
    });
});

module.exports = todoRouter;
