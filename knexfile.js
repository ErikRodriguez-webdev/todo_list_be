// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./Database/app.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./Database/migrations",
    },
  },
};
