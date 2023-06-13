
const UpdateService= async (Request,PostBody,DataModel) => {
    try{
        let id=Request.params.id;
        let data = await DataModel.updateOne({_id:id},PostBody);
        return {status: "success", data: data}
    }
    catch (error) {
        return {status: "fail", data: error}
    }
}
module.exports=UpdateService