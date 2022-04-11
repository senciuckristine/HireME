const admins = require("../models/admin.model");
const bcrypt = require("bcrypt");
const ErrorResponse = require("../utils/errorResponse");
exports.login=async(req,res,next) => {
    const {username,password} = req.body;

    if(!username || !password){
        return next(new ErrorResponse("Please provide an email and password", 400));
    }
    try{
        const admin = await admins.findOne({username}).select("+password");

        if(!admin){
            return next(new ErrorResponse("Invalid username", 401));
        }
        const isMatch = await admin.matchPasswords(password);
        if(!isMatch){
            return next(new ErrorResponse("Invalid password", 401));

        }
       return res.status(200).json({
            success:true,
            token:"tr34f3443fc",
        });
    }catch(error){
        next(error);
    }
};