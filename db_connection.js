const mysql = require('mysql2');
const express = require('express');

//Database connection
var config =
{
    host: 'my-demo-sv.mysql.database.azure.com',
    user: 'marjorie@my-demo-sv',
    password: '',
    database: 'userrecord',
    port: 3306,
    ssl: true
};

const conn = new mysql.createConnection(config);
const app = express();
const port = process.env.PORT || 3306;
// Main route sends the app file
app.get('/', function(req, res) {
res.sendfile(__dirname + '/App.js');
});

conn.connect(
    function (err) { 
    if (err) { 
        console.log("!!! Cannot connect !!! Error:");
        throw err;
    }
    else
    {	
       // Begin listening
	   app.listen(port);
       queryDatabase();
       console.log("Connection established.");
    }   
});

//Database setup
function queryDatabase(){
       conn.query('CREATE DATABASE IF NOT EXISTS userrecord', function (err, results, fields) { 
            if (err) throw err; 
            console.log('Database created.');
        })
       conn.query('CREATE TABLE IF NOT EXISTS users (id serial PRIMARY KEY NOT NULL AUTO_INCREMENT, name VARCHAR(50) NOT NULL, email NVARCHAR(50) NOT NULL, password CHAR(128) NOT NULL, added DATE NOT NULL);', 
            function (err, results, fields) {
                if (err) throw err;
            console.log('Created inventory table.');
        })
       conn.end(function (err) { 
        if (err) throw err;
        else  console.log('Done.') 
        });
};

// Update MySQL database
function insertData(){
	app.post('/users', function (req, res) {
    conn.query('INSERT INTO users SET ?', req.body, 
        function (err, results, fields) {
            if (err) throw err;
            res.send('User added to database with ID: ' + result.insertId);
            console.log('Inserted ' + results.affectedRows + ' row(s).');
        }
    );
	});

       conn.end(function (err) { 
        if (err) throw err;
        else  console.log('Done.') 
        });
};

function readData(){
        conn.query('SELECT * FROM users', 
            function (err, results, fields) {
                if (err) throw err;
                else console.log('Selected ' + results.length + ' row(s).');
                for (i = 0; i < results.length; i++) {
                    console.log('Row: ' + JSON.stringify(results[i]));
                }
                console.log('Done.');
            })
       conn.end(
           function (err) { 
                if (err) throw err;
                else  console.log('Closing connection.') 
        });
};

function updateData(){
       conn.query('UPDATE users SET # = ? WHERE # = ?', ['', ''], 
            function (err, results, fields) {
                if (err) throw err;
                else console.log('Updated ' + results.affectedRows + ' row(s).');
        })
       conn.end(
           function (err) { 
                if (err) throw err;
                else  console.log('Done.') 
        });
};

function deleteData(){
       conn.query('DELETE FROM users WHERE # = ?', [''], 
            function (err, results, fields) {
                if (err) throw err;
                else console.log('Deleted ' + results.affectedRows + ' row(s).');
        })
       conn.end(
           function (err) { 
                if (err) throw err;
                else  console.log('Done.') 
        });
};