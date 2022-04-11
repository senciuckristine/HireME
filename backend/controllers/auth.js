const admins = require("../models/admin.model");
const bcrypt = require("bcrypt");
exports.login=async(req,res,next) => {
    const {username,password} = req.body;

    if(!username || !password){
      return  res.status(400).json({
            success:false, error:"please provide username and password!"
        })
    }
    try{
        const admin = await admins.findOne({username}).select("+password");

        if(!admin){
            return res.status(404).json({success:false, error:"invalid username!"})
        }
        const isMatch = await admin.matchPasswords(password);
        if(!isMatch){
           return  res.status(404).json({success:false, error:"invalid password"})

        }
       return res.status(200).json({
            success:true,
            token:"tr34f3443fc",
        });
    }catch(error){
       return res.status(500).json({
           success: false,error: error.message
       });
    }
};