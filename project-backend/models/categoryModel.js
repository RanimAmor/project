let mongoose = require('mongoose')
let categorySchema = new mongoose.Schema({
  name: String,
  description:String, 
  image:String
})
module.exports = mongoose.model('Category', categorySchema)