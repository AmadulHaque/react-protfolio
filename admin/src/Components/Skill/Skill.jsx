import React, {Fragment, useEffect, useRef, useState} from 'react';
import {useSelector} from "react-redux";
import ReactPaginate from "react-paginate";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {SkillListRequest,CreateSkillRequest,DeleteSkillRequest,DetailsGet,UpdateSkillRequest} from "../../ApiRequest/SkillAPIRequest";
import { FaEdit ,FaTrashAlt,FaRegCheckCircle,FaWindowClose } from "react-icons/fa";
import {ErrorToast, IsEmpty} from "../../Helper/FormHelper";
import {DeleteAlert} from "../../Helper/DeleteAlert";

const Skill = () => {
    const [modalShow, setModalShow] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let [searchKeyword,setSearchKeyword]=useState("0");
    let [perPage,setPerPage]=useState(5);

    useEffect(()=>{
        (async () => {
            await SkillListRequest(1, perPage, searchKeyword);
        })();
    },[])

    let DataList=useSelector((state)=>(state.skill.List));
    let Total=useSelector((state)=>(state.skill.ListTotal))

    const handlePageClick = async (event) => {
        await SkillListRequest(event.selected + 1, perPage, searchKeyword)
    };
    const searchData=async () => {
        await SkillListRequest(1, perPage, searchKeyword)
    }
    const perPageOnChange=async (e) => {
        setPerPage(parseInt(e.target.value))
        await SkillListRequest(1, e.target.value, searchKeyword)
    }
    const searchKeywordOnChange=async (e) => {
        setSearchKeyword(e.target.value)
        if ((e.target.value).length === 0) {
            setSearchKeyword("0")
            await SkillListRequest(1, perPage, "0")
        }
    }

    // form manage
    let NameRef,conditionRef,percentRef,statusRef=useRef();

    const handleSubmit = async (e) =>  {
        e.preventDefault();
        const formData = {
            'Name':NameRef.value,
            'condition':conditionRef.value,
            'percent':percentRef.value,
            'status':statusRef.value,
        }
        if(IsEmpty(formData.Name)){
            ErrorToast("Name Required !")
        }else if(IsEmpty(formData.condition)){
            ErrorToast("Condition Required !")
        }else if(IsEmpty(formData.percent)){
            ErrorToast("Percent Required !")
        }else if(IsEmpty(formData.status)){
            ErrorToast("Status Required !")
        }else {
            if(await CreateSkillRequest(formData)){
                await SkillListRequest(1, perPage, searchKeyword);
                setShow(false);
            }
        }
    };
    
    const DeleteItem = async (id) => {
        let Result = await DeleteAlert();
        if(Result.isConfirmed){
            let DeleteResult= await DeleteSkillRequest(id)
            if(DeleteResult){
                await SkillListRequest(1,perPage,searchKeyword);
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
                                        <h5>Skill List</h5>
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
                                                    <th className="text-uppercase  font-weight-bolder  ps-2">Name</th>
                                                    <th className=" text-uppercase  font-weight-bolder ">Condition</th>
                                                    <th className=" text-uppercase  font-weight-bolder ">Percent</th>
                                                    <th className=" text-uppercase  font-weight-bolder ">Status</th>
                                                    <th className=" text-uppercase  font-weight-bolder ">Action</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                { DataList.map((item,i)=>
                                                    <tr>
                                                        <td>
                                                            <p className="mb-0">{item.Name} </p>
                                                        </td >
                                                        <td>
                                                            <p className="mb-0">{item.condition} </p>
                                                        </td >
                                                        <td>
                                                            <p className="badge bg-gradient-success">{item.percent}</p>
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
                <Modal.Title>Skill  Addding</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit} >
                    <Modal.Body>
                        <div className='form-group'>
                            <label htmlFor="">Skill Name</label>
                            <input type="text" ref={(input)=>NameRef=input} className='form-control' placeholder='Enter skill name..?'/>
                        </div>                                      
                        <div className='form-group'>
                            <label htmlFor="">Skill Type</label>
                            <select className='form-control' name="condition" ref={(input)=>conditionRef=input}>
                                <option value="" selected disabled >---Choose Type---</option>                                    
                                <option value="Advance" >Advance</option>                                    
                                <option value="Intermediate" >Intermediate</option>                                    
                                <option value="Bassic" >Bassic</option>                                    
                                <option value="Learning" >Learning</option>                                    
                            </select>
                        </div>  
                        <div className='form-group'>
                            <label htmlFor="">Skill Percent</label>
                            <input type="text"  name="percent" ref={(input)=>percentRef=input} className='form-control' placeholder='Enter Percent ..?'/>
                        </div>                                         
                        <div className='form-group'>
                            <label htmlFor="">Skill Status</label>
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
};
export default Skill;


function ProfileDetails(props) {
    const NameRef2 = useRef();
    const conditionRef2 = useRef();
    const percentRef2 = useRef();
    const statusRef2 = useRef();
    const details = useSelector((state) => state.skill.FormValue);
    
    const handleSubmitEdit = async (e) => {
        e.preventDefault();
        const formDataEdit = {
            'Name': NameRef2.current.value,
            'condition': conditionRef2.current.value,
            'percent': percentRef2.current.value,
            'status': statusRef2.current.value,
        };
        if(IsEmpty(formDataEdit.Name)){
        ErrorToast("Name Required !")
        }else if(IsEmpty(formDataEdit.condition)){
            ErrorToast("Condition Required !")
        }else if(IsEmpty(formDataEdit.percent)){
            ErrorToast("Percent Required !")
        }else if(IsEmpty(formDataEdit.status)){
            ErrorToast("Status Required !")
        }else {
            await UpdateSkillRequest(formDataEdit,details._id)
            await SkillListRequest(1,5, 0);
            NameRef2.current.reset();
            conditionRef2.current.reset();
            percentRef2.current.reset();
            statusRef2.current.reset();
        }
      
    };
  
    return (
      <>
        <Modal {...props}   aria-labelledby="contained-modal-title-vcenter" centered className="">
          <Modal.Header closeButton>
            <Modal.Title>Skill Edit</Modal.Title>
          </Modal.Header>
          <form onSubmit={handleSubmitEdit}>
            <Modal.Body>
              <div className='form-group'>
                <label htmlFor="">Skill Name</label>
                <input
                  defaultValue={details.Name}
                  ref={NameRef2}
                  className='form-control'
                  type="text"
                />
              </div>
              <div className='form-group'>
                <label htmlFor="">Skill Type</label>
                <select
                  className='form-control'
                  name="condition"
                  defaultValue={details.condition}
                  ref={conditionRef2}
                >
                  <option value="" disabled>---Choose Type---</option>
                  <option value="Advance">Advance</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Basic">Basic</option>
                  <option value="Learning">Learning</option>
                </select>
              </div>
              <div className='form-group'>
                <label htmlFor="">Skill Percent</label>
                <input
                  type="text"
                  name="percent"
                  defaultValue={details.percent}
                  ref={percentRef2}
                  className='form-control'
                  placeholder='Enter Percent..'
                />
              </div>
              <div className='form-group'>
                <label htmlFor="">Skill Status</label>
                <select
                  className='form-control'
                  name="status"
                  defaultValue={details.status}
                  ref={statusRef2}
                >
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