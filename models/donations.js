const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
        donar: String,
        fooditems :String,
        quantity : String,
        email :String,
        contactno :Number,
        meetingpoint : String,
        expirydate :Date,
        foodtype: String,
            img:{
                data:Buffer,
                contentType :String
            }
        
    
    })


    const Donation = new mongoose.model("Donotion" ,foodSchema);
     module.exports = Donation;
