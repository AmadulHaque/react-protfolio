import axios from "axios";
import {ErrorToast, SuccessToast} from "../Admin/Helper/FormHelper.js";
import store from "../redux/store/store.js";
import {HideLoader, ShowLoader} from "../redux/slice/settings-slice.js";
import {removeSessions,getToken, setEmail, setOTP, setToken, setUserDetails} from "../Admin/Helper/SessionHelper.js";
import {SetProfile} from "../redux/slice/profile-slice";
import {BaseURL} from "../Admin/Helper/config.js";

const AxiosHeader={headers:{"token":getToken()}}
 
export async function LoginRequest(email,password){
   try {
       store.dispatch(ShowLoader())
       let URL=BaseURL+"/Login";
       let PostBody={"email":email,"password":password}
       let res =await axios.post(URL,PostBody);
       if(res.data['status']=='unauthorized'){
            store.dispatch(HideLoader())
            ErrorToast("Invalid Email or Password")
            return  false;
       }else{
            setToken(res.data['token']);
            setUserDetails(res.data['data'][0]);
            SuccessToast("Login Success")
            store.dispatch(HideLoader())
            return true;
       }

   }
   catch (e) {
       store.dispatch(HideLoader())
       ErrorToast("Invalid Email or Password")
       return  false;
   }
}


export async function RegistrationRequest(email,firstname,lastname,mobile,password,photo){
    try {
        store.dispatch(ShowLoader())
        let URL=BaseURL+"/register";
        let PostBody={email:email,firstname:firstname,lastname:lastname,mobile:mobile,password:password, photo:photo}
        let res=await axios.post(URL,PostBody)
        store.dispatch(HideLoader())
        if(res.status===200){
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
                SuccessToast("Registration Success")
                return true;
            }
        }
        else{
            ErrorToast("Something Went Wrong")
            return  false;
        }
    }
    catch (e) {
        store.dispatch(HideLoader())
        ErrorToast("Something Went Wrong")
        return false;
    }
}

export async function GetProfileDetails(){
    try {
        store.dispatch(ShowLoader())
        let URL=BaseURL+"/ProfileDetails";
        let res=await axios.get(URL,AxiosHeader)
        store.dispatch(HideLoader())
        if(res.status===200){
            store.dispatch(SetProfile(res.data['data'][0]))
        }
        else{
            removeSessions();
            window.location.href="/login";
            ErrorToast("Something Went Wrong")
        }
    }
    catch (e){
        //removeSessions();
        // window.location.href="/login";
        store.dispatch(HideLoader());
        ErrorToast("Something Went Wrong")
    }
}

export async function ProfileUpdateRequest(email,firstname,lastname,mobile,password,photo){
    try {
        store.dispatch(ShowLoader())
        let URL=BaseURL+"/ProfileUpdate";
        let PostBody={email:email,firstname:firstname,lastname:lastname,mobile:mobile,password:password,photo:photo}
        let UserDetails={email:email,firstname:firstname,lastname:lastname,mobile:mobile,photo:photo};
        let res=await axios.post(URL,PostBody,AxiosHeader);
        store.dispatch(HideLoader())
        if(res.status===200){
            SuccessToast("Profile Update Success")
            setUserDetails(UserDetails)
            return true;
        }
        else{
            ErrorToast("Something Went Wrong")
            return  false;
        }
    }
    catch (e){
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
        return false;
    }

}

export async function RecoverVerifyEmailRequest(email){
    try {
        store.dispatch(ShowLoader())
        let URL=BaseURL+"/RecoverVerifyEmail/"+email;
        let res=await axios.get(URL);
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
    }
    catch (e) {
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
        return false;
    }
}

export async function RecoverVerifyOTPRequest(email,OTP){
    try {
        store.dispatch(ShowLoader());
        let URL=BaseURL+"/RecoverVerifyOTP/"+email+"/"+OTP;
        let res=await axios.get(URL);
        store.dispatch(HideLoader())
        if(res.status===200){
            if(res.data['status']==="fail"){
                ErrorToast("Code Verification Fail");
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
    }
    catch (e) {
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader());
        return false;
    }
}

export async function RecoverResetPassRequest(email,OTP,password){
    try {
        store.dispatch(ShowLoader())
        let URL=BaseURL+"/RecoverResetPass";
        let PostBody={email:email,OTP:OTP,password:password};
        let res=await axios.post(URL,PostBody);
        console.log(res)
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
    }
    catch (e) {
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
        return false;
    }
}


export async function authcheck(){
    try {
       
        let URL=BaseURL+"/authcheck";
        let res=await axios.get(URL,AxiosHeader)
        if (res.status==200) {
            console.log(res.status);
            return true;
        }else{
            removeSessions();
            window.location.href="/login";
            ErrorToast("Something Went Wrong")
        }
    }
    catch (e){
        removeSessions();
        window.location.href="/login";
        ErrorToast("Something Went Wrong")
    }
}

