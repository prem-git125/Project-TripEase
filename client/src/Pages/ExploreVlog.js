import React, { useEffect, useState, useRef } from 'react'
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import storage from '../firebaseConfig';
import { useParams, Link } from 'react-router-dom';
// import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import "../App.css";
import Swal from 'sweetalert2'; 

const ExploreVlog = () => {
    const [data, setData] = useState([])
    const [vlogid, setVlogid] = useState(0);
    const [SingleData, setSingleData] = useState([]);
    const [loading, setLoading] = useState(false);
    const { guid } = useParams();
    const guiderID = localStorage.getItem("gid");
    console.log(guid)
    const [formData, setFormData] = useState({})
    const [tempImg, setImg] = useState(null)
    const [uploadProg, setProg] = useState(0)
    
    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:7000/api/vlogview");

            if (!response.ok) {
                throw new Error(`HTTP error status ${response.status}`)
            }
            const jsonData = await response.json()
            setData(jsonData);

        } catch (error) {
            console.error("Error In Fetching Data : ", error)
        }
    }
    const fetchSingleVlog = async () => {
        try {
            setLoading(true);
            const response = await fetch(`http://localhost:7000/api/SingleVlog/${vlogid}`);

            if (!response.ok) {
                throw new Error(`HTTP error status ${response.status}`);
            }
            const jsonData = await response.json();
            setSingleData(jsonData);
        } catch (error) {
            console.error("Error In Fetching Data : ", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (vlogid !== 0) {
            fetchSingleVlog();
        }
    }, [vlogid]); // Add vlogid as a dependency

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData((prevData) => ({ ...prevData, [name]: value }))
        console.log(formData)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.video == null) {
            alert("Select Video File");
        } else {
            try {
                const titlewithoutSpace = formData.vname.split(" ").join("").toString().toLowerCase();
                const currentDate = new Date().getTime();
                const storageRef = ref(storage, `Vlog/${titlewithoutSpace}${currentDate}/video.mp4`);
                const storageRef2 = ref(storage, `Vlog/${titlewithoutSpace}${currentDate}/v_thumbnail.jpg`);

                const UploadTask = uploadBytesResumable(storageRef, formData.video);
                const UploadTask2 = uploadBytesResumable(storageRef2, formData.v_thumbnail);

                UploadTask.on(
                    "state_changed",
                    (snapshot) => setProg((snapshot.bytesTransferred / snapshot.totalBytes) * 100),
                    (error) => {
                        console.error(error);
                    },
                    async () => {
                        const downloadUrl = await getDownloadURL(UploadTask.snapshot.ref);
                        const downloadUrl2 = await getDownloadURL(UploadTask2.snapshot.ref);
                        const date = new Date();

                        const response = await fetch("http://localhost:7000/api/data/addvlog", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                vurl: downloadUrl,
                                vurlname: `Vlogvideos/${titlewithoutSpace}${currentDate}/video.mp4`,
                                vname: formData.vname,
                                v_description: formData.v_description,
                                guiderid: guid,
                                date_time: date,
                                vthumbnail: downloadUrl2,
                                v_thumbnail_urlname: `VlogImg/${titlewithoutSpace}${currentDate}/v_thumbnail.jpg`,
                            }),
                        });

                        if (!response.ok) {

                            Swal.fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Error Adding Vlog"
                              });
                           
                        } else {
                            // alert(response.statusText);
                            Swal.fire({
                                position: "top",
                                icon: "success",
                                title: "Vlog Added Successfully",
                                showConfirmButton: false,
                                timer: 1500
                              });
                        }
                    }
                );
            } catch (error) {
                console.error("Something is wrong", error);
            }
        }
    };

    useEffect(() => {
        fetchData()
    })


    return (
        <>

            <div className="modal fade show" id="exampleModal" tabIndex="2" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="title-box centered mb-4" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="subtitle" style={{paddingTop:'20px'}}>Add Vlogs</div>
                            </div>
                            
                        </div>
                        <div className="modal-body" style={{ backgroundColor: '#ff5522', color: 'white' }}>
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className="row">
                                    <div className="mb-4" >
                                        {/* <img src={tempImg == null ? "https://www.svgrepo.com/show/327465/person-circle.svg" : tempImg} alt='Select Profile Photo' className='rounded-circle d-block mx-auto ' style={{ height: "200px", width: "200px", objectFit: "cover" }}></img> */}
                                        <div className='progress mb-4'>
                                            <div className='progress-bar' style={{ width: `${uploadProg}%` }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}>{uploadProg.toFixed(2)}%</div>
                                        </div>
                                        <div className="form-outline">
                                            <input style={{ backgroundColor: '#ff5522' }} type="text" name='vname' onChange={e => handleChange(e)} className="form-control" />
                                            <label style={{ color: 'white' }} className="form-label" htmlFor="form3Example1">Enter Vlog Title : </label>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <input style={{ backgroundColor: '#ff5522' }} type="file" name='vurl' accept='video/*' onChange={e => {
                                            setFormData((prevData) => ({ ...prevData, video: e.target.files[0] }))
                                            setImg(URL.createObjectURL(e.target.files[0]))
                                        }} className="form-control" />
                                        <label style={{ color: 'white' }} className="form-label" htmlFor="form3Example1">Select Video file</label>
                                    </div>
                                    <div className='col-lg-6'>
                                        <input style={{ backgroundColor: '#ff5522' }} type="file" name='vthumbnail' accept='image/*' onChange={e => {
                                            setFormData((prevData) => ({ ...prevData, v_thumbnail: e.target.files[0] }))
                                            setImg(URL.createObjectURL(e.target.files[0]))
                                        }} className="form-control" />
                                        <label style={{ color: 'white' }} className="form-label" htmlFor="form3Example1">Select thumbnail Photo</label>
                                    </div>
                                </div>

                                <div className="form-outline " >
                                    <div className="form-floating" >
                                        <textarea className="form-control" onChange={(e) => handleChange(e)} name='v_description' placeholder="Leave a comment here" id="floatingTextarea2" style={{ backgroundColor: '#ff5522', height: '100px' }}></textarea>
                                        <label style={{ color: 'white' }} for="floatingTextarea2">Enter Description</label>
                                    </div>
                                    <label style={{ color: 'white' }} className="form-label" htmlFor="form3Example3"></label>

                                </div>



                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={(e) => handleSubmit(e)} >Add Vlog</button>
                        </div>
                    </div>
                </div>
            </div>

            <section className="inner-banner">
                <div className="image-layer" style={{ backgroundImage: `url( https://images.pexels.com/photos/2450296/pexels-photo-2450296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)` }} >
                </div>
                <div className="auto-container">
                    <div className="content-box">
                        <h1>Latest Vlogs</h1>
                        <div className="bread-crumb">
                            <ul className="clearfix">
                                <li className='current'><Link to={"/home"}>Home</Link></li>
                                <li className="current">Explore Vlogs</li>
                            </ul>
                           {guiderID == null ? "" : <button className='btn btn-success' data-toggle="modal" data-target="#exampleModal">Add Vlogs</button>}
                        </div>
                    </div>
                </div>
            </section>

            <div className="news-block-three wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                <div className='container mb-3'>
                    <div className='row'>
                        {Array.isArray(data) && data.map((vlogs) => (
                            <div className='col-md-4 mt-3'>
                                <div className="inner-box">
                                    <div className="image-box position-relative">
                                        <video

                                            className='w-100 z-3'
                                            style={{ height: '300px', objectFit: "cover" }}
                                            controls
                                            poster={vlogs.vthumbnail}

                                        >
                                            <source src={vlogs.vurl}></source>

                                        </video>
                                        <div className='position-absolute  p-3 h-100 text-light bg-vlog' style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>

                                            <h4>{vlogs.vname}</h4>
                                            <div className="travilo-text m-0 p-0">{vlogs.v_description}</div>
                                        </div>
                                    </div>
                                    <div className="lower-box p-4">
                                        <ul className="info clearfix  p-0">
                                            <li><i className="fa-solid fa-clock"></i>{new Date(vlogs.date_time).toDateString()}</li>
                                        </ul>
                                        <div className="more-links clearfix p-0">
                                            <div className="more">
                                                <div className="social">
                                                    <strong>Share</strong>
                                                    <a href="#" className="facebook"><i className="fas fa-share-alt"></i></a>
                                                    <a href="#" className="facebook"><i className="fas fa-thumbs-up"></i></a>
                                                    <button className='btn' onClick={() => setVlogid(vlogs.vlogid)} data-toggle="modal" data-target="#singleVlog"><i className="fas fa-search-plus"></i></button>
                                                </div>
                                            </div>
                                            <div className="social">Posted By : <strong>{vlogs.nick_name}</strong></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="modal fade" id="singleVlog" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div className="modal-dialog" style={{ marginLeft: '250px' }} role="document" >
                                <div className="modal-content" style={{ width: '1000px', backgroundColor: 'transparent', border: '0px solid transparent' }}>
                                    <div className="modal-body"  >
                                        {loading ? (
                                            <div>Loading...</div>
                                        ) : (
                                            SingleData && SingleData.map((item) => (
                                                <div key={item.vlogid} className="card bg-dark text-white position-relative" >
                                                    <video src={item.vurl} autoPlay muted className="card-img" alt="..."></video>
                                                    <div className='h-100 w-100 position-absolute top-0' style={{ backgroundColor: "rgba(0,0,0,0.5)" }}  ></div>
                                                    <div className="card-img-overlay">
                                                        <h2 className="card-title text-uppercase">{item.vname}</h2>
                                                        <p className="card-text">{item.v_description}</p>
                                                        <p className="card-text">Posted By <strong>{item.nick_name}</strong></p>
                                                    </div>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExploreVlog
