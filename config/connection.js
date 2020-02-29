// Set up MySQL connection.
var mysql = require("mysql");
const user = require('../user.js');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: `${user.getName()}`,
  password: `${user.getPassword()}`,
  database: "Burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;