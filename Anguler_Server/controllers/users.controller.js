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
//##############retrive function#########################


//Retrive data from given id
router.get('/:id' , (req,res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
    
    usersView.findById(req.params.id , (err , doc) => {
        if(!err) { res.send(doc); }
        else { console.log('Error in retrive user : ' +err); }
    });
});
//################Retrive data from given id##############


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


//Update operation
router.put('/:id', (req,res) => {
    if(!ObjectId.isValid(req.params.id))                                          // chek id valid or not
        return res.status(400).send(`No recode with given id : ${req.params.id}`);

    var userUpdate = {                     //create userUpdate object
        fullName: req.body.fullName,
    
        email: req.body.email,
    
        password: req.body.password,
    
        address: req.body.address,
    
        address2: req.body.address2,
    
        city: req.body.city,
    
        state: req.body.state,
    
        zip: req.body.zip,
    };

    usersView.findByIdAndUpdate(req.params.id , { $set: userUpdate }, { new: true}, (err,doc) => {
        if(!err) { res.send(doc);}
        else{ console.log('Error in user update :' +err); }
    });

});
//#############Update operation###################


module.exports = router;