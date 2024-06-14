import React, { useEffect, useState } from 'react'
import "../Editprofile.css"
import storage from '../firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { useParams } from 'react-router-dom';

function DiaryForm() {
    const [formData,setFormData]=useState({});
    const [tempImg,setImg]=useState(null);
    const [uploadProg,setProg]=useState(0)
    const [city,setCity]=useState();

    const handleChange=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setFormData((prevData)=>({...prevData,[name]:value}));
        console.log(formData);
    }

    const fetchCity = async()=>{
        try{
            const response=await fetch(`http://localhost:7000/api/citydata`);
            if(!response.ok)
            {
                throw new Error(`HTTP error status ${response.status}`);
            }
            const jsonData = await response.json();
            setCity(jsonData);
            console.log(jsonData);
        }catch(error){
            console.error("Error In Fetching Data:",error);
        }
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(formData.imgfile===null){
            alert("Select Image First");
        }
        else{
            try{
                const storageRef = ref(
                    storage,
                    `DiaryImg/${formData.diary_title.split(" ").join("").toLowerCase()}.jpg`
                );
                
                const uploadTask = uploadBytesResumable(storageRef,formData.imgfile);
                uploadTask.on(
                    "state_changed",
                    (snapshot)=>setProg((snapshot.bytesTransferred/snapshot.totalBytes)*100),
                    (error)=>{
                        console.error(error)
                    },
                    async()=>{
                        const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
                        const response = await fetch(`http://localhost:7000/api/diaryAdd`,{
                            method:"POST",
                            headers:{
                                "Content-Type":"application/json",
                            },
                            body:JSON.stringify({
                                diary_title:formData.diary_title,
                                cityid:formData.cityid,
                                guider_id:formData.guider_id,
                                diary_description:formData.diary_description,
                                diary_thumnail:downloadUrl,
                                created_time_date:formData.created_time_date,
                                diary_thumnail_urlname:`DiaryImg/${formData.diary_title.split(" ").join("").toLowerCase()}.jpg`
                            })
                        })
                        if (!response.ok) {
                            console.error(response.status);
                        }
                        else{
                            console.log("Data inserted");
                        } 
                    }
                )
            }catch(error){
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
                                    <div className="card-body p-3" style={{ backgroundColor: "rgba(0,0,0,0.5) !important" }}>
                                        <h2 className="text-uppercase text-light text-center mb-5">Diary Form</h2>

                                        <form onSubmit={(e) => handleSubmit(e)}>

                                            <table className='table table-borderless'>
                                                <tbody>
                                                    <tr>
                                                        <td><label className="form-label text-light" for="form3Example1cg">Diary-Title</label></td>
                                                        <td><input type="text" id="form3Example1cg" name='diary_title' className="form-control form-control-lg" onChange={e => handleChange(e)} /></td>
                                                    </tr>

                                                    <tr>
                                                        <td><label className="form-label text-light" for="guiderCover"> Add Cover Photo</label></td>

                                                        <td><input type="file" name='diary_thumnail' id="" className="form-control form-control-md" onChange={(e) => {
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
                                                                    onChange={e => handleChange(e)}
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
                                                        <td><label className="form-label text-light" for="form3Example1cg">Guider-ID</label></td>
                                                        <td><input type="text" id="form3Example1cg" name='guider_id' onChange={e => handleChange(e)} className="form-control form-control-lg"  /></td>
                                                    </tr>

                                                    <tr>
                                                        <td>  <label className="form-label text-light" for="form3Example3cg">Description</label></td>

                                                        <td> <textarea className='form-control form-control-lg' onChange={e => handleChange(e)} name='diary_description' for="GuiderBio" id='GuiderBio' rows="4"></textarea></td>
                                                    </tr>

                                                    <tr>
                                                        <td colSpan={2} align='center'><button type="submit"
                                                            className="btn btn-success btn-block btn-lg gradient-custom-4 text-light">Create Your Diary</button></td>
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

export default DiaryForm;