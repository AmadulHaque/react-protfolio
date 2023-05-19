const DataModel = require("../../Models/Users/UserModel");
const OTPSModel = require("../../Models/Users/OTPModel");
const UserCreateService = require("../../Services/User/UserCreateService");
const UserLoginService = require("../../Services/User/UserLoginService");
const UserUpdateService = require("../../Services/User/UserUpdateService");
const UserDetailsService = require("../../Services/User/UserDetailsService");
const UserResetPassService = require("../../Services/User/UserRestPassService");
const UserVerifyOtpService = require("../../Services/User/UserVerifyOtpService");
const UserVerifyEmailService = require("../../Services/User/UserVerifyEmailService");
const formidable = require('formidable');
const fs = require('fs');



exports.Registration=async (req, res) => {
    let Result=await UserCreateService(req,DataModel)
    res.status(200).json(Result)
}

exports.Login=async(req,res)=>{
    let Result=await UserLoginService(req,DataModel)
    res.status(200).json(Result)
}


exports.ProfileUpdate = async (req, res) => {
    const form = formidable({ multiples: true });
    try {
      const { fields, files } = await new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
            if (err) {
                reject(err);
            } else {
                resolve({ fields, files });
            }
        });
      });
  
        files.image.originalFilename = "profile_" + files.image.originalFilename;
        const newpath = __dirname + `./../../uploads/${files.image.originalFilename}`;
        await new Promise((resolve, reject) => {
          fs.copyFile(files.image.filepath, newpath, error => {
            if (error) {
              reject(error);
            } else {
              console.log("File upload success");
              resolve();
            }
          });
        }); 
       let  imgPath = "/uploads/"+files.image.originalFilename;
      const ReqBody = fields;
      ReqBody['photo'] = imgPath;
    //   console.log(ReqBody);
      const Result = await UserUpdateService(req, ReqBody, DataModel);
      res.status(200).json(Result);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
};



// exports.ProfileUpdate=async (req, res) => {
//     const form = formidable({ multiples: true });
//     form.parse(req, (err, fields, files) => {
//         files.image.originalFilename = "profile_" + files.image.originalFilename;
//         var newpath = __dirname + `./../../uploads/${files.image.originalFilename}`
//         fs.copyFile(files.image.filepath,newpath,error =>  {
//             if (error) {
//                 console.log(error);
//             }else{
//                 console.log("file upload Success");
//             }
//         })
//         let ReqBody= fields;
//         ReqBody['photo']=files.image.originalFilename
//         let Result= await UserUpdateService(req,ReqBody,DataModel)
//         res.status(200).json(Result)
//     });
// }

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
