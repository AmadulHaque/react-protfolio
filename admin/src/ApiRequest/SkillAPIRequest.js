import axios from "axios"
import {ErrorToast, SuccessToast} from "../Helper/FormHelper";
import store from '../redux/store/store';
import {HideLoader, ShowLoader} from "../redux/state-slice/settings-slice";
import  {getToken} from "../Helper/SessionHelper";
import {BaseURl} from "../Helper/config";
import {SetskillList, SetskillListTotal,skillDetailsValue} from "../redux/state-slice/skill-slice";
 const AxiosHeader ={headers:{"token":getToken()}};


export async function SkillListRequest(pageNo, perPageKey, searchKeyword) {
    try {
        store.dispatch(ShowLoader())
        let URL = BaseURl+"/SkillsList/"+pageNo+"/"+perPageKey+"/"+searchKeyword;
        const result = await axios.get(URL,AxiosHeader)
        store.dispatch(HideLoader())
        if (result.status === 200 && result.data['status'] === "success") {
            if (result.data['data'][0]['Rows'].length > 0) {
                store.dispatch(SetskillList(result.data['data'][0]['Rows']))
                store.dispatch(SetskillListTotal(result.data['data'][0]['Total'][0]['count']))
            } else {
                store.dispatch(SetskillList([]))
                store.dispatch(SetskillListTotal(0))
                ErrorToast("No Data Found")
            }
        } else {
            ErrorToast("Something Went Wrong")
        }
    }
    catch (e) {
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
    }
}


export async function CreateSkillRequest(PostBody) {
    try {
        store.dispatch(ShowLoader())
        let URL = BaseURl+"/CreateSkill"
        const result = await axios.post(URL,PostBody,AxiosHeader)
        store.dispatch(HideLoader())
        if (result.status === 200 && result.data['status'] === "success") {
            SuccessToast("Request Successful");
            return  true;
        }
        else if(result.status === 200 && result.data['status'] === "fail") {
            if(result.data['data']['keyPattern']['Name']===1){
                ErrorToast("Name Already Exist")
                return false;
            }
        }
        else {
            ErrorToast("Request Fail ! Try Again")
            return false;
        }
    }
    catch (e) {
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
        return  false
    }
}


export async function DeleteSkillRequest(ObjectID) {
    try {
        store.dispatch(ShowLoader())
        let URL = BaseURl+"/DeleteSkill/"+ObjectID;
        const result = await axios.get(URL,AxiosHeader)
        store.dispatch(HideLoader())
        if (result.status === 200 && result.data['status'] === "associate") {
            ErrorToast(result.data['data'])
            return  false;
        }
        if (result.status === 200 && result.data['status'] === "success") {
            SuccessToast("Request Successful");
            return  true
        }
        else {
            ErrorToast("Request Fail ! Try Again")
            return false;
        }
    }
    catch (e) {
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
        return  false
    }
}

export async function DetailsGet(ObjectID) {
    try {
        store.dispatch(ShowLoader())
        let URL = BaseURl+"/SkillDetailsByID/"+ObjectID;
        const result = await axios.get(URL,AxiosHeader)
        store.dispatch(HideLoader())
        if (result.status === 200 && result.data['status'] === "success") {
            let data =result.data['data'][0];
            store.dispatch(skillDetailsValue(data));
            return  true;
        } else {
            debugger;
            ErrorToast("Request Fail ! Try Again")
            return false;
        }
    }
    catch (e) {
        debugger;
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
        return  false
    }
}

export async function UpdateSkillRequest(PostBody,ObjectID) {
    try {
        store.dispatch(ShowLoader())
        let URL = BaseURl+"/UpdateSkill/"+ObjectID;
        const result = await axios.post(URL,PostBody,AxiosHeader)
        store.dispatch(HideLoader())
        if (result.status === 200 && result.data['status'] === "success") {
            SuccessToast("Request Successful");
            return  true;
        }
        else if(result.status === 200 && result.data['status'] === "fail") {
            if(result.data['data']['keyPattern']['Name']===1){
                ErrorToast("Name Already Exist")
                return false;
            }
        }
        else {
            ErrorToast("Request Fail ! Try Again")
            return false;
        }
    }
    catch (e) {
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
        return  false
    }
}