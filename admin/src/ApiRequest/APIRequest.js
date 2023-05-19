import axios from "axios"
import {ErrorToast, SuccessToast} from "../Helper/FormHelper";
import store from '../redux/store/store';
import {HideLoader, ShowLoader} from "../redux/state-slice/settings-slice";
import  {getToken, setEmail, setOTP, setToken, setUserDetails} from "../Helper/SessionHelper";
import {SetCanceledTask, SetCompletedTask, SetNewTask, SetProgressTask} from "../redux/state-slice/task-slice";
import {SetALLProduct,SetTotal} from "../redux/state-slice/product-slice";
import {SetProfile} from "../redux/state-slice/profile-slice";
import {SetSummary} from "../redux/state-slice/summary-slice";
import {BaseURl} from "../Helper/config";

 const AxiosHeader ={headers:{"token":getToken()}};


// create product
export function NewProductRequest(title,description,photo,price,qty){
    store.dispatch(ShowLoader())
    let URL=BaseURl+"/create-product";
    let PostBody={
        "title":title,
        "description":description,
        "photo":photo,
        "price":price,
        "qty":qty,
        "status":"New"
    }

    return axios.post(URL,PostBody,AxiosHeader).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){
            SuccessToast("New Product Created")
            return true;
        }
        else{
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
        return false;
    })
}

// all products
export function GetProductList(pageNo,perPage,searchKey){
    store.dispatch(ShowLoader())
    let URL=BaseURl+"products/"+pageNo+"/"+perPage+"/"+searchKey;
    axios.get(URL,AxiosHeader).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){
            store.dispatch(SetALLProduct(res.data['data']))
            store.dispatch(SetTotal(res.data['total']))
        }
        else{
        }
    }).catch((err)=>{
        store.dispatch(HideLoader())
    });
}


// User Register
export function RegisterRequest(firstname,lastname,email,mobile,photo,password){
    store.dispatch(ShowLoader());
    let URl =BaseURl+"register";
    let PostBody = {
        firstname:firstname,
        lastname:lastname,
        email:email,
        mobile:mobile,
        photo:photo,
        password:password
    };
    return  axios.post(URl,PostBody).then((res)=>{
        if(res.status===200){
            store.dispatch(HideLoader());
            if(res.data['status']==="fail"){
                if(res.data['data']['keyPattern']['email']===1){
                    ErrorToast("Email Already Exist")
                    return false;
                }
                else{
                    ErrorToast("Something Went Wrong")
                    return false;
                }
            }
            else {
                SuccessToast("Registration Success");
                return true;
            }
        }
        else{
            ErrorToast("Something Went Wrong")
            return  false;
        }
    }).catch((err)=>{
        store.dispatch(HideLoader());
        return false;
    })
}
// User login
export function LoginRequest(email,password){
    store.dispatch(ShowLoader())
    let URL=BaseURl+"/login";
    let PostBody={"email":email,"password":password}
    return axios.post(URL,PostBody).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){
            setToken(res.data['token']);
            setUserDetails(res.data['data']);
            SuccessToast("Login Success")
            return true;
        }
        else{
            ErrorToast("Invalid Email or Password")
            return  false;
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
        return false;
    });
}

// create task
export function NewTaskRequest(title,description){
    store.dispatch(ShowLoader())
    let URL=BaseURl+"/create-task";
    let PostBody={"title":title,"description":description,status:"New"}

    return axios.post(URL,PostBody,AxiosHeader).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){
            SuccessToast("New Task Created")
            return true;
        }
        else{
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
        return false;
    })
}

// Get Task By Status
export function TaskListByStatus(Status){
    store.dispatch(ShowLoader())
    let URL=BaseURl+"/list-task/"+Status;
     axios.get(URL,AxiosHeader).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){
            if(Status==="New"){
                // console.log(res.data['data'])
                store.dispatch(SetNewTask(res.data['data']));
            }
            else if(Status==="Completed"){
                store.dispatch(SetCompletedTask(res.data['data']))
            }
            else if(Status==="Canceled"){
                store.dispatch(SetCanceledTask(res.data['data']))
            }
            else if(Status==="Progress"){
                store.dispatch(SetProgressTask(res.data['data']))
            }
        }
        else{
            ErrorToast("Something Went Wrong")
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
    });
}

