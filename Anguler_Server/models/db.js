const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/buyAndSellDB' , { useNewUrlParser: true } , (err)=>{
    if (!err) { console.log('Mongodb connection success')}

    else { console.log('Error in mongodb conection:' + err)}
});

require('./users.model');