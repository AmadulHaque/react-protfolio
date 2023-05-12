const  mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    year:{type:String},
    tile:{type:String},
    company:{type:String},
    description:{type:String},
    status:{type:Number,default:1},
    CreatedDate:{type:Date,default:Date.now()}
},{versionKey:false});
const ExperienceModel=mongoose.model('experiences',DataSchema);
module.exports=ExperienceModel