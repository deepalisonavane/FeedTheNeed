 const mongoose = require('mongoose');
const DB = process.env.DATABASE

mongoose.connect(DB,{
useCreateIndex:true,
useNewUrlParser : true,
useUnifiedTopology:true,
useFindAndModify  :false
}).then(()=>{
    
    console.log("hekk")
    

    console.log("CONNECTION SUCCESS")
}).catch(()=>{
    console.log("connection failed")
})


