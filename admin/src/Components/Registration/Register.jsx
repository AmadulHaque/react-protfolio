import React, {useRef} from 'react';
import {ErrorToast, IsEmail, IsEmpty, IsMobile} from "../../Helper/FormHelper";
import {RegisterRequest} from "../../ApiRequest/APIRequest"
import {Link, useNavigate} from "react-router-dom";

const Register = () => {
    let emailRef,NameRef,UserNameRef,mobileRef,passwordRef=useRef();
    let navigate = useNavigate();
    const onRegistration = () => {
        let email=emailRef.value;
        let firstname=NameRef.value;
        let lastname=UserNameRef.value;
        let mobile=mobileRef.value;
        let password= passwordRef.value;
        let photo="/uploads/no_image.jpeg"
        if(IsEmail(email)){
            ErrorToast("Valid Email Address Required !")
        }else if(IsEmpty(firstname)){
            ErrorToast("First Name Required !")
        }else if(IsEmpty(lastname)){
            ErrorToast("Last Name Required !")
        }else if(!IsMobile(mobile)){
            ErrorToast("Valid Mobile  Required !")
        }else if(IsEmpty(password)){
            ErrorToast("Password Required!")
        }
        else{
           RegisterRequest(firstname,lastname,email,mobile,photo,password).then((result)=>{
               if(result===true){
                   navigate("/Login");
               }
           })

        }

    }

    return (
        <div>
            

            <div className="row  justify-content-center">
                <div className="col-md-6 col-lg-6 center-screen">
                    <div className="card animated fadeIn w-100 p-3">
                        <div className="card-body">
                            <h4>Sign Up</h4>
                            <hr/>
                            <div className="container m-0 p-0">
                                <div className="row m-0 p-0">
                                    <div className="col-md-12 p-2">
                                        <label>Enter Email Address</label>
                                        <input ref={(input)=>emailRef=input}  placeholder="User Email" className="form-control animated fadeInUp" type="email"/>
                                    </div>
                                    <div className="col-md-12 p-2">
                                        <label>Enter Name</label>
                                        <input ref={(input)=>NameRef=input} placeholder="Enter Name" className="form-control animated fadeInUp" type="text"/>
                                    </div>
                                    <div className="col-md-12 p-2">
                                        <label>Enter UserName</label>
                                        <input ref={(input)=>UserNameRef=input} placeholder="Enter User Name" className="form-control animated fadeInUp" type="text"/>
                                    </div>
                                    <div className="col-md-12 p-2">
                                        <label>Enter Mobile Number</label>
                                        <input ref={(input)=>mobileRef=input} placeholder="Mobile" className="form-control animated fadeInUp" type="number"/>
                                    </div>
                                    <div className="col-md-12 p-2">
                                        <label> Enter Password</label>
                                        <input ref={(input)=>passwordRef=input} placeholder="User Password" className="form-control animated fadeInUp" type="password"/>
                                    </div>

                                </div>
                                <div lassName="row mt-2 p-0 justify-content-center">
                                    <div className="col-md-12 p-2">
                                        <button onClick={onRegistration} className="btn mt-3 w-100 float-end btn-primary animated fadeInUp">Submit</button>
                                    </div>
                                    <hr/>
                                    <div className="float-end mt-3">
                                        <span>
                                            <Link className="text-center ms-3 h6 animated fadeInUp" to="/Login">Sign Up </Link>
                                        </span>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;