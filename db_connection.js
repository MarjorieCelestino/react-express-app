const mysql = require('mysql2');

var config =
{
    host: 'my-demo-sv.mysql.database.azure.com',
    user: 'marjorie@my-demo-sv',
    password: '',
    port: 3306,
    ssl: true
};

const conn = new mysql.createConnection(config);

conn.connect(
    function (err) { 
    if (err) { 
        console.log("!!! Cannot connect !!! Error:");
        throw err;
    }
    else
    {
       console.log("Connection established.");
           //queryDatabase();
    }   
});