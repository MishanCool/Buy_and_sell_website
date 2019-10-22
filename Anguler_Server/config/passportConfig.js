const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

  //User -> variable           //User -> Schema
var User = mongoose.model('User')

passport.use(
    new localStrategy({ usernameField: 'email' },
    (username, password, done) => {
        User.findOne({ email: username },
            (err, User_recodes) => {
                if(err){
                    return done(err);
                }

                // unknown user
                else if(!User_recodes){
                    return done(null, false, { message: 'Email is not registerd'});
                }

                //wrong password
                else if(!User_recodes.verifyPassword(password)){
                    return done(null, false, { message: 'Wrong password.' });
                }

                //authentication succeeded
                else{
                    return done(null, User_recodes);
                }
            });
    })
    
);