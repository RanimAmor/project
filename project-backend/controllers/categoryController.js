const Category = require('../models/categoryModel');
const dotenv = require("dotenv").config({ path: "./config/.env"});

exports.plus = (req, res, next) => {
    let { name, description,image } = req.body;


      Category.findOne({name: name })
      .then(category=>{
          if(category){
             return res.status(422).json({ errors: [{ category: "name already exists" }] });
           }
          else {
         const category = new Category({
           name: name,
           description: description,
           image: image
         });
         console.log("ok")
            category.save()
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
        const response = await Category.find()
          res.send({message:"here is the list of categories", response})
        } catch (error) {    
            res.send(error)
     } 
   
         
}

exports.getById = async(req,res) => {

    try {
       const response = await Category.findById(req.params.id)
         res.send({message:"here is the category", response})
       } catch (error) {    
           res.send(error)
    } 
  
        
}