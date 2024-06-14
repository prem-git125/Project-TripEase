import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useState, useEffect } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import storage from '../firebaseConfig';
import { useParams } from 'react-router-dom';

function Vlogform() {
    const { guid } = useParams();
    console.log(guid)
    
    const [formData, setData] = useState({})
    const [tempImg, setImg] = useState(null)
    const [uploadProg, setProg] = useState(0)

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData((prevData) => ({ ...prevData, [name]: value }))
        console.log(formData)
    }

    // const fetchVlog = async () => {
    //     try {
    //         const response = await fetch(`http://localhost:7000/api/vlogprofile/${guiderid}`);
    //         if (!response.ok) {
    //             throw new Error(`HTTP error status ${response.status}`);
    //         }
    //         const jsonData = await response.json();
    //         console.log(jsonData);
    //     } catch (error) {
    //         console.error("Error In Fetching Data:", error);
    //     }
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.video == null) {
            alert("Select Audio File");
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
                            alert(response.statusText);
                        } else {
                            alert(response.statusText);
                        }
                    }
                );
            } catch (error) {
                console.error("Something is wrong", error);
            }
        }
    };

    // useEffect(() => {
    //     fetchVlog()
    // }, [])

    return (
        <>
            <div className='container-fuild bg-white d-block m-auto'>
                <section className="">

                    <div className="px-4  px-md-5 text-center text-lg-start" style={{ backgroundColor: 'hsl(0, 0%, 96%)' }}>
                        <div className="container">
                            <div className="row d-flex align-items-center justify-content-center vh-100">

                                <div className="col-lg-6 mb-4 mb-lg-0">
                                    <div className="card d-block mx-auto">
                                        <div className="card-body px-md-5">
                                            <h1 align='center'>Add Vlog</h1>

                                            <form onSubmit={(e) => handleSubmit(e)}>
                                                <div className="row">
                                                    <div className="mb-4">
                                                        {/* <img src={tempImg == null ? "https://www.svgrepo.com/show/327465/person-circle.svg" : tempImg} alt='Select Profile Photo' className='rounded-circle d-block mx-auto ' style={{ height: "200px", width: "200px", objectFit: "cover" }}></img> */}
                                                        <div className='progress mb-4'>
                                                            <div className='progress-bar' style={{ width: `${uploadProg}%` }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}>{uploadProg.toFixed(2)}%</div>
                                                        </div>
                                                        <div className="form-outline">
                                                            <input type="text" name='vname' onChange={e => handleChange(e)} className="form-control" />
                                                            <label className="form-label" htmlFor="form3Example1">Enter Vlog Title : </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='col-lg-6'>
                                                        <input type="file" name='vurl' accept='video/*' onChange={e => {
                                                            setData((prevData) => ({ ...prevData, video: e.target.files[0] }))
                                                            setImg(URL.createObjectURL(e.target.files[0]))
                                                        }} className="form-control" />
                                                        <label className="form-label" htmlFor="form3Example1">Select Video file</label>
                                                    </div>
                                                    <div className='col-lg-6'>
                                                        <input type="file" name='vthumbnail' accept='image/*' onChange={e => {
                                                            setData((prevData) => ({ ...prevData, v_thumbnail: e.target.files[0] }))
                                                            setImg(URL.createObjectURL(e.target.files[0]))
                                                        }} className="form-control" />
                                                        <label className="form-label" htmlFor="form3Example1">Select thumbnail Photo</label>
                                                    </div>
                                                </div>

                                                <div className="form-outline ">
                                                    <div class="form-floating">
                                                        <textarea class="form-control" onChange={(e) => handleChange(e)} name='v_description' placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px"}}></textarea>
                                                        <label for="floatingTextarea2">Enter Description</label>
                                                    </div>
                                                    <label className="form-label" htmlFor="form3Example3">Enter description:</label>

                                                </div>

                                                <div align='center'>
                                                    <button type="submit" className="btn btn-primary btn-block ">
                                                        Add Vlogs!
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

export default Vlogform