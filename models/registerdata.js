const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const donarSchema = new mongoose.Schema({
    firstname:{
        type:String,
    
    },
    email:{
        type:String,
        unique:true
    },
    phoneno:{
        type:Number,
        unique:true,
    },
    password:{
        type:String,
    },
    cpassword :{
        type:String,
    },
    tokens:[{
        token:{
            type:String,
        }
    }]
})

//Generating Tokens
donarSchema.methods.generateToken = async function(){
try {
    console.log(this._id)
    const token = jwt.sign({_id:this._id.toString()}, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({token:token});
    await this.save();
    return token;
} catch (error) {  
    res.send(err);
    console.log("error");
}

};

 //hash for password security
 
donarSchema.pre("save", async function(next) {
    if(this.isModified("password")){
 console.log(`password ${this.password}`);
 this.password = await bcrypt.hash(this.password,10);
 console.log(`password ${this.password}`);
this.cpassword = await bcrypt.hash(this.password,10);
    }
 
});


//collections

 const Register = new mongoose.model("Register" ,donarSchema);
 module.exports = Register;

//  const Donation = new mongoose.model("donotion" ,donarSchema);
//  module.exports = Donation;



 