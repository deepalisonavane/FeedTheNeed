const jwt = require("jsonwebtoken");

const Register = require("../models/registerdata");

const auth = async (req, res, next) =>{
    try {
        const token = req.cookies.jwt;
        const verifyUser = jwt.verify(token,process.env.SECRET_KEY);
        console.log(verifyUser);
        next();
    } catch (error) {
    //  res.send(`Please Register OR login First`);
     res.render("error");

    }
}

module.exports = auth;