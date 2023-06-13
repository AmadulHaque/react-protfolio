import React, {Fragment, useEffect, useRef, useState} from 'react';
import {useSelector} from "react-redux";
import ReactPaginate from "react-paginate";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {ListRequest,CreateRequest,DeleteRequest,DetailsGet,UpdateRequest} from "../../ApiRequest/ExperienceAPIRequest";
import { FaEdit ,FaTrashAlt,FaRegCheckCircle,FaWindowClose } from "react-icons/fa";
import {ErrorToast, IsEmpty} from "../../Helper/FormHelper";
import {DeleteAlert} from "../../Helper/DeleteAlert";
import store from "../../redux/store/store";
import {OnChangeexperienceInput} from "../../redux/state-slice/experience-slice";



export default function Experience() {
    const [modalShow, setModalShow] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let [searchKeyword,setSearchKeyword]=useState("0");
    let [perPage,setPerPage]=useState(5);

    useEffect(()=>{
        (async () => {
            await ListRequest(1, perPage, searchKeyword);
        })();
    },[])

    let DataList=useSelector((state)=>(state.experience.List));
    let Total=useSelector((state)=>(state.experience.ListTotal))

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

    // form manage
    let yearRef,titleRef,companyRef,descriptionRef,statusRef=useRef();

    const handleSubmit = async (e) =>  {
        e.preventDefault();
        const formData = {
            'year':yearRef.value,
            'title':titleRef.value,
            'company':companyRef.value,
            'description':descriptionRef.value,
            'status':statusRef.value,
        }
        if(IsEmpty(formData.year)){
            ErrorToast("year Required !")
        }else if(IsEmpty(formData.title)){
            ErrorToast("title Required !")
        }else if(IsEmpty(formData.company)){
            ErrorToast("company Required !")
        }else if(IsEmpty(formData.description)){
            ErrorToast("description Required !")
        }else if(IsEmpty(formData.status)){
            ErrorToast("Status Required !")
        }else {
            if(await CreateRequest(formData)){
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
                                        <h5>Experience List</h5>
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
                                                    <th className="text-uppercase  font-weight-bolder  ps-2">Year</th>
                                                    <th className=" text-uppercase  font-weight-bolder ">Title</th>
                                                    <th className=" text-uppercase  font-weight-bolder ">Company</th>
                                                    <th className=" text-uppercase  font-weight-bolder ">Description</th>
                                                    <th className=" text-uppercase  font-weight-bolder ">Status</th>
                                                    <th className=" text-uppercase  font-weight-bolder ">Action</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                { DataList.map((item,i)=>
                                                    <tr>
                                                        <td>
                                                            <p className="mb-0 badge bg-gradient-success">{item.year} </p>
                                                        </td >
                                                        <td>
                                                            <p className="mb-0">{item.title} </p>
                                                        </td >
                                                        <td>
                                                            <p className="mb-0">{item.company}</p>
                                                        </td>
                                                        <td>
                                                            <p className="mb-0">{item.description}</p>
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
                <Modal.Title>Experience  Addding</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit} >
                    <Modal.Body>
                        <div className='form-group'>
                            <label htmlFor="">Year</label>
                            <input type="text" ref={(input)=>yearRef=input} className='form-control' placeholder='Enter year..?'/>
                        </div>                                      
                        <div className='form-group'>
                            <label htmlFor=""> Title</label>
                            <input type="text"  name="title" ref={(input)=>titleRef=input} className='form-control' placeholder='Enter title ..?'/>
                        </div>                                         
                        <div className='form-group'>
                            <label htmlFor=""> Company</label>
                            <input type="text"  name="title" ref={(input)=>companyRef=input} className='form-control' placeholder='Enter company ..?'/>
                        </div>                                         
                        <div className='form-group'>
                            <label htmlFor="">Description</label>
                            <input type="text"  name="description" ref={(input)=>descriptionRef=input} className='form-control' placeholder='Enter description ..?'/>
                        </div>                                         
                        <div className='form-group'>
                            <label htmlFor=""> Status</label>
                            <select className='form-control'  name="status" ref={(input)=>statusRef=input} >
                                <option value="" selected >---Choose Status---</option>                                    
                                <option value="1"selected >Active</option>                                    
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
            <ProfileDetails show={modalShow} onHide={() => setModalShow(false)} />
        </Fragment>
    );
}

function ProfileDetails(props) {
    const details = useSelector((state) => state.experience.FormValue);
    const handleSubmitEdit = async (e) => {
        e.preventDefault();
        
        if(IsEmpty(details.year)){
        ErrorToast("Year Required !")
        }else if(IsEmpty(details.title)){
            ErrorToast("title Required !")
        }else if(IsEmpty(details.company)){
            ErrorToast("company Required !")
        }else if(IsEmpty(details.description)){
            ErrorToast("description Required !")
        }else if(IsEmpty(details.status)){
            ErrorToast("Status Required !")
        }else {
            await UpdateRequest(details,details._id)
            await ListRequest(1,5, 0);
            props.onHide(false)
        }
      
    };
    return (
      <>
        <Modal {...props}   aria-labelledby="contained-modal-title-vcenter" centered className="">
          <Modal.Header closeButton>
            <Modal.Title>Experience Edit</Modal.Title>
          </Modal.Header>
          <form onSubmit={handleSubmitEdit}>
            <Modal.Body>
            <div className='form-group'>
                <label htmlFor="">Year</label>
                <input type="text" value={details.year} onChange={(e)=>{store.dispatch(OnChangeexperienceInput({Name:"year",Value:e.target.value}))}} className='form-control' placeholder='Enter year..?'/>
            </div>                                      
            <div className='form-group'>
                <label htmlFor=""> Title</label>
                <input type="text"  value={details.title}  onChange={(e)=>{store.dispatch(OnChangeexperienceInput({Name:"title",Value:e.target.value}))}}  name="title"  className='form-control' placeholder='Enter title ..?'/>
            </div>                                         
            <div className='form-group'>
                <label htmlFor=""> Company</label>
                <input type="text"  name="company" value={details.company}   onChange={(e)=>{store.dispatch(OnChangeexperienceInput({Name:"company",Value:e.target.value}))}} className='form-control' placeholder='Enter company ..?'/>
            </div>                                         
            <div className='form-group'>
                <label htmlFor="">Description</label>
                <input type="text"  name="description"  value={details.description}   onChange={(e)=>{store.dispatch(OnChangeexperienceInput({Name:"description",Value:e.target.value}))}} className='form-control' placeholder='Enter description ..?'/>
            </div>  
              
            <div className='form-group'>
                <label htmlFor="">Skill Status</label>
                <select className='form-control' name="status" value={details.status} onChange={(e)=>{store.dispatch(OnChangeexperienceInput({Name:"status",Value:e.target.value}))}}   >
                  <option value="" disabled>---Choose Status---</option>
                  <option value="1">Active</option>
                  <option value="0">Inactive</option>
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
