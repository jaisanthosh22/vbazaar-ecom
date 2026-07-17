const express = require('express');
const router= express.Router();

const {
    productDetails,
    recommendedProducts,
    singleProducts,
    updateProducts,
    deleteProducts,
    
    
} = require("../controllers/productController");


// const productroutes = ()=>{
//         route.get('/product',productdetails)
// }

router.get('/products',productDetails);
router.get('/products/recommend',recommendedProducts);
router.get('/products/:id',singleProducts);
router.put('/products/:id',updateProducts);
router.delete('/products/:id',deleteProducts);



module.exports= router;



