const mongoose = require('mongoose');
let userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone:String,
  password:String,
  role: {
    type: String,  
    enum : ['user', 'service provider'], 
    default: 'user'   
  }
},
  {
    timestamps: true,
    collection: 'users'
 }
  
 )
module.exports = mongoose.model('User', userSchema)
