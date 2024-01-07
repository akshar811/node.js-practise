const express = require("express");
const connect = require("./config/db");
const router = require("./routes/user.routes");
const cookies = require("cookie-parser");
const jwt = require("jsonwebtoken")
const cors = require("cors");

const app = express();
app.use(cookies());
app.use(cors());

app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.set("views",__dirname + "/views")


app.use(express.json());
app.use("/user",router);

app.listen(8090, () => {
  console.log("listening on port 8090");
  connect();
});
