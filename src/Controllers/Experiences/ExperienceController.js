const DataModel = require("../../Models/Experience/ExperienceModel");
const CreateService = require("../../Services/common/CreateService");
const UpdateService = require("../../Services/common/UpdateService");
const ListService = require("../../Services/common/ListService");
const DeleteService = require("../../Services/common/DeleteService");
const DetailsByIDService = require("../../Services/common/DetailsByIDService");

exports.CreateExperience=async (req, res) => {
    let Result= await CreateService(req,DataModel)
    res.status(200).json(Result)
}

exports.UpdateExperience=async (req, res) => {
    let Result=await UpdateService(req,DataModel)
    res.status(200).json(Result)
}


exports.ExperienceList=async (req, res) => {
    let SearchRgx = {"$regex": req.params.searchKeyword, "$options": "i"}
    let SearchArray=[{Name: SearchRgx}]
    let Result= await ListService(req,DataModel,SearchArray)
    res.status(200).json(Result)
}


exports.ExperienceDetailsByID=async (req, res) => {
    let Result= await DetailsByIDService(req,DataModel)
    if (Result.status=='fail') {
        res.status(400).json(Result)
    } else {
        res.status(200).json(Result)

    }
}


exports.DeleteExperience=async (req, res) => {
    let Result=await DeleteService(req,DataModel);
    res.status(200).json(Result)
}
