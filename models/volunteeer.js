const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const volunteerSchema = new mongoose.Schema({
    volname: {
       type : String,
    },
    volemail :{
        type : String,
     },
    volno : {
        type : String,
     },
    voladd :{
        type : String,
     },
    volpassword:{
        type : String,
     },
    volcpassword:{
        type : String,
     },
    volveh:{
        type : String,
     },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]

    });

    //Generating Tokens
// volunteerSchema.methods.generateToken = async function(){
//     try {
//         console.log(this._id)
//         const token = jwt.sign({_id:this._id.toString()}, process.env.SECRET_KEY);
//         this.tokens = this.tokens.concat({token:token});
//         await this.save();
//         return token;
//     } catch (error) {
//         res.send(err);
//         console.log("error");
//     }
    
//     };


//hash for password security
 
volunteerSchema.pre("save", async function(next) {
    if(this.isModified("volpassword")){
 console.log(`volpassword ${this.volpassword}`);
 this.volpassword = await bcrypt.hash(this.volpassword,10);
 console.log(`volpassword ${this.volpassword}`);
this.volcpassword = await bcrypt.hash(this.volpassword,10);
    }
 
});
    const Volunteer = new mongoose.model("Volunteer" ,volunteerSchema);
     module.exports = Volunteer;