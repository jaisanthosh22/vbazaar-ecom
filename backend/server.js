const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const mongodb= require('./config/database')
const cors = require('cors')
const productroutes = require('../backend/routes/productRoutes')


dotenv.config();

//middlewares
app.use(express.json());
app.use(cors());
app.use('/api/v1',productroutes);

mongodb();


const port = process.env.PORT|| 5000;

app.listen(port,()=>console.log(`port is running at ${port}`));
