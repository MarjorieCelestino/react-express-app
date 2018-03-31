const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'my-demo-sv.mysql.database.azure.com',
  user: 'marjorie@my-demo-sv',
  password: 'Pial5912.',
  database: 'userrecord'
})

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
})
