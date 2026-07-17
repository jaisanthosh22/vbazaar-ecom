const mongoose = require('mongoose');
const product = require('../models/productmodels');

//getting all products

const productDetails = async (req,res,next)=>{
   try{
    const keyword = req.query.keyword;
    const products = keyword ? await product.find({
        name: {
                      $regex: keyword,
                      $options: "i"
                  }

    }):await product.find()
    res.json({ success:true ,
               products});
     
   } 
   catch(err){
    console.log(err);
   }    
}

//getting single products

const singleProducts = async(req,res,next)=>{
   try{
      const products = await product.findById(req.params.id);
      res.json({success:true,
      products
   })

   }
   catch(err){
      console.log(err);
   }
   
}

//update products



const updateProducts = async (req, res,next) => {
    try {
        const products = await product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!products) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        res.status(200).json({
            success: true,
            product
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

//delete products



const deleteProducts = async (req, res ,next) => {
    try {
        const products = await product.findByIdAndDelete(req.params.id);

        if (!products) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Product deleted successfully"
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};


const recommendedProducts = async (req, res) => {
    try {
        const products = await product.find().limit(3);

        res.status(200).json({
            success: true,
            products
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    productDetails,
    singleProducts,
    updateProducts,
    deleteProducts,
    recommendedProducts
};