const product = require("../model/product.schema");
const user = require("../model/user.model");
const jwt = require("jsonwebtoken");

const finddata =async (req,res)=>{
  const data =await user.find()
  res.send(data);
}
const createdata = async(req,res)=>{
   const data =await user.create(req.body)
   res.send(data);
}
const updatedata =async (req,res)=>{
   let {id}= req.params 
   const data = await user.findByIdAndUpdate(id,req.body)
   res.send(data);
}
const deletdata =async (req,res)=>{
    let {id}= req.params 
    const data = await user.findByIdAndDelete(id)
    res.send(data);
}


//Signup

const signup = async (req,res)=>{
    const {username , password , email} = req.body;
    const users = await user.findOne({email: email});

    if(users){
        res.send("email id already exists")
    }
    else{
      let data = await user.create(req.body);
       res.send(data);
    }
}

//Login
const login = async (req,res)=>{
    const {username , password , email} = req.body;
    const users = await user.findOne({email: email});

    if(!users){
      res.send("user not found");
    }
    else if(users.password !== password){
        res.send("password wrong");
    }
    else {
     let token = jwt.sign({id : users.id},"token")
     res.cookie("token", token).cookie("id",users._id);
     res.send("Login successfully");
    }
}

//product 

const createProduct =async (req,res)=>{
  const {title , description , img} = req.body;
  const data = await product.create(req.body);
  res.send(data);
}

const findproduct = async (req,res)=>{
    const data = await product.find()
    res.send(data);
}

const products =async (req,res)=>{
    let data = await product.find({ userID: req.body.userID });
    console.log(data);
    res.json(data);
}

// ejs 
const display =  (req,res)=>{
    res.render("signup")
}
const displaylogin =  (req,res)=>{
    res.render("login")
}
const displayproduct =  (req,res)=>{
    res.render("products")
}
const homepage =  (req,res)=>{
    res.render("home")
}

const deletep =async (req,res)=>{
  const data = await product.findByIdAndDelete(req.params.id)
  res.send(data);
}

const userdatas =async (req,res)=>{
  let {id} = req.cookies
  const data = await user.findById(req.cookies.id)
  res.send(data);
}


module.exports = {finddata,updatedata,deletdata , createdata , signup , login , createProduct , findproduct , display , displaylogin , displayproduct , deletep , products , homepage , userdatas}