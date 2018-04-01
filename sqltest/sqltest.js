// Module dependencies

var express    = require('express'),
    mysql      = require('mysql');

// Application initialization

var connection = mysql.createConnection({
        host     : 'my-demo-sv.mysql.database.azure.com',
        user     : 'marjorie@my-demo-sv',
    });
    
var app = module.exports = express.createServer();

// Database setup

connection.query('CREATE DATABASE IF NOT EXISTS userrecord', function (err) {
    if (err) throw err;
    connection.query('USE userrecord', function (err) {
        if (err) throw err;
        connection.query('CREATE TABLE IF NOT EXISTS users('
            + 'Id INTEGER NOT NULL AUTO_INCREMENT,'
            + 'PRIMARY KEY(id),'
            + 'name VARCHAR(30) NOT NULL,'
            + 'email NVARCHAR(50) NOT NULL,'                                                                                  
            + 'password CHAR(128) NOT NULL,'                                                                                   
            + 'added DATE NOT NULL'
            +  ')', function (err) {
                if (err) throw err;
            });
    });
});

// Configuration

app.use(express.bodyParser());

// Main route sends the app file

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/app.js');
});

// Update MySQL database

app.post('/users', function (req, res) {
    connection.query('INSERT INTO users SET ?', req.body, 
        function (err, result) {
            if (err) throw err;
            res.send('User added to database with ID: ' + result.insertId);
        }
    );
});

// Begin listening

app.listen(80);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);