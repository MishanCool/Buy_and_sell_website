require('./models/db');

const express = require('express');

const usersController = require('./controllers/users.controller');

var app = express()


app.listen(3002 , () => {
    console.log('Express server start at port 3002');
});

app.use('/register' , usersController);