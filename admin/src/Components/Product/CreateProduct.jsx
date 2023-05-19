import React,{useRef} from 'react';
import MasterLayout from "../../Components/masterLayout/MasterLayout";
import {getBase64,ErrorToast, IsEmail, IsEmpty} from "../../Helper/FormHelper";
import {NewProductRequest} from "../../ApiRequest/APIRequest";
import {useNavigate} from "react-router-dom";



const CreateProduct = () => {
    let titleRef,descRef,priceRef,qtyRef,productImgView ,productImgRef=useRef();
    const ProductImage = () => {
        let ImgFile = productImgRef.files[0];
        getBase64(ImgFile).then((base64Img)=>{
            productImgView.src=base64Img;
        })
    }
    let navigate=useNavigate();

    const PostProduct = () =>{
        let title=titleRef.value;
        let description=descRef.value;
        let qty= qtyRef.value;
        let price= priceRef.value;
        let photo=productImgView.src;
        if(IsEmpty(title)){
            ErrorToast(" Title Required !")
        }else if(IsEmpty(description)){
            ErrorToast("Description Required !")
        }else if(IsEmpty(qty)){
            ErrorToast("Quantity Required !")
        }else if(IsEmpty(price)){
            ErrorToast("Price  Required !")
        }else if(IsEmpty(photo)){
            ErrorToast("photo Required!")
        }
        else{
            NewProductRequest(title,description,photo,price,qty).then((result)=>{
            if(result===true){
                navigate("/products");
            }
        })

        }
        
    }
    return (
    <div>
        <MasterLayout>
            <div className="row  justify-content-center">
                <div className="col-md-10 col-lg-10 center-screen">
                    <div className="card animated fadeIn w-100 p-3">
                        <div className="card-body">
                            <h4>Create Product</h4>
                            <hr/>
                            <div className="container-fluid m-0 p-0">
                                <div className="row m-0 p-0">
                                    <div className="col-md-4 p-2">
                                        <label>Product Title</label>
                                        <input ref={(input)=>titleRef=input}   placeholder="Title" className="form-control animated fadeInUp" type="text"/>
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>Product Description</label>
                                        <input ref={(input)=>descRef=input}  placeholder="Description" className="form-control animated fadeInUp" type="text"/>
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>Product Quntity</label>
                                        <input ref={(input)=>qtyRef=input}  placeholder="Quntity" className="form-control animated fadeInUp" type="text"/>
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>Product Price</label>
                                        <input ref={(input)=>priceRef=input}  placeholder="Price" className="form-control animated fadeInUp" type="text"/>
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>Thumbnail Image</label>
                                        <input onChange={ProductImage} ref={(input)=>productImgRef=input}  className="form-control animated fadeInUp" type="file"/>
                                    </div>
                                    <img  ref={(input)=>productImgView=input} className="icon-nav-img-lg"  alt=""/>

                                </div>
                                <div lassName="row mt-2 p-0">
                                    <div className="col-md-4 p-2">
                                        <button onClick={PostProduct} className="btn mt-3 w-100 float-end btn-primary animated fadeInUp">Complete</button>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </MasterLayout>
    </div>
    );
};

export default CreateProduct;