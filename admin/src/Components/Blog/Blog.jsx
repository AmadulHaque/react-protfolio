import React, {Fragment, useEffect, useRef, useState} from 'react';
import {useSelector} from "react-redux";
import ReactPaginate from "react-paginate";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {ListRequest,CreateRequest,DeleteRequest,DetailsGet,UpdateRequest} from "../../ApiRequest/BlogAPIRequest";
import { FaEdit ,FaTrashAlt,FaRegCheckCircle,FaWindowClose } from "react-icons/fa";
import {ErrorToast, IsEmpty} from "../../Helper/FormHelper";
import {DeleteAlert} from "../../Helper/DeleteAlert";
import store from "../../redux/store/store";
import {OnChangeblogInput} from "../../redux/state-slice/blog-slice";
import {BaseURl} from "../../Helper/config";

const Blog = () => {
    const [modalShow, setModalShow] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let ImageDone,userImgRef,userImgView =useRef();

    let [searchKeyword,setSearchKeyword]=useState("0");
    let [perPage,setPerPage]=useState(5);

    useEffect(()=>{
        (async () => {
            await ListRequest(1, perPage, searchKeyword);
            store.dispatch(OnChangeblogInput({Name:"image",Value:""}));
        })();
    },[])

    let DataList=useSelector((state)=>(state.blog.List));
    let Total=useSelector((state)=>(state.blog.ListTotal))
    const handlePageClick = async (event) => {
        await ListRequest(event.selected + 1, perPage, searchKeyword)
    };
    const searchData=async () => {
        await ListRequest(1, perPage, searchKeyword)
    }
    const perPageOnChange=async (e) => {
        setPerPage(parseInt(e.target.value))
        await ListRequest(1, e.target.value, searchKeyword)
    }
    const searchKeywordOnChange=async (e) => {
        setSearchKeyword(e.target.value)
        if ((e.target.value).length === 0) {
            setSearchKeyword("0")
            await ListRequest(1, perPage, "0")
        }
    }
    // form manage =================
    const formData = useSelector((state) => state.blog.FormValue);

    const PreviewImage = () => {
        let ImgFile = userImgRef.files[0];
        ImageDone = ImgFile;
        store.dispatch(OnChangeblogInput({Name:"image",Value:ImageDone}));
        userImgView.src=URL.createObjectURL(ImgFile);
    }

    const handleSubmit = async (e) =>  {
        e.preventDefault();
        const config = { headers: { "Content-Type": "multipart/form-data" } };
        const newForm = new FormData();
        newForm.append("userName","");
        newForm.append("title", formData.title);
        newForm.append("image", formData.image);
        newForm.append("summery", formData.summery);
        newForm.append("description", formData.description);
        newForm.append("tag", formData.tag);
        newForm.append("status", formData.status);
        if(formData.title==""){
            ErrorToast("title Required !")
        }else if(formData.summery==""){
            ErrorToast("summery Required !")
        }else if(formData.image==""){
            ErrorToast("Image Required !")
        }else if(formData.description==""){
            ErrorToast("description  Required !")
        }else if(formData.tag==""){
            ErrorToast("tag Required !")
        }else if(formData.status==""){
            ErrorToast("Status Required !")
        }else{
            if(await CreateRequest(newForm,config)){
                await ListRequest(1, perPage, searchKeyword);
                setShow(false);
            }
        }
    };
    
    const DeleteItem = async (id) => {
        let Result = await DeleteAlert();
        if(Result.isConfirmed){
            let DeleteResult= await DeleteRequest(id)
            if(DeleteResult){
                await ListRequest(1,perPage,searchKeyword);
            }
        }
    }
    const ItemEdit = async (id) => {
        await DetailsGet(id)
        setModalShow(true)
    }
    return (
        <Fragment>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-6">
                                        <button variant="primary" onClick={handleShow} className='btn ml-3 d-block bg-gradient-success'>Add+</button> 
                                        <h5>Project List</h5>
                                    </div>
                                    <div className="col-2">
                                        <select onChange={perPageOnChange}  className="form-control   form-select" >
                                            <option value="5">5 Per Page</option>
                                            <option value="10">10 Per Page</option>
                                            <option value="20">20 Per Page</option>
                                            <option value="30">30 Per Page</option>
                                            <option value="50">50 Per Page</option>
                                            <option value="100">100 Per Page</option>
                                            <option value="200">200 Per Page</option>
                                            <option value="200">200 Per Page</option>
                                        </select>
                                    </div>
                                    <div className="col-4">
                                        <div className="input-group mb-3">
                                            <input onChange={searchKeywordOnChange} type="text" className="form-control form-control-sm" placeholder="Search.." aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                            <button onClick={searchData}  className="btn  btn-outline-primary btn-sm mb-0" type="button">Search</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="table-responsive data-table">
                                            <table className="table ">
                                                <thead className="sticky-top bg-white">
                                                <tr>
                                                    <th className=" text-uppercase  font-weight-bolder ">Title</th>
                                                    <th className=" text-uppercase  font-weight-bolder ">Image</th>
                                                    <th className=" text-uppercase  font-weight-bolder ">Tag</th>
                                                    <th className=" text-uppercase  font-weight-bolder ">Summery</th>
                                                    <th className=" text-uppercase  font-weight-bolder ">Status</th>
                                                    <th className=" text-uppercase  font-weight-bolder ">Action</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                { DataList.map((item,i)=>
                                                    <tr>
                                                        <td>
                                                            <p className="mb-0">{item.title} </p>
                                                        </td >
                                                        <td>
                                                            <p className="mb-0 "><img className='icon-nav-img ' src={BaseURl+item.image}  alt="" /></p>
                                                        </td>
                                                        <td>
                                                            <p className="mb-0">{item.tag}</p>
                                                        </td>
                                                        <td>
                                                            <p className="mb-0">{item.summery}</p>
                                                        </td>
                                                        <td>
                                                            {item.status === 1 && (
                                                                <p className="badge bg-gradient-success"><FaRegCheckCircle/></p>
                                                            )}

                                                            {item.status === 0 && (
                                                                <p className="badge bg-gradient-danger"><FaWindowClose/></p>
                                                            )}
                                                        </td>
                                                        <td>
                                                            <span role='button' onClick={ItemEdit.bind(this,item._id)} className="badge  bg-gradient-success"><FaEdit/></span>
                                                            <span role='button' onClick={DeleteItem.bind(this,item._id)} className="mx-3 badge  bg-gradient-danger"><FaTrashAlt/></span>
                                                        </td>
                                                    </tr>
                                                )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="col-12 mt-5">
                                        <nav aria-label="Page navigation example">
                                            <ReactPaginate
                                                previousLabel="<<"
                                                nextLabel=">>"
                                                pageClassName="page-item"
                                                pageLinkClassName="page-link"
                                                previousClassName="page-item"
                                                previousLinkClassName="page-link"
                                                nextClassName="page-item"
                                                nextLinkClassName="page-link"
                                                breakLabel="..."
                                                breakClassName="page-item"
                                                breakLinkClassName="page-link"
                                                pageCount={Total/perPage}
                                                marginPagesDisplayed={2}
                                                pageRangeDisplayed={5}
                                                onPageChange={handlePageClick}
                                                containerClassName="pagination"
                                                activeClassName="active"
                                            />
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Project  Addding</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit} >
                    <Modal.Body>

                        <div className='form-group'>
                            <label htmlFor=""> Title</label>
                            <input type="text"  name="title"  onChange={(e)=>{store.dispatch(OnChangeblogInput({Name:"title",Value:e.target.value}))}} className='form-control' placeholder='Enter title ..?'/>
                        </div>                                         
                        <div className='form-group'>
                            <img  ref={(input)=>userImgView=input} className="icon-nav-img-lg" alt=""/>
                            <label htmlFor=""> Image</label>
                            <input type="file"  name="image" onChange={PreviewImage} ref={(input)=>userImgRef=input}  className='form-control' placeholder='Enter company ..?'/>
                        </div>                                         
                        <div className='form-group'>
                            <label htmlFor="">Tag</label>
                            <input type="text"  name="tag" onChange={(e)=>{store.dispatch(OnChangeblogInput({Name:"tag",Value:e.target.value}))}} className='form-control' placeholder='Enter Tag ..?'/>
                        </div>                                         
                        <div className='form-group'>
                            <label htmlFor="">Summery</label>
                            <input type="text"  name="summery" onChange={(e)=>{store.dispatch(OnChangeblogInput({Name:"summery",Value:e.target.value}))}} className='form-control' placeholder='Enter summery ..?'/>
                        </div>                                         
                        <div className='form-group'>
                            <label htmlFor="">Description</label>
                            <input type="text"  name="description" onChange={(e)=>{store.dispatch(OnChangeblogInput({Name:"description",Value:e.target.value}))}} className='form-control' placeholder='Enter description ..?'/>
                        </div>                                         
                        <div className='form-group'>
                            <label htmlFor=""> Status</label>
                            <select className='form-control' onChange={(e)=>{store.dispatch(OnChangeblogInput({Name:"status",Value:e.target.value}))}} name="status"  >
                                <option value="" selected >---Choose Status---</option>                                    
                                <option value="1" >Active</option>                                    
                                <option value="0" >InActive</option>                                    
                            </select>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                        <button type='submit' className='btn btn-primary'>Save</button>
                    </Modal.Footer>
                </form>
            </Modal>
            <BlogDetails show={modalShow} onHide={() => setModalShow(false)} />
        </Fragment>
    );
};
export default Blog;


