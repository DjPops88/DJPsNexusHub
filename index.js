//console.log ('Hello World!');
const express = require('express');
const app = express();
const fs = require('fs');

if (!fs.existsSync('./data'))
    fs.mkdirSync('./data');

const connection = new(require('nosqlite').Connection)('./data');
const guns = connection.database('guns')

if (!guns.existsSync())
    guns.createSync()

app.use(express.static('./'));
app.listen(80);