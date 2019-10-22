const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const User = mongoose.model('User');

//function name register
// this function use to handel request from client side
module.exports.register = (req, res, next) =>{
    //console.log('inside register fn...!');

    //make an object of following "User" model
    var user = new User();                                   //
                                                             //
    user.username = req.body.username;      //                  // save new user recodes based on the values pass through the "req" parameter
    user.email = req.body.email;            //   retrive values //
    user.password = req.body.password;      //                  //

    //save user recodes
    user.save((err, doc) => {        // err - posible errors pass through this parameter
                                     // doc - newly save recode details pass through this parameter
 
        if(!err){
            // response object . send function can be call inside the value of doc parameter 
            res.send(doc);
        }
        //All validation errors shud be handle in else block
        else{
            //console.log(err);
            if (err.code === 11000) {
                // Duplicate email
                return res.status(422).send(['Duplicate email address found']);
            }
            else{
                return next(err);
            }
        
        }
    });

}


module.exports.authenticate = (req, res, next) => {
    //call for passport authentication
    passport.authenticate('local', (err,user,info) => {
        //error in passport middleware
        if(err){
            return res.status(400).json(err);
        }

        //register user
        else if(user){
            return res.status(200).json({ "token": user.generateJwt() });
        }

        //unknown user or wrong password
        else{
            return res.status(404).json(info);
        }
    })(req,res);
}

module.exports.userProfile = (req, res, next) => {
    User.findOne({ _id: req._id }, (err, user) => {
        if(!user){
            return res.status(404).json({ status: false, message: 'User recodes not found' });
        }
        else{
            return res.status(200).json({ status: true, user: _.pick(user,['username','email']) });
        }
    });
}