const mysql = require('mysql2');
const express = require('express');
const http = require('http').Server(app);
const bodyParser = require("body-parser");

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

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); // Body parser use JSON data

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
        console.log("Cannot connect! Error:");
        throw err;
    }
    else
    {	
       //begin listening
	   app.listen(port);
	   //setup db
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
       conn.query('CREATE TABLE IF NOT EXISTS users (id serial PRIMARY KEY NOT NULL AUTO_INCREMENT, name VARCHAR(50) NOT NULL, email NVARCHAR(50) NOT NULL, password CHAR(128) NOT NULL, added DATE NOT NULL);', function (err, results, fields) {
                if (err) throw err;
            console.log('Created inventory table.');
        })
       conn.end(function (err) { 
        if (err) throw err;
        else  console.log('Done.') 
        });
};

function insertData(){
	router.post('/new', function(req, res, next) {
		var post  = {name: req.body.name};
   		 res.locals.connection.query('INSERT INTO users(name,email) values(req.body.name, req.body.email, req.body.password, req.body.added)', function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});

function readData(){
    app.get('/users', function(req, res, next) {
    	res.locals.conn.query('SELECT * FROM users', function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    	});
	});
};

function updateData(){
       router.get('/edit', function(req, res, next) {
	    	res.locals.conn.query('UPDATE users SET name = req.body.name+'', email = ''+req.body.email+'' WHERE id = ''+req.body.id+''', function (error, results, fields) {
	        if(error) throw error;
	        res.send(JSON.stringify(results));
	    	});
		});
};

function deleteData(){
       router.get('/delete', function(req, res, next) {
	    	res.locals.conn.query('DELETE FROM users WHERE id = '+req.body.id+'', function (error, results, fields) {
	        if(error) throw error;
	        res.send(JSON.stringify(results));
    		});
		});
};