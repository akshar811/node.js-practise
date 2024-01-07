const {Router} = require("express");
const { finddata, createdata, updatedata, deletdata, signup, login, createProduct, findproduct, display, displaylogin, displayproduct, deletep, products, homepage, userdatas } = require("../controllers/user.controller");
const Auth = require("../middlewares/auth");

const router = Router();

router.get("/",finddata)

router.post("/create",createdata)

router.patch("/update/:id",updatedata)

router.delete("/delete/:id",deletdata)

router.post("/signup",signup)

router.post("/login",login)

//product

router.post("/product",createProduct);

router.get("/all",findproduct);

// ejs 
router.get("/signup",display)
router.get("/login",displaylogin)
router.get("/products",Auth,displayproduct);
router.delete("/delete/:id",deletep);

router.get("/products",products);

router.get("/home",homepage);
router.get("/userdata",userdatas)

module.exports = router