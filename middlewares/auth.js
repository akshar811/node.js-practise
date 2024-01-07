const mongoose = require('mongoose');
const jwt = require("jsonwebtoken")

const Auth = (req,res,next)=>{
   let {token} = req.cookies 

   if(token){
    let decode = jwt.verify(token , "token")
    req.body.userID = decode.id 
    next();
   }
   else{
    res.send("not logged in");
   }
}

module.exports = Auth