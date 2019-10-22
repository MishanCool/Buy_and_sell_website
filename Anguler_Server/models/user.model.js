const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');//generate the random saltSecret, first require the bcryptjs state ment
const jwt = require('jsonwebtoken');


var userSchema = new mongoose.Schema({
  username:{
    type: String,
    required: 'Full name can\'t be empty'
  },
  email: {
    type: String,
    required: 'Email can\'t be empty',
    index: true,
    unique: true
  },
  password: {
    type: String,
    required: 'Password can\'t be empty',
    minlength: [4, 'Password must be atleast 4 character long']
  },
  saltSecret: { // automaticaly create user registration function in user.controller.js file
    type: String
  } 
}, {timestamps: true});


//Custom validation for email
userSchema.path('email').validate(/*function*/ (val) =>{
  var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailRegex.test(val); // Assuming email has a text attribute
}, 'Invalied email');


//Event
userSchema.pre("save", function(next) {

  //Generate a salt and hash on separate function calls
  bcrypt.genSalt(10, /*function*/(err, salt) =>{                     //Randomly jenarate  result secret code from bcryptjs
    bcrypt.hash(this.password, salt, /*function*/(err, hash) => {
        // Store hash in your password DB.
        this.password = hash; //encripted password inside this hash parameter, save inside the password property in mongo db.
        this.saltSecret = salt;
        next(); // exicute save user recode operation in user.controller.js file
    });
  });
});

//Methods

userSchema.methods.verifyPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.methods.generateJwt = function () {
  return jwt.sign({ _id: this._id },
    process.env.JWT_SECRET,{
      expiresIn: process.env.JWT_EXP
    });
}

mongoose.model('User', userSchema); //('model name' , schema object)