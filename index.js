const express = require('express');
const app = express();
require('dotenv').config()
const cors = require('cors');
const vehicle_data = require('./dummyData.json');

app.use(cors());
app.use(express.json())

// Api to fetch vehicle route data
app.get('/current_location',async(req,res)=>{  
    try{
        res.json({success:true,vehicle_data});
    }catch(err){
        console.log('Something went wrong',err);
    }
})
const port = process.env.PORT || 3000;
app.listen(port,() =>{
    console.log(`Server listening on port ${port}`);
})