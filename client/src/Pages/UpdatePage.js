import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import storage from '../firebaseConfig';
import Swal from 'sweetalert2';

function UpdatePage() {
    const { uid } = useParams();
    const [formData, setFormData] = useState({});
    const [tempImg, setImg] = useState(null)
    const [uploadProg, setProg] = useState(0);
    const nav = useNavigate();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    useEffect(() => {
        if (uid == null) {
            alert("No ID Found");
        } else {
            fetch(`http://localhost:7000/api/profile/${uid}`)
                .then((res) => {
                    if (!res.ok) {
                        throw new Error(`HTTP error status ${res.status}`);
                    }
                    return res.json();
                })
                .then((data) => {
                    setFormData(data[0]);
                    console.log(data);
                })
                .catch((err) => alert(err));
        }
    }, [uid]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.imgfile == null) {
            const response = await fetch(`http://localhost:7000/api/editp/${uid}`, {
                method: "PUT",
                headers: {
                    "content-Type": "application/json",
                },
                body: JSON.stringify({
                    uname: formData.uname,
                    pwd: formData.pwd,
                    email: formData.email,
                    status: "false",
                    reg_date_time: formData.reg_date_time,
                    utype: formData.utype,
                    url: formData.url,
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
                    title: "Data Updated Successfully",
                    showConfirmButton: false,
                    timer: 3000
                  });

                const resdata = await response.json()
                console.log(resdata[0])
                const data = resdata[0]
                localStorage.removeItem("email")
                localStorage.removeItem("url")
                localStorage.removeItem("name")
                localStorage.setItem("email", data.email)
                localStorage.setItem("url", data.url)
                localStorage.setItem("name", data.uname)

                nav("/home");
            }
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
                        const response = await fetch(`http://localhost:7000/api/editp/${uid}`, {
                            method: "PUT",
                            headers: {
                                "content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                uname: formData.uname,
                                pwd: formData.pwd,
                                email: formData.email,
                                status: "false",
                                reg_date_time: formData.reg_date_time,
                                utype: formData.utype,
                                url: downloadUrl,
                                urlname: `${formData.uname.split(" ").join("").toLowerCase()}.jpg`
                            })
                        })
                        if (!response.ok) {
                            console.error(response.status)
                        }
                        else {
                            Swal.fire({
                                position: "top",
                                icon: "success",
                                title: "Data Updated Successfully",
                                showConfirmButton: false,
                                timer: 3000
                              });
                            const resdata = await response.json()
                            console.log(resdata[0])
                            const data = resdata[0]
                            localStorage.removeItem("email")
                            localStorage.removeItem("url")
                            localStorage.removeItem("name")
                            localStorage.setItem("email", data.email)
                            localStorage.setItem("url", data.url)
                            localStorage.setItem("name", data.uname)
                            nav("/home");
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
            <div className='container-fluid '>
               
                <section className="">

                    <div className="px py-5  px-md-5 text-center text-lg-start" >
                        <div className="container">
                            <div className="row gx-lg-5 align-items-center">
                                <div className="col-lg-3 mb-5 mb-lg-0">

                                </div>

                                <div className="col-lg-6 mb-4 mb-lg-0" >
                                    <div className="card" style={{backgroundColor:'',border:'3px solid #ff5522',borderRadius:'30px'}}>
                                        <div className="card-body  px-md-5" >
                                            <form onSubmit={e => handleSubmit(e)} >
                                                <div className="row">
                                                    <div className="mb-4">
                                                        <img src={tempImg === null ? formData.url : tempImg} alt='Select Profile Photo' className='rounded-circle d-block mx-auto ' style={{ height: "200px", width: "200px", objectFit: "cover" }}></img>
                                                        <div className='progress mb-4' style={{backgroundColor:'#ff5522'}}>
                                                            <div className='progress-bar' style={{ width: `${uploadProg}%` }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}>{uploadProg.toFixed(2)}%</div>
                                                        </div>
                                                        <div className="form-outline">
                                                            <input style={{border:'2px solid #ff5522'}} type="text" name='uname' onChange={e => handleChange(e)} className="form-control" value={formData.uname} />
                                                            <label className="form-label" htmlFor="form3Example1">First name</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='row'>
                                                    <div className="form-outline  col-lg-6  mb-4">
                                                        <input style={{border:'2px solid #ff5522'}} type="email" name='email' value={formData.email} onChange={e => handleChange(e)} className="form-control" />
                                                        <label className="form-label" htmlFor="form3Example3">Email address</label>
                                                    </div>
                                                    <div className="form-outline col-lg-6  mb-4">
                                                        <input style={{border:'2px solid #ff5522'}} type="password" value={formData.pwd} name='pwd' onChange={e => handleChange(e)} className="form-control" />
                                                        <label className="form-label" htmlFor="form3Example4">Password</label>
                                                    </div>
                                                </div>

                                                <div className="form-outline">
                                                    <input style={{border:'2px solid #ff5522'}} type="file" name='url' onChange={e => {
                                                        setFormData((prevData) => ({ ...prevData, imgfile: e.target.files[0] }))
                                                        setImg(URL.createObjectURL(e.target.files[0]))
                                                    }} className="form-control" />
                                                    <label className="form-label" htmlFor="form3Example1">Select Profile Photo</label>
                                                </div>

                                                

                                                <div align='center'>
                                                    <button type="submit" style={{backgroundColor:'#ff5522',color:'white',border:'2px solid black'}} className="btn  btn-block ">
                                                        Edit Now
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

export default UpdatePage;

