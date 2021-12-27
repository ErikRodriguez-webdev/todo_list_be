const knex = require("knex");
const db = require("../../Database/db-config.js");

module.exports = {
  findById,
  getAllTodos,
  addTodo,
  removeTodo,
};

function findById(id) {
  return db("app-todos").where({ id }).first();
}

function getAllTodos() {
  return db("app-todos");
}

function addTodo(todoObj) {
  return db("app-todos")
    .insert(todoObj, "id")
    .then((response) => {
      return findById(response[0]);
    });
}

function removeTodo(id) {
  return db("app-todos").where({ id }).del();
}
