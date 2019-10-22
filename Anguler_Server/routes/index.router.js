 const express = require('express');
 const router = express.Router();

 //ctrl mean controller
 const ctrlUser = require('../controllers/user.controller');

 const jwtHelper = require('../config/jwtHelper');

 //post router
 router.post('/register', ctrlUser.register); //('uri', function wich can handal, user sing up request in the client side)
 router.post('/authenticate', ctrlUser.authenticate);

 //get router
 router.get('/userProfile', jwtHelper.verifyJwtToken, ctrlUser.userProfile); // call function 1 =>jwtHelper.verifyJwtToken function befor ctrlUser function  to verify jwt token wich is curently atach to this request
// first verify jwt token and then give access userprofile

 //can configer routing middleware inside this application
 module.exports = router;