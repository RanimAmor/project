const Offer = require('../models/offerModel');
const dotenv = require("dotenv").config({ path: "./config/.env"});

exports.plus = (req, res, next) => {
    let { title, price,contactInfo,location,category } = req.body;


      Offer.findOne({title: title })
      .then(offer=>{
          if(offer){
             return res.status(422).json({ errors: [{ offer: "name already exists" }] });
           }
          else {
         const offer = new Offer({
           title: title,
           price: price,
           contactInfo: contactInfo,
           location:location,
           category:category
         });
         console.log("ok")
            offer.save()
             .then(response => {
                res.status(200).json({
                  success: true,
                  result: response
                })
             })
             .catch(err => {
               res.status(500).json({
                  errors: [{ error: err }]
               });
            });
      }
            })

      .catch(err =>{
      res.status(500).json({
     errors: [{ error: 'Something went wrong' }]
     });
      })
      
  
}
exports.getList = async(req,res) => {

     try {
        const response = await Offer.find()
          res.send({message:"here is the list of offers", response})
        } catch (error) {    
            res.send(error)
     } 
   
         
}

exports.getListby = async(req,res) => {

    try {
       const response = await Offer.find({category:req.params.id})
         res.send({message:"here is the list of offers", response})
       } catch (error) {    
           res.send(error)
    } 
  
        
}
exports.getById = async(req,res) => {

    try {
       const response = await Offer.findById(req.params.id)
         res.send({message:"here is the category", response})
       } catch (error) {    
           res.send(error)
    } 
  
        
}