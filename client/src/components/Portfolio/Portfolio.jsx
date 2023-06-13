import React,{useState} from 'react';
import img1 from "../../assets/img/projects/project-1.jpg";
import img2 from "../../assets/img/projects/project-2.jpg";
import img3 from "../../assets/img/projects/project-3.jpg";
import img4 from "../../assets/img/projects/project-4.jpg";
import img5 from "../../assets/img/projects/project-5.jpg";
import img6 from "../../assets/img/projects/project-6.jpg";
import img7 from "../../assets/img/projects/project-7.jpg";
import img8 from "../../assets/img/projects/project-8.jpg";
import img9 from "../../assets/img/projects/project-9.jpg";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useSelector} from "react-redux";
import store from "../../redux/store/store.js";
import {ShowDetails} from "../../redux/slice/project-slice.js";


const Portfolio = () => {
    const [modalShow, setModalShow] = useState(false);

    const handleShow = (id) => {
        store.dispatch(ShowDetails({img:id}))
        setModalShow(true);
    };


    return (
        <>
            <section className="title-section text-left text-sm-center ">
                <h1>
                    my <span>portfolio</span>
                </h1>
                <span className="title-bg">works</span>
            </section>
            <ProfileDetails show={modalShow} onHide={() => setModalShow(false)} />
            {/* Page Title Ends */}
            <section className="main-content text-center">
                <div id="grid-gallery" className="container grid-gallery">
                    {/* Portfolio Grid Starts */}
                    <section className="grid-wrap">
                        <ul className="row grid">
                            {/* Portfolio Item Starts */}
                            <li className="cardList" onClick={()=>handleShow(img1)}>
                                <figure>
                                    <img src={img1} alt="Portolio Image" />
                                    <div>
                                        <span>Image Project</span>
                                    </div>
                                </figure>
                            </li>
                            {/* Portfolio Item Ends */}
                            {/* Portfolio Item Starts */}
                            <li className="cardList" onClick={()=>handleShow(img2)}>
                                <figure>
                                    <img src={img2} alt="Portolio Image" />
                                    <div>
                                        <span>Youtube Project</span>
                                    </div>
                                </figure>
                            </li>
                            {/* Portfolio Item Ends */}
                            {/* Portfolio Item Starts */}
                            <li className="cardList" onClick={()=>handleShow(img3)} >
                                <figure>
                                    <img src={img3} alt="Portolio Image" />
                                    <div>
                                        <span>Slider Project</span>
                                    </div>
                                </figure>
                            </li>
                            {/* Portfolio Item Ends */}
                            {/* Portfolio Item Starts */}
                            <li className="cardList" onClick={()=>handleShow(img4)}>
                                <figure>
                                    <img src={img4} alt="Portolio Image" />
                                    <div>
                                        <span>Local Video Project</span>
                                    </div>
                                </figure>
                            </li>
                            {/* Portfolio Item Ends */}
                            {/* Portfolio Item Starts */}
                            <li className="cardList" onClick={()=>handleShow(img5)}>
                                <figure>
                                    <img src={img5} alt="Portolio Image" />
                                    <div>
                                        <span>Image Project</span>
                                    </div>
                                </figure>
                            </li>
                            {/* Portfolio Item Ends */}
                            {/* Portfolio Item Starts */}
                            <li className="cardList"onClick={()=>handleShow(img6)}>
                                <figure>
                                    <img src={img6} alt="Portolio Image" />
                                    <div>
                                        <span>Image Project</span>
                                    </div>
                                </figure>
                            </li>
                            {/* Portfolio Item Ends */}
                            {/* Portfolio Item Starts */}
                            <li className="cardList" onClick={()=>handleShow(img7)}>
                                <figure>
                                    <img src={img7} alt="Portolio Image" />
                                    <div>
                                        <span>Image Project</span>
                                    </div>
                                </figure>
                            </li>
                            {/* Portfolio Item Ends */}
                            {/* Portfolio Item Starts */}
                            <li className="cardList" onClick={()=>handleShow(img8)}>
                                <figure>
                                    <img src={img8} alt="Portolio Image" />
                                    <div>
                                        <span>Image Project</span>
                                    </div>
                                </figure>
                            </li>
                            {/* Portfolio Item Ends */}
                            {/* Portfolio Item Starts */}
                            <li className="cardList"onClick={()=>handleShow(img9)} >
                                <figure>
                                    <img src={img9} alt="Portolio Image" />
                                    <div>
                                        <span>Image Project</span>
                                    </div>
                                </figure>
                            </li>
                            {/* Portfolio Item Ends */}
                        </ul>
                    </section>
                </div>
            </section>

        </>
    );
};

export default Portfolio;




function ProfileDetails(props) {
    let Details = useSelector((state)=>(state.project.value));
    return (
        <>
            <div className="portfolio">
                <div className="slideshow">
                    <ul>
                        <li>
                            <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered className="">

                                    <div className="current show">
                                        <figure>
                                            <figcaption>
                                                <h3 className="headerH3 text-center">Image Project  <button className="closeBtn"  onClick={props.onHide}><i className="fa-solid fa-xmark"></i></button></h3>
                                                <div className="row open-sans-font">
                                                    <div className="col-12 col-sm-6 mb-2">
                                                        <i className="fa fa-file-text-o pr-2"></i><span
                                                        className="project-label">Project </span>: <span
                                                        className="ft-wt-600 uppercase">Website</span>
                                                    </div>
                                                    <div className="col-12 col-sm-6 mb-2">
                                                        <i className="fa fa-user-o pr-2"></i><span
                                                        className="project-label">Client </span>: <span
                                                        className="ft-wt-600 uppercase">Envato</span>
                                                    </div>
                                                    <div className="col-12 col-sm-6 mb-2">
                                                        <i className="fa fa-code pr-2"></i><span
                                                        className="project-label">Langages </span>: <span className="ft-wt-600 uppercase">HTML, CSS, Javascript</span>
                                                    </div>
                                                    <div className="col-12 col-sm-6 mb-2">
                                                        <i className="fa fa-external-link pr-2"></i><span
                                                        className="project-label">Preview </span>: <span className="ft-wt-600 uppercase"><a
                                                        href="#" target="_blank">www.envato.com</a></span>
                                                    </div>
                                                </div>
                                            </figcaption>
                                            <img className="portfolioDetalimg" src={Details.img} alt="Portolio Image"/>
                                        </figure>
                                    </div>
                            </Modal>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

