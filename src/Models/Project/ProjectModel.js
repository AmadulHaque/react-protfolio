const  mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    tile:{type:String},
    name:{type:String},
    image:{type:String},
    video:{type:String},
    client:{type:String},
    languages:{type:String},
    preview:{type:String},
    status:{type:Number,default:1},
    CreatedDate:{type:Date,default:Date.now()}
},{versionKey:false});
const ProjectModel=mongoose.model('projects',DataSchema);
module.exports=ProjectModel