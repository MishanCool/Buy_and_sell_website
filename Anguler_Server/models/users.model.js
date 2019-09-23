//Structure of collection

const mongoose = require('mongoose');

var usersView = mongoose.model('Users' ,{
    fullName: {
        type: String
    },

    email: {
        type: String
    },

    password: {
        type: String
    },

    address: {
        type: String
    },

    address2: {
        type: String
    },

    // password: {
    //     type: String
    // },

    city: {
        type: String
    },

    state: {
        type: String
    },

    zip: {
        type: String
    },
});
              //Name of collection in mongoDB => 'users'  
//mongoose.model('users' , usersSchema );

module.exports = {usersView};