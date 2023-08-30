const DataModel = require("../../Models/Blog/BlogModel");
const CreateService = require("../../Services/common/CreateService");
const UpdateService = require("../../Services/common/UpdateService");
const ListService = require("../../Services/common/ListService");
const DeleteService = require("../../Services/common/DeleteService");
const DetailsByIDService = require("../../Services/common/DetailsByIDService");
const formidable = require('formidable');
const fs = require('fs');
const { log } = require("console");
const mongoose = require("mongoose");




exports.CreateBlog=async (req, res) => {
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
        
        const ReqBody = fields;
        files.image.originalFilename = "blog_" + files.image.originalFilename;
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
        ReqBody['image'] = imgPath;

        const Result = await CreateService(ReqBody, DataModel);
        res.status(200).json(Result);
  
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

}

exports.UpdateBlog=async (req, res) => {
    let id=req.params.id;
    let QueryObject={};
    QueryObject['_id']= new mongoose.Types.ObjectId(id);
    let data = await DataModel.findById(QueryObject);

    const img =  data.image;
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
        const ReqBody = fields;
        if (ReqBody.image=="undefined") {
          ReqBody['image'] = img;
        }else{
            files.image.originalFilename = "blog_" + files.image.originalFilename;
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
            ReqBody['image'] = imgPath;
            const filePath  = __dirname + `./../../${img}`;
            fs.unlink(filePath, (err) => {
              if (err) {
                console.log(err);
              }else{
                console.log("img remove Success");
              }
            });
        }
        // console.log(ReqBody);
        const Result = await UpdateService(req, ReqBody, DataModel);
        res.status(200).json(Result);
  
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }





    // let Result=await UpdateService(req,DataModel)
    // res.status(200).json(Result)
}


exports.BlogList=async (req, res) => {
    let SearchRgx = {"$regex": req.params.searchKeyword, "$options": "i"}
    let SearchArray=[{Name: SearchRgx}]
    let Result= await ListService(req,DataModel,SearchArray)
    res.status(200).json(Result)
}


exports.BlogDetailsByID=async (req, res) => {
    let Result= await DetailsByIDService(req,DataModel)
    if (Result.status=='fail') {
        res.status(400).json(Result)
    } else {
        res.status(200).json(Result)

    }
}


exports.DeleteBlog=async (req, res) => {
    let id=req.params.id;
    let QueryObject={};
    QueryObject['_id']= new mongoose.Types.ObjectId(id);
    let data = await DataModel.findById(QueryObject);
    const img =  data.image;
    const filePath  = __dirname + `./../../${img}`;
    fs.unlink(filePath, (err) => {
        if (err) {
        console.log(err);
        }else{
        console.log("img remove Success");
        }
    });
    let Result=await DeleteService(req,DataModel);
    res.status(200).json(Result)
}
