
const mongoose = require('mongoose');

const mongodb = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log(`mongodb is connected`);
    }
    catch(err){
        console.log(err);
    }
}
module.exports= mongodb;
