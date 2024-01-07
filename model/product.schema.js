const mongoose = require('mongoose');

const productschema = new mongoose.Schema({
    title: String,
    description: String,
    img : String,
    userID : {type : mongoose.Schema.Types.ObjectId, ref: "user"}
})

const product = mongoose.model('Product', productschema)
module.exports = product