require('./models/db');

const express = require('express');

var app = express()

app.listen(3002 , () => {
    console.log('Express server start at port 3002');
});