exports.up = function (knex) {
  return knex.schema.createTable("app-todos", (table) => {
    table.increments();

    table.text("todo");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExist("app-todos");
};
