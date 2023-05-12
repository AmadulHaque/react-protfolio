const express =require("express");
const router = express.Router();
const path= require('path');
const fs = require('fs');
const AuthVerifyMiddleware =require('../Middleware/AuthverifyMiddleware');

const UsersController=require("../Controllers/Users/UserController");
const SkillsController=require("../Controllers/Skills/SkillsController");
const ExperienceController =require("../Controllers/Experiences/ExperienceController");
const ProjectController =require("../Controllers/Projects/ProjectController");
const ContactController =require("../Controllers/Contact/ContactController");
const BlogController =require("../Controllers/Blogs/BlogController");
const DashboardController =require("../Controllers/Dashboard/DashboardController");


// auth check & test
router.get("/auth-check",AuthVerifyMiddleware, (req, res) => {
  res.json({ status: "ok" });
});
router.get("/test", (req, res) => {
	res.send("Test Success");
});



// User Profile 
router.post("/register",UsersController.Registration);
router.post("/Login",UsersController.Login);
router.post("/ProfileUpdate",AuthVerifyMiddleware,UsersController.ProfileUpdate);
router.get("/ProfileDetails",AuthVerifyMiddleware,UsersController.ProfileDetails);
router.get("/RecoverVerifyEmail/:email",UsersController.RecoverVerifyEmail);
router.get("/RecoverVerifyOTP/:email/:otp",UsersController.RecoverVerifyOTP);
router.post("/RecoverResetPass",UsersController.RecoverResetPass);


// Skills
router.post("/CreateSkill",AuthVerifyMiddleware,SkillsController.CreateSkills);
router.post("/UpdateSkill/:id",AuthVerifyMiddleware,SkillsController.UpdateSkills);
router.get("/SkillsList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,SkillsController.SkillsList);
router.get("/SkillsDropDown",AuthVerifyMiddleware,SkillsController.SkillsDropDown);
router.get("/DeleteSkill/:id",AuthVerifyMiddleware,SkillsController.DeleteSkills);
router.get("/SkillDetailsByID/:id",AuthVerifyMiddleware,SkillsController.SkillsDetailsByID);

// Experience
router.post("/CreateExperience",AuthVerifyMiddleware,ExperienceController.CreateExperience);
router.post("/UpdateExperience/:id",AuthVerifyMiddleware,ExperienceController.UpdateExperience);
router.get("/ExperienceList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,ExperienceController.ExperienceList);
router.get("/DeleteExperience/:id",AuthVerifyMiddleware,ExperienceController.DeleteExperience);
router.get("/ExperienceDetailsByID/:id",AuthVerifyMiddleware,ExperienceController.ExperienceDetailsByID);

// Project
router.post("/CreateProject",AuthVerifyMiddleware,ProjectController.CreateProject);
router.post("/UpdateProject/:id",AuthVerifyMiddleware,ProjectController.UpdateProject);
router.get("/ProjectList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,ProjectController.ProjectList);
router.get("/DeleteProject/:id",AuthVerifyMiddleware,ProjectController.DeleteProject);
router.get("/ProjectDetailsByID/:id",AuthVerifyMiddleware,ProjectController.ProjectDetailsByID);

// Contact
router.post("/CreateContact",AuthVerifyMiddleware,ContactController.CreateContact);
router.post("/UpdateContact/:id",AuthVerifyMiddleware,ContactController.UpdateContact);
router.get("/ContactList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,ContactController.ContactList);
router.get("/DeleteContact/:id",AuthVerifyMiddleware,ContactController.DeleteContact);
router.get("/ContactDetailsByID/:id",AuthVerifyMiddleware,ContactController.ContactDetailsByID);

// Blog
router.post("/CreateBlog",AuthVerifyMiddleware,BlogController.CreateBlog);
router.post("/UpdateBlog/:id",AuthVerifyMiddleware,BlogController.UpdateBlog);
router.get("/BlogList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,BlogController.BlogList);
router.get("/DeleteBlog/:id",AuthVerifyMiddleware,BlogController.DeleteBlog);
router.get("/BlogDetailsByID/:id",AuthVerifyMiddleware,BlogController.BlogDetailsByID);

// Summery
router.get("/contactTotal",AuthVerifyMiddleware,DashboardController.ContactTotal);
router.get("/blogTotal",AuthVerifyMiddleware,DashboardController.BlogTotal);
router.get("/projectTotal",AuthVerifyMiddleware,DashboardController.ProjectTotal);
router.get("/skillTotal",AuthVerifyMiddleware,DashboardController.SkillTotal);
router.get("/ExperienceTotal",AuthVerifyMiddleware,DashboardController.ExperienceTotal);
router.get("/visitorTotal",AuthVerifyMiddleware,DashboardController.VisitorTotal);

module.exports = router;