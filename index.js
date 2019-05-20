//console.log ('Hello World!');
const express = require('express');
const app = express();

app.use(express.static('./client'));
app.listen(80);