function BlogDetails(props) {
    let ImageDoneE,userImgRefE,userImgViewE =useRef();
    const [image,setImage] = useState();
    const details = useSelector((state) => state.blog.FormValue);

    const PreviewImageE = () => {
        let ImgFileE = userImgRefE.files[0];
        ImageDoneE = ImgFileE;
        setImage(ImgFileE)
        store.dispatch(OnChangeblogInput({Name:"image",Value:ImageDoneE}));
        userImgViewE.src=URL.createObjectURL(ImgFileE);
    }
    
    const handleSubmitEdit = async (e) => {
        e.preventDefault();

        const newFormEdit = new FormData();
        newFormEdit.append("image",image);
        newFormEdit.append("userName","");
        newFormEdit.append("title", details.title);
        newFormEdit.append("summery", details.summery);
        newFormEdit.append("description", details.description);
        newFormEdit.append("tag", details.tag);
        newFormEdit.append("status", details.status);
         
        if(details.title==""){
            ErrorToast("title Required !")
        }else if(details.summery==""){
            ErrorToast("summery Required !")
        }else if(details.description==""){
            ErrorToast("description languages Required !")
        }else if(details.tag==""){
            ErrorToast("Tag Required !")
        }else if(details.status==""){
            ErrorToast("Status Required !")
        }else {
            await UpdateRequest(newFormEdit,details._id)
            await ListRequest(1,5, 0);
            props.onHide(false)
        }
    };
    return (
      <>
        <Modal {...props}   aria-labelledby="contained-modal-title-vcenter" centered className="">
            <Modal.Header closeButton>
                <Modal.Title>Project Edit</Modal.Title>
            </Modal.Header>
            <form onSubmit={handleSubmitEdit}>
                <Modal.Body>                                     
                    <div className='form-group'>
                        <label htmlFor=""> Title</label>
                        <input type="text"  name="title" value={details.title} onChange={(e)=>{store.dispatch(OnChangeblogInput({Name:"title",Value:e.target.value}))}} className='form-control' placeholder='Enter title ..?'/>
                    </div>                                         
                    <div className='form-group'>
                        <img  ref={(input)=>userImgViewE=input} src={BaseURl+details.image} className="icon-nav-img-lg" alt=""/>
                        <label htmlFor=""> Image</label>
                        <input type="file"  name="image" onChange={PreviewImageE} ref={(input)=>userImgRefE=input}  className='form-control' placeholder='Enter company ..?'/>
                    </div>                                         
                    <div className='form-group'>
                        <label htmlFor="">Tag</label>
                        <input type="text"  name="tag" value={details.tag} onChange={(e)=>{store.dispatch(OnChangeblogInput({Name:"tag",Value:e.target.value}))}} className='form-control' placeholder='Enter tag ..?'/>
                    </div>                                         
                    <div className='form-group'>
                        <label htmlFor="">summery</label>
                        <input type="text"  name="summery" value={details.summery} onChange={(e)=>{store.dispatch(OnChangeblogInput({Name:"summery",Value:e.target.value}))}} className='form-control' placeholder='Enter summery ..?'/>
                    </div>                                         
                    <div className='form-group'>
                        <label htmlFor="">description</label>
                        <input type="text"  name="description"  value={details.description} onChange={(e)=>{store.dispatch(OnChangeblogInput({Name:"description",Value:e.target.value}))}} className='form-control' placeholder='Enter description ..?'/>
                    </div>                                                                                 
                    <div className='form-group'>
                        <label htmlFor=""> Status</label>
                        <select className='form-control' value={details.status}  onChange={(e)=>{store.dispatch(OnChangeblogInput({Name:"status",Value:e.target.value}))}} name="status"  >
                            <option value=""  >---Choose Status---</option>                                    
                            <option value="1" >Active</option>                                    
                            <option value="0" >InActive</option>                                    
                        </select>
                    </div>
                </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={props.onHide}>Close</Button>
              <button type='submit' className='btn btn-primary'>Save</button>
            </Modal.Footer>
          </form>
        </Modal>
      </>
    );
}
