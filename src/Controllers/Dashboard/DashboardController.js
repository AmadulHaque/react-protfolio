const ContactModel = require("../../Models/Contact/ContactModel");
const BlogModel = require("../../Models/Blog/BlogModel");
const SkillModel = require("../../Models/Skills/SkillModel");
const ProjectModel = require("../../Models/Project/ProjectModel");
const ExperienceModel = require("../../Models/Experience/ExperienceModel");


const SummaryService = require("../../Services/summary/SummaryService");

exports.ContactTotal=async (req, res) => {
    let status = 0;
    let Result = await SummaryService(req,ContactModel,status);
    res.status(200).json(Result);
}
exports.BlogTotal=async (req, res) => {
    let status = 1;
    let Result = await SummaryService(req,BlogModel,status);
    res.status(200).json(Result);
}
exports.ProjectTotal=async (req, res) => {
    let status = 1;
    let Result = await SummaryService(req,ProjectModel,status);
    res.status(200).json(Result);
}
exports.SkillTotal=async (req, res) => {
    let status = 1;
    let Result = await SummaryService(req,SkillModel,status);
    res.status(200).json(Result);
}
exports.ExperienceTotal=async (req, res) => {
    let status = 1;
    let Result = await SummaryService(req,ExperienceModel,status);
    res.status(200).json(Result);
}
exports.VisitorTotal=async (req, res) => {
    let total = 230;
    res.status(200).json({status: "success", data:{
        "status": "success",
        "data": [
            {
                "Total":total
            }
        ]
    }});
}