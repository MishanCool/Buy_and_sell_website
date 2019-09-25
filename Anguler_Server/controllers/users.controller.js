const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { usersView } = require('../models/users.model');

// retrive function
router.get('/' , (req,res) => {
    // res.json('sample string');
    usersView.find((err , docs) => {
        if(!err) { res.send(docs); }
        else { console.log('Error in retriving users:' + err); }
    });
});



router.get('/:id' , (req,res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
    
    usersView.findById(req.params.id , (err , doc) => {
        if(!err) { res.send(doc); }
        else { console.log('Error in retrive user : ' +err); }
    });
});


router.post('/' , (req,res) => {
    var usersSchema = new usersView ({
        fullName: req.body.fullName,
    
        email: req.body.email,
    
        password: req.body.password,
    
        address: req.body.address,
    
        address2: req.body.address2,
    
        // password: req.body.email,
    
        city: req.body.city,
    
        state: req.body.state,
    
        zip: req.body.zip,
    });
    
    usersSchema.save((err , doc) => {
        if(!err) { res.send(doc); }
        else { console.log('Error in insert users:' + err); }
    });
});

module.exports = router;