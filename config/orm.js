// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
    selectAll : function (cb) {
        connection.query("SLECT * FROM burgers", function (error , results){
            if (error) throw error
            cb(results)
        })
    },

    insertOne: function (burger, cb) {
        connection.query ("INSERT INTO burgers SET ?" , burger, function (error, results, fields){
            if (error ) throw error;
            cb([burger, results.insertId])
        });
    },

    updateOne: function (burger, cb) {
        connection.query ("UPDATE  burgers SET devoured = ? WHERE id ?", [burger.devoured , burger.id], function (error, results, fields){
            if (error ) throw error;
            cb(burger)
        });
    }

}


// Export the orm object for the model (burger.js).
module.exports = orm;
