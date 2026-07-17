const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    "name":String,
    "price":String,
    "description":String,
    "images":[{
        images:String
    }    
    ],
    "ratings":String,
    "stocks":String,
    "no of reviews":String,
    "createdAt":String
}
)

const productModels = mongoose.model('products',productSchema);

module.exports=productModels;