// Summary
export function SummaryRequest(){
    store.dispatch(ShowLoader())
    let URL=BaseURl+"/list-task-count";
    axios.get(URL,AxiosHeader).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){
            store.dispatch(SetSummary(res.data['data']))
        }
        else{
            ErrorToast("Something Went Wrong")
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
    });
}

// delete Task
export function DeleteRequest(id){
    store.dispatch(ShowLoader())
    let URL=BaseURl+"/delete-task/"+id;
    return axios.get(URL,AxiosHeader).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){
            SuccessToast("Delete Successful")
            return true;
        }
        else{
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
        return false;
    });
}

// update task
export function UpdateStatusRequest(id,status){
    store.dispatch(ShowLoader())
    let URL=BaseURl+"/update-task/"+id+"/"+status;
    return axios.get(URL,AxiosHeader).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){
            SuccessToast("Status Updated")
            return true;
        }
        else{
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
        return false;
    });
}

export function GetProfileDetails(){
    store.dispatch(ShowLoader())
    let URL=BaseURl+"/ProfileDetails";
    axios.get(URL,AxiosHeader).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){
            store.dispatch(SetProfile(res.data['data'][0]))
        }
        else{
            ErrorToast("Something Went Wrong")
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
    });
}

export function ProfileUpdateRequest(newForm){
    store.dispatch(ShowLoader())
    let URL=BaseURl+"/ProfileUpdate";
    return axios.post(URL,newForm,AxiosHeader).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){
            SuccessToast("Profile Update Success")
            let UserDetails=[{email:res.data['data']['email'],firstname:res.data['data']['firstname'],lastname:res.data['data']['lastname'],mobile:res.data['data']['mobile'],photo:res.data['data']['photo']}];
            setUserDetails(UserDetails)
            return true;
        }
        else{
            ErrorToast("Something Went Wrong")
            return  false;
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
        return false;
    });
}

// Recover Password Step 01 Send OTP
export function RecoverVerifyEmailRequest(email){
    store.dispatch(ShowLoader())
    let URL=BaseURl+"/RecoverVerifyEmail/"+email;
    return axios.get(URL).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){
            if(res.data['status']==="fail"){
                ErrorToast("No user found");
                return false;
            }
            else{
                setEmail(email)
                SuccessToast("A 6 Digit verification code has been sent to your email address. ");
                return true;
            }
        }
        else{
            ErrorToast("Something Went Wrong");
            return false;
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
        return false;
    });
}
 
// Recover Password Step 02 Verify OTP
export function RecoverVerifyOTPRequest(email,OTP){
    store.dispatch(ShowLoader())
    let URL=BaseURl+"/RecoverVerifyOTP/"+email+"/"+OTP;
    return axios.get(URL).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){
            if(res.data['status']==="fail"){
                ErrorToast(res.data['data']);
                return false;
            }
            else{
                setOTP(OTP)
                SuccessToast("Code Verification Success");
                return true;
            }
        }
        else{
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
        return false;
    });
}

// Recover Password Step 03 Reset Pass
export function RecoverResetPassRequest(email,OTP,password){
    store.dispatch(ShowLoader())
    let URL=BaseURl+"/RecoverResetPass";
    let PostBody={email:email,OTP:OTP,password:password}

    return axios.post(URL,PostBody).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){

            if(res.data['status']==="fail"){
                ErrorToast(res.data['data']);
                return false;
            }
            else{
                setOTP(OTP)
                SuccessToast("NEW PASSWORD CREATED");
                return true;
            }
        }
        else{
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
        return false;
    });

}
