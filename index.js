const server = require("./Api/server.js");
const PORT = process.env.PORT || 5001;

server.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`);
});
