let mongoose = require('mongoose')
let reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
    },
Comment:String,
Rate:Number, 
Offer:{
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Offer'
  },  
})
module.exports = mongoose.model('Review', reviewSchema)