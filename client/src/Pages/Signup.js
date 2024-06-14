import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import storage from '../firebaseConfig';
import road from '../assets/images/waterfall.jpg'
import Swal from 'sweetalert2'; 

function Signup() {
    const [formData, setData] = useState({})
    const [tempImg, setImg] = useState(null)
    const [uploadProg, setProg] = useState(0)
    const nav = useNavigate()

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData((prevData) => ({ ...prevData, [name]: value }))
        console.log(formData)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.imgfile == null) {
            alert("Select Image first")
        }
        else {
            try {
                const storageRef = ref(storage, `Uimg/${formData.uname.split(" ").join("").toLowerCase()}.jpg`)
                const uploadTask = uploadBytesResumable(storageRef, formData.imgfile);
                uploadTask.on("state_changed", (snapshot) => setProg(snapshot.bytesTransferred / snapshot.totalBytes * 100),
                    (error) => {
                        console.error(error)
                    },
                    async () => {
                        const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref)
                        const response = await fetch("http://localhost:7000/api/data", {
                            method: "POST",
                            headers: {
                                "content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                uname: formData.uname,
                                pwd: formData.pwd,
                                email: formData.email,
                                status: "false",
                                reg_date_time: formData.reg_date_time,
                                utype: "Visitor",
                                url: downloadUrl,
                                urlname: `${formData.uname.split(" ").join("").toLowerCase()}.jpg`
                            })
                        })
                        if (!response.ok) {
                            console.error(response.status)
                        }
                        else {
                            // alert(response.statusText)
                            Swal.fire({
                                position: "top",
                                icon: "success",
                                title: "Register Successfully",
                                showConfirmButton: false,
                                timer: 3000
                              });

                              nav("/")
                              
                        }
                    })
            }
            catch (err) {
                console.error(err)
            }
        }
    }

    return (
        <>
            <div className='container-fluid bg-black '>

                <section className="">

                    <div className="px-4   px-md-5 text-center text-lg-start" style={{ backgroundImage: `url(${road})`, backgroundSize: 'cover',backgroundPosition:'center', backgroundRepeat: 'no-repeat' }}>
                        <div className="container">
                            <div className="row d-flex justify-content-center align-items-center vh-100" >

                                <div className="col-lg-6">
                                    <div className="card d-block mx-auto" style={{ borderRadius: '20px',border:'3px solid #ff5522' }}>

                                        <div className="card-body px-md-5">
                                            <div className="title-box centered   mb-4" data-wow-delay="0ms" data-wow-duration="1500ms">
                                                <div className="subtitle" style={{ paddingTop: '20px' }}>Create Account</div>
                                            </div>
                                            <form onSubmit={(e) => handleSubmit(e)}>
                                                <div className="row">

                                                    <div className="mb-4">
                                                        <img src={tempImg == null ? "https://www.svgrepo.com/show/327465/person-circle.svg" : tempImg} alt='Select Profile Photo' className='rounded-circle d-block mx-auto ' style={{ height: "200px", width: "200px", objectFit: "cover" }}></img>
                                                        <div className='progress mb-4' style={{backgroundColor:'#ff5522'}}>
                                                            <div className='progress-bar' style={{ width: `${uploadProg}%`}} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}>{uploadProg.toFixed(2)}%</div>
                                                        </div>
                                                        <div className="form-outline">
                                                            <input type="text" name='uname' onChange={e => handleChange(e)} className="form-control" />
                                                            <label className="form-label" htmlFor="form3Example1">First name</label>
                                                        </div>
                                                    </div>
                                                </div>



                                                <div className='row'>
                                                    <div className="form-outline  col-lg-6  mb-4">
                                                        <input type="email" name='email' onChange={e => handleChange(e)} className="form-control" />
                                                        <label className="form-label" htmlFor="form3Example3">Email address</label>
                                                    </div>
                                                    <div className="form-outline col-lg-6  mb-4">
                                                        <input type="password" name='pwd' onChange={e => handleChange(e)} className="form-control" />
                                                        <label className="form-label" htmlFor="form3Example4">Password</label>
                                                    </div>
                                                </div>

                                                <div className="form-outline row">
                                                    <div className='col-lg-6'>
                                                        <input type="file" name='url' onChange={e => {
                                                            setData((prevData) => ({ ...prevData, imgfile: e.target.files[0] }))
                                                            setImg(URL.createObjectURL(e.target.files[0]))

                                                        }} className="form-control" />
                                                        <label className="form-label" htmlFor="form3Example1">Select Profile Photo</label>
                                                    </div>

                                                    {/* <div className="form-outline col-lg-6">
                                                        <select name='utype' onChange={e => handleChange(e)} className='col-lg-6 w-100'>
                                                            <option value='Visitor'>Visitor</option>
                                                           
                                                        </select>
                                                        <label className="form-label" >Select User-Type</label>
                                                    </div> */}
                                                </div>

                                                <div align='center'>
                                                    <button type="submit" className="btn btn-block " style={{backgroundColor:'#ff5522',color:'white',border:'2px solid #ff5522'}}>
                                                        SIGN UP
                                                    </button>
                                                </div>

                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Signup;


