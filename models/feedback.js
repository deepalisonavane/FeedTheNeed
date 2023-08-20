const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
    firstname: String,
    con :String,
    email : String,
    feedback :String,
    
        
    
    })


    const Feedback = new mongoose.model("Feedback" ,feedbackSchema);
     module.exports = Feedback;
