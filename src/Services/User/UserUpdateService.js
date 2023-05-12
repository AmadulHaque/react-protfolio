const UserUpdateService = async (Request,DataModel) =>{
    try {
        let data = await DataModel.updateOne({email:Request.headers['email']},Request.body)
        return {status:"Success",data:data}
    }catch (e) {
        return {status:"fail",data:e.toString()}
    }
}
module.exports = UserUpdateService;