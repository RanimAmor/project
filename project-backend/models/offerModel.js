let mongoose = require('mongoose')
let offerSchema = new mongoose.Schema({
 
title:String,
price:String, 
contactInfo:String,
location: String,
category:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
    },

})
module.exports = mongoose.model('Offer', offerSchema)