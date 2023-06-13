import axios from "axios"
import {ErrorToast, SuccessToast} from "../Helper/FormHelper";
import store from '../redux/store/store';
import {HideLoader, ShowLoader} from "../redux/state-slice/settings-slice";
import  {getToken} from "../Helper/SessionHelper";
import {BaseURl} from "../Helper/config";
import {SetProjectList, SetProjectTotal,ProjectDetailsValue} from "../redux/state-slice/project-slice";
 const AxiosHeader ={headers:{"token":getToken()}};


export async function ListRequest(pageNo, perPageKey, searchKeyword) {
    try {
        store.dispatch(ShowLoader())
        let URL = BaseURl+"/ProjectList/"+pageNo+"/"+perPageKey+"/"+searchKeyword;
        const result = await axios.get(URL,AxiosHeader)
        store.dispatch(HideLoader())
        if (result.status === 200 && result.data['status'] === "success") {
            if (result.data['data'][0]['Rows'].length > 0) {
                store.dispatch(SetProjectList(result.data['data'][0]['Rows']))
                store.dispatch(SetProjectTotal(result.data['data'][0]['Total'][0]['count']))
            } else {
                store.dispatch(SetProjectList([]))
                store.dispatch(SetProjectTotal(0))
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


export async function CreateRequest(PostBody) {
    try {
        store.dispatch(ShowLoader())
        let URL = BaseURl+"/CreateProject"
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


export async function DeleteRequest(ObjectID) {
    try {
        store.dispatch(ShowLoader())
        let URL = BaseURl+"/DeleteProject/"+ObjectID;
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
        let URL = BaseURl+"/ProjectDetailsByID/"+ObjectID;
        const result = await axios.get(URL,AxiosHeader)
        store.dispatch(HideLoader())
        if (result.status === 200 && result.data['status'] === "success") {
            let data =result.data['data'][0];
            store.dispatch(ProjectDetailsValue(data));
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

export async function UpdateRequest(PostBody,ObjectID) {
    try {
        store.dispatch(ShowLoader())
        let URL = BaseURl+"/UpdateProject/"+ObjectID;
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