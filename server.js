var express = require('express');
var app = express();

app.use(express.static('client'));
app.use(express.static('node_modules'));

app.listen(3001);
