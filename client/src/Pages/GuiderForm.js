import React, { useEffect, useState } from 'react'
import "../Editprofile.css"
import storage from '../firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { useParams,useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const GuiderForm = () => {
    const { uid } = useParams();
    const [formData, setFormData] = useState({});
    const [tempImg, setImg] = useState(null)
    const [uploadProg, setProg] = useState(0)
    const [city, setCity] = useState();
    const nav = useNavigate()

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        console.log(formData);
    }

    const fetchCity = async () => {
        try {
            const response = await fetch(`http://localhost:7000/api/citydata`);
            if (!response.ok) {
                throw new Error(`HTTP error status ${response.status}`);
            }
            const jsonData = await response.json();
            setCity(jsonData);
            console.log(jsonData);
        } catch (error) {
            console.error("Error In Fetching Data:", error);
        }
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.imgfile === null) {
            alert("Select Image First");
        }
        else {
            try {
                const storageRef = ref(
                    storage,
                    `GuiderImg/${formData.nick_name.split(" ").join("").toLowerCase()}.jpg`
                );
                const uploadTask = uploadBytesResumable(storageRef, formData.imgfile);
                uploadTask.on(
                    "state_changed",
                    (snapshot) => setProg((snapshot.bytesTransferred / snapshot.totalBytes) * 100),
                    (error) => {
                        console.error(error)
                    },
                    async () => {
                        const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
                        const response = await fetch(`http://localhost:7000/api/guiderAdd/${uid}`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                uid: uid,
                                nick_name: formData.nick_name,
                                cover_photo: downloadUrl,
                                bio: formData.bio,
                                cityid: formData.cityid,
                                youtube_link: formData.youtube_link,
                                fb_link: formData.fb_link,
                                insta_link: formData.insta_link,
                                cover_urlname: `GuiderImg/${formData.nick_name.split(" ").join("").toLowerCase()}.jpg`
                            })
                        }
                        )
                        if (!response.ok) {
                            console.error(response.status);
                        }
                        else {

                            const GuiderResponse = await fetch(`http://localhost:7000/api/getGuider/${uid}`)
                            if (!GuiderResponse.ok) {
                                throw new Error(`HTTP error status ${GuiderForm.status}`);
                            }
                            else {
                                const jsonData = await GuiderResponse.json();
                                console.log(jsonData);
                                localStorage.setItem("gid", jsonData[0].guiderid)

                                const response2 = await fetch(`http://localhost:7000/api/updVistor/${uid}`, {
                                    method: "PUT",
                                    headers: {
                                        "Content-type": "Application/json"
                                    },
                                    body: JSON.stringify({
                                        utype: "Guider"
                                    })
                                })

                                if (!response2.ok) {
                                    console.error(response.statusText)
                                } else {
                                    // console.log("Data Updated Successfully")
                                    Swal.fire({
                                        position: "top",
                                        icon: "success",
                                        title: "Congratulation You become a Guider",
                                        showConfirmButton: false,
                                        timer: 3500
                                      });

                                      nav("/home")
                                }
                            }
                        }
                    }
                )
            } catch (error) {
                console.error(error)
            }
        }
    }


    useEffect(() => {
        fetchCity()
    }, [])
    return (

        <>
            <section className="h-100 bg-image"
                style={{
                    backgroundImage: "url('https://images.pexels.com/photos/2533092/pexels-photo-2533092.jpeg')",
                }}>
                <div className="mask d-flex align-items-center h-50 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-md-6">
                                <div className="card my-3  bg-grade bg-transparent border-0" >
                                    <div className="card-body p-3" style={{ backgroundColor:'#ff5522',borderRadius:'30px' }}>
                                        <h2 className="text-uppercase text-light text-center mb-4" style={{fontFamily:'cursive'}}>Guider Form</h2>

                                        <form onSubmit={(e) => handleSubmit(e)}>

                                            <table className='table table-borderless'>
                                                <tbody>
                                                    <tr>
                                                        <td><label className="form-label text-light" for="form3Example1cg">Your Nick Name</label></td>
                                                        <td><input type="text" id="form3Example1cg" name='nick_name' className="form-control form-control-lg" onChange={e => handleChange(e)} /></td>
                                                    </tr>

                                                    <tr>
                                                        <td>  <label className="form-label text-light" for="form3Example3cg">Enter Bio</label></td>

                                                        <td> <textarea className='form-control form-control-lg' name='bio' for="GuiderBio" id='GuiderBio' rows="4" onChange={e => handleChange(e)}></textarea></td>
                                                    </tr>

                                                    <tr>
                                                        <td><label className="form-label text-light" for="guiderCover"> Add Cover Photo</label></td>

                                                        <td><input type="file" name='cover_photo' id="guiderCover" className="form-control form-control-md" onChange={(e) => {
                                                            setFormData((prevData) => ({ ...prevData, imgfile: e.target.files[0] }))
                                                            setImg(URL.createObjectURL(e.target.files[0]))
                                                        }} /></td>
                                                    </tr>

                                                    <tr>
                                                        <td><label className="form-label text-light" for="guiderCover">City</label></td>

                                                        <td>
                                                            <div className="dropdown">
                                                                <select
                                                                    className="form-control"
                                                                    name="cityid"
                                                                    onChange={(e) => handleChange(e)}
                                                                >
                                                                    <option>Select City</option>
                                                                    {Array.isArray(city) &&
                                                                        city.map((item) => {
                                                                            return (
                                                                                <option
                                                                                    key={item.cityid}
                                                                                    value={item.cityid}
                                                                                >
                                                                                    {item.cityName}
                                                                                </option>
                                                                            );
                                                                        })}
                                                                </select>
                                                            </div>
                                                        </td>
                                                    </tr>


                                                    <tr>
                                                        <td> <label className="form-label text-light" for="form3Example4cg">Youtube Link</label></td>

                                                        <td><input type="text" name='youtube_link' id="form3Example4cg" className="form-control form-control-lg" onChange={e => handleChange(e)} /></td>
                                                    </tr>

                                                    <tr>
                                                        <td> <label className="form-label text-light" for="form3Example4cdg">Facebook Link</label></td>

                                                        <td><input type="text" id="form3Example4cdg" name='fb_link' className="form-control form-control-lg" onChange={e => handleChange(e)} /></td>
                                                    </tr>

                                                    <tr>
                                                        <td> <label className="form-label text-light" for="form3Example4cg">Instagram Link</label></td>

                                                        <td><input type="text" id="form3Example4cg" name='insta_link' className="form-control form-control-lg" onChange={e => handleChange(e)} /></td>
                                                    </tr>


                                                    <tr>
                                                        <td colSpan={2} align='center'><button type="submit"
                                                            className="btn btn-outline-dark btn-block btn-lg gradient-custom-4 text-light" >Become A Guider</button></td>
                                                    </tr>
                                                </tbody>

                                            </table>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GuiderForm
