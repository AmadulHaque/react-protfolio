
const CreateService= async (ReqBody ,DataModel) => {
    try{
        let data = await DataModel.create(ReqBody)
        return {status: "success", data: data}
    }
    catch (error) {
        return {status: "fail", data:error}
    }
}
module.exports=CreateService