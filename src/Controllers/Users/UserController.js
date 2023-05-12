const DataModel = require("../../Models/Users/UserModel");
const OTPSModel = require("../../Models/Users/OTPModel");
const UserCreateService = require("../../Services/User/UserCreateService");
const UserLoginService = require("../../Services/User/UserLoginService");
const UserUpdateService = require("../../Services/User/UserUpdateService");
const UserDetailsService = require("../../Services/User/UserDetailsService");
const UserResetPassService = require("../../Services/User/UserRestPassService");
const UserVerifyOtpService = require("../../Services/User/UserVerifyOtpService");
const UserVerifyEmailService = require("../../Services/User/UserVerifyEmailService");


exports.Registration=async (req, res) => {
    let Result=await UserCreateService(req,DataModel)
    res.status(200).json(Result)
}

exports.Login=async(req,res)=>{
    let Result=await UserLoginService(req,DataModel)
    res.status(200).json(Result)
}

exports.ProfileUpdate=async (req, res) => {
    let Result=await UserUpdateService(req,DataModel)
    res.status(200).json(Result)
}

exports.ProfileDetails=async (req, res) => {
    let Result=await UserDetailsService(req,DataModel)
    res.status(200).json(Result)
}


exports.RecoverVerifyEmail=async (req,res)=>{
    let Result=await UserVerifyEmailService(req,DataModel)
    res.status(200).json(Result)
}


exports.RecoverVerifyOTP=async (req,res)=>{
    let Result=await UserVerifyOtpService(req,OTPSModel)
    res.status(200).json(Result)
}

exports.RecoverResetPass=async (req,res)=>{
    let Result=await UserResetPassService(req,DataModel)
    res.status(200).json(Result)
}
