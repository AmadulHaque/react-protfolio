const  mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    tile:{type:String},
    Name:{type:String,unique:true},
    condition:{type:String},
    percent:{type:String},
    status:{type:Number,default:1},
    CreatedDate:{type:Date,default:Date.now()}
},{versionKey:false});
const SkillModel=mongoose.model('skills',DataSchema);
module.exports=SkillModel