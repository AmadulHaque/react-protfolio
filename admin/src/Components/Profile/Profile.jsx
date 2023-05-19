import React, {useEffect, useRef} from 'react';
import {GetProfileDetails,ProfileUpdateRequest} from "../../ApiRequest/APIRequest";
import {useSelector} from "react-redux";
import {ErrorToast, IsEmail, IsEmpty, IsMobile} from "../../Helper/FormHelper";
import {useNavigate} from "react-router-dom";
import {BaseURl} from "../../Helper/config";

const Profile = () => {

    let emailRef,firstNameRef,lastNameRef,mobileRef,passwordRef,userImgRef,userImgView=useRef();

    useEffect(()=>{
        GetProfileDetails();
    },[])


    const ProfileData = useSelector((state) => state.profile.value);



    let navigate=useNavigate();
    
    
    const PreviewImage = () => {
        let ImgFile = userImgRef.files[0];
        userImgView.src=URL.createObjectURL(ImgFile);
    }


    
    const UpdateMyProfile = () => {
        let email=emailRef.value;
        let firstname=firstNameRef.value;
        let lastname=lastNameRef.value;
        let mobile=mobileRef.value;
        let password= passwordRef.value;
        let photo= userImgRef.files[0];
        if(IsEmail(email)){
            ErrorToast("Valid Email Address Required !")
        }
        else if(IsEmpty(firstname)){
            ErrorToast("First Name Required !")
        }
        else if(IsEmpty(lastname)){
            ErrorToast("Last Name Required !")
        }
        else if(!IsMobile(mobile)){
            ErrorToast("Valid Mobile  Required !")
        }
        else if(IsEmpty(password)){
            ErrorToast("Password Required !")
        }
        else{
            const config = { headers: { "Content-Type": "multipart/form-data" } };
            const newForm = new FormData();
            newForm.append("image", photo);
            newForm.append("firstname", firstname);
            newForm.append("lastname", lastname);
            newForm.append("mobile", mobile);
            newForm.append("email", email);
            newForm.append("password", password);

            ProfileUpdateRequest(newForm).then((result)=>{
                if(result===true){
                    navigate("/");
                }
            })
            // ProfileUpdateRequest(email,firstname,lastname,mobile,password,photo).then((result)=>{
            //     if(result===true){
            //         navigate("/");
            //     }
            // })
        }
    }







    return (
        <>
          <div className="row d-flex justify-content-center">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="container-fluid">
                                <img  ref={(input)=>userImgView=input} className="icon-nav-img-lg" src={BaseURl+ProfileData['photo']} alt=""/>
                                <hr/>
                                <div className="row">
                                    <div className="col-4 p-2">
                                        <label>Profile Picture</label>
                                        <input onChange={PreviewImage}  ref={(input)=>userImgRef=input} placeholder="User Email" className="form-control animated fadeInUp" type="file"/>
                                    </div>
                                    <div className="col-4 p-2">
                                        <label>Email Address</label>
                                        <input key={Date.now()} defaultValue={ProfileData['email']}  readOnly={true}  ref={(input)=>emailRef=input} placeholder="User Email" className="form-control animated fadeInUp" type="email"/>
                                    </div>
                                    <div className="col-4 p-2">
                                        <label> Name</label>
                                        <input  key={Date.now()} defaultValue={ProfileData['firstname']} ref={(input)=>firstNameRef=input} placeholder="First Name" className="form-control animated fadeInUp" type="text"/>
                                    </div>
                                    <div className="col-4 p-2">
                                        <label>User Name</label>
                                        <input key={Date.now()} defaultValue={ProfileData['lastname']}  ref={(input)=>lastNameRef=input} placeholder="Last Name" className="form-control animated fadeInUp" type="text"/>
                                    </div>
                                    <div className="col-4 p-2">
                                        <label>Mobile</label>
                                        <input key={Date.now()} defaultValue={ProfileData['mobile']} ref={(input)=>mobileRef=input} placeholder="Mobile" className="form-control animated fadeInUp" type="mobile"/>
                                    </div>
                                    <div className="col-4 p-2">
                                        <label>Password</label>
                                        <input key={Date.now()} defaultValue={ProfileData['password']}  ref={(input)=>passwordRef=input} placeholder="User Password" className="form-control animated fadeInUp" type="password"/>
                                    </div>
                                    <div className="col-4 p-2">
                                        <button onClick={UpdateMyProfile}  className="btn w-100 float-end btn-primary animated fadeInUp">Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    );
};

export default Profile;