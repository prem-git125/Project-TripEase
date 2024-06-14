import React from 'react'
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useParams, useEffect } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import storage from '../firebaseConfig';
import { FaBookmark, FaHeart, FaRegBookmark } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
// import { FaComments } from "react-icons/fa";
import { FaComments } from "react-icons/fa6"
import { FaRegComment } from "react-icons/fa";
import { IoSendSharp } from "react-icons/io5";
import Swal from 'sweetalert2';
import "../App.css"
// import post5 from "../assets/images/resources/posts/post-5.jpg"
// import bg21 from "../assets/images/background/bg-gradient-21.png"
// import bg22 from "../assets/images/background/bg-gradient-22.png"


const ExplorePost = () => {

    const userid = localStorage.getItem("uid");
    const [img, setImg] = useState(null);
    const [imgs, setImgs] = useState(null);
    const [data, setData] = useState([]);
    const [SinglePost, setSinglePost] = useState([]);
    const [postid, setpostid] = useState(0)
    const [cities, setCities] = useState([]);
    const [fdata, setFdata] = useState({})
    const guiderID = localStorage.getItem("gid"); // Provide the guider ID
    const [progress, setProgress] = useState(0);
    const [Diarydata, setDiarydata] = useState([])
    const [Like, setlike] = useState(false);
    const [Save, setsave] = useState(false);
    const [loading, setLoading] = useState(false);
    const [Cformdata, setCFormData] = useState({})
    const [cmt, setCmt] = useState([])
    const [count, setCount] = useState(0)
    
    const [formData, setFormData] = useState({
        post_title: '',
        postFile: null,
        diary_id:null,
        post_description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
        console.log(formData)
    };

    const handleDiaryChange = (e) => {
        const { name, value } = e.target;
        setFdata(prevData => ({ ...prevData, [name]: value }))
        console.log(fdata)
    }

    const handleCommentChange = (e) => {
        const { name, value } = e.target;
        setCFormData(prevData => ({ ...prevData, [name]: value }))
        console.log(Cformdata)
    }


    const fetchDiaries = async () => {
        try {
            const response = await fetch(`http://localhost:7000/api/displayDiaries/${guiderID}`);

            if (!response.ok) {
                throw new Error(`HTTP error status ${response.status}`)
            }
            const jsonData = await response.json()
            setDiarydata(jsonData);

        } catch (error) {
            console.error("Error In Fetching Data : ", error)
        }
    }

    const fetchPosts = async () => {
        try {
            const response = await fetch(`http://localhost:7000/api/displayPost/${userid}`);

            if (!response.ok) {
                throw new Error(`HTTP error status ${response.status}`)
            }
            const jsonData = await response.json()
            setData(jsonData);

        } catch (error) {
            console.error("Error In Fetching Data : ", error)
        }
    }

    const fetchCity = async () => {
        try {
            const response = await fetch("http://localhost:7000/api/cityDisplay")
            if (!response.ok) {
                throw new Error(`HTTP Error status ${response.status}`)
            }
            const jsonData = await response.json();
            setCities(jsonData)
        } catch (error) {
            console.error("Error in fetching Data", error)
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.postFile == null) {
            alert("Select Image first");
        } else {
            try {
                const storageRef = ref(storage, `Postimg/${formData.post_title.split(" ").join("").toLowerCase()}.jpg`);
                const uploadTask = uploadBytesResumable(storageRef, formData.postFile);
                uploadTask.on("state_changed", (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setProgress(progress);
                },
                    (error) => {
                        console.error(error);
                    },
                    async () => {
                        const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
                        const date = new Date();
                        const response = await fetch(`http://localhost:7000/api/post/${guiderID}`, {
                            method: "POST",
                            headers: {
                                "content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                post_title: formData.post_title,
                                post_cover: downloadUrl,
                                post_urlname: `${formData.post_title.split(" ").join("").toLowerCase()}.jpg`,
                                post_description: formData.post_description,
                                guiderid: guiderID,
                                diary_id: formData.diary_id,
                                post_data_time: date
                            })
                        });
                        if (!response.ok) {
                            console.error(response.status);
                        } else {
                            // alert(response.statusText);
                            Swal.fire({
                                position: "top",
                                icon: "success",
                                title: "Post Added Successfully",
                                showConfirmButton: false,
                                timer: 3500
                              });
                        }
                    });
            } catch (err) {
                console.error(err);
            }
        }
    }; 

    


    const handleDiarySubmit = async (e) => {
        e.preventDefault();
        if (fdata.Diaryfile == null) {
            alert("Select an image first");
        } else {
            try {
                const currentDate = new Date();
                const storageRef = ref(
                    storage,
                    `diaryimg/${fdata.diary_title.split(" ").join("").toLowerCase()}.jpg`
                );
                const uploadTask = uploadBytesResumable(storageRef, fdata.Diaryfile);
                uploadTask.on(
                    "state_changed",
                    (snapshot) => { },
                    (error) => {
                        console.error(error);
                    },
                    async () => {
                        const downloadDiaryUrl = await getDownloadURL(uploadTask.snapshot.ref);
                        try {
                            const response = await fetch("http://localhost:7000/api/diaryadd", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                    diary_title: fdata.diary_title,
                                    cityid: fdata.cityid,
                                    guiderid: guiderID,
                                    diary_description: fdata.diary_description,
                                    diary_thumnail: downloadDiaryUrl,
                                    created_time_date: currentDate,
                                    diary_thumnail_urlname: `${fdata.diary_title.split(" ").join("").toLowerCase()}.jpg`
                                }),
                            });
                            if (!response.ok) {
                                throw new Error(response.statusText);
                            }
                            // alert("Diary added successfully");
                            Swal.fire({
                                position: "top",
                                icon: "success",
                                title: "Diary Added Successfully",
                                showConfirmButton: false,
                                timer: 3000
                              });
                        } catch (error) {
                            console.error("Error adding diary:", error);
                            alert("Failed to add diary");
                        }
                    }
                );
            } catch (error) {
                console.error(error);
                alert("An error occurred while processing the image");
            }
        }
    };

    const handleComments = async (e) => {
        const dt = new Date();
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:7000/api/addComment`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    comments: Cformdata.comments,
                    postid: postid,
                    uid: userid,
                    cmt_date_time: dt
                }),
            });
            if (!response.ok) {
                throw new Error("HTTP ERROR " + response.status);
            }
            const data = await response.json();
            if (data.err) {
                console.log(data.err);
            }
        } catch (err) {
            //console.error(err);
        }
    };


    const fetchSinglePost = async () => {
        try {
            setLoading(true);
            const response = await fetch(`http://localhost:7000/api/SinglePost/${postid}`);
            if (!response.ok) {
                throw new Error(`HTTP error status ${response.status}`)
            }
            const jsonData = await response.json()
            setSinglePost(jsonData)
            console.log(jsonData);
        } catch (error) {
            console.error("Error In Fetching Data : ", error)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (postid !== 0) {
            fetchSinglePost();
        }
    }, [postid]);



    useEffect(() => {
        fetchPosts()
        fetchCity()

    })

    useEffect(() => {
        fetchDiaries()
    })
    const fetchlike = async () => {
        try {
            const res = await fetch(`http://localhost:7000/api/likedata/${userid}`);
            if (!res.ok) {
                throw new Error("Error In HTTP : " + res.status);
            } else {
                const data = await res.json();
                let liked = false;
                for (let i = 0; i < data.length; i++) {
                    if (postid == data[i].postid) {
                        liked = true;
                        break;
                    }
                }
                setlike(liked); // Set Like state based on whether the post is liked or not
            }
        } catch (err) {
            console.error(err);
        }
    };

    // Inside useEffect for fetchlike
    useEffect(() => {
        fetchlike();


    }, [postid]); // Add postid as dependency
    useEffect(() => {
        fetchCount();
    })
    // Inside handleLike function
    const handleLike = async () => {
        try {
            const response = await fetch(
                `http://localhost:7000/api/like/${postid}/${userid}`,
                {
                    method: Like ? "DELETE" : "POST", // Toggle like state
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            if (!response.ok) {
                throw new Error(`HTTP ERROR:${Response.status}`);
            }
            const data = await response.json();
            if (data.err) {
                console.log(data.err);
            }
            setlike(!Like); // Toggle Like state
        } catch (error) {
            console.error(error);
        }
    };


    const fetchCount = async () => {
        try {
            const response = await fetch(
                `http://localhost:7000/api/countlikes/${postid}`,

            );
            if (!response.ok) {
                throw new Error(`HTTP ERROR:${Response.status}`);
            }
            const data = await response.json();
            if (data.err) {
                console.log(data.err);
            }

            setCount(data[0].likeCount);
        } catch (error) {
            //console.error(error);
        }

    }

    const [cmtCount, setcmtCount] = useState([])

    const fetchCmtCount = async () => {
        try {
            const response = await fetch(
                `http://localhost:7000/api/countComment/${postid}`,

            );
            if (!response.ok) {
                throw new Error(`HTTP ERROR:${Response.status}`);
            }
            const data = await response.json();
            if (data.err) {
                console.log(data.err);
            }

            setcmtCount(data[0].commentCount);
        } catch (error) {
            //console.error(error);
        }

    }

    const fetchComment = async () => {
        try {
            const response = await fetch(
                `http://localhost:7000/api/displayComment/${postid}`
            );
            if (response.status === 404) {

                console.log("No comments found for this thread.");

            } else if (!response.ok) {
                throw new Error("HTTP Error: " + response.statusText);
            } else {
                const commentsData = await response.json();
                setCmt(commentsData);

            }
        } catch (err) {
            console.error(err)
        }
    };

    useEffect(() => {
        fetchComment();
    })

    useEffect(() => {
        fetchCmtCount();
    })

    const fetchSave = async () => {
        try {
            const res = await fetch(`http://localhost:7000/api/savedata/${userid}`);
            if (!res.ok) {
                throw new Error("Error In HTTP : " + res.status);
            } else {
                const data = await res.json();
                let saved = false;
                for (let i = 0; i < data.length; i++) {
                    if (postid == data[i].postid) {
                        saved = true;
                        break;
                    }
                }
                setsave(saved); // Set Like state based on whether the post is liked or not
            }
        } catch (err) {
            console.error(err);
        }
    };


    const handleSave = async () => {
        try {
            const response = await fetch(
                `http://localhost:7000/api/save/${userid}/${postid}`,
                {
                    method: Save ? "DELETE" : "POST", // Toggle like state
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            if (!response.ok) {
                throw new Error(`HTTP ERROR:${Response.status}`);
            }
            const data = await response.json();
            if (data.err) {
                console.log(data.err);
            }
            setsave(!Save); // Toggle Like state
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchSave();


    }, [postid]); // Add postid as dependency

    return (
        <>
            {/* Post form  */}
            <div>
                <div className="modal fade show" id="exampleModal" tabIndex="2" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="title-box centered mb-2" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div className="subtitle" style={{ paddingTop: '20px' }}>Add Posts</div>
                                </div>
                            </div>
                            <div className="modal-body" style={{ backgroundColor: '#ff5522' }}>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label style={{ color: 'white' }} htmlFor="exampleInputEmail1" className="form-label"></label>
                                        <input style={{ backgroundColor: '#ff5522' }} placeholder='Post Title' type="text" className="form-control" name='post_title' onChange={(e) => handleChange(e)} id="posttitle" aria-describedby="emailHelp" />

                                    </div>
                                    <div className='col-lg-6'>
                                        <input style={{ backgroundColor: '#ff5522' }} type="file" name='post_cover' className="form-control" onChange={(e) => {
                                            setFormData(prevData => ({ ...prevData, postFile: e.target.files[0] }));
                                            setImg(URL.createObjectURL(e.target.files[0]));
                                        }} />
                                        <label style={{ color: 'white' }} className="form-label" htmlFor="form3Example1"></label>
                                    </div>

                                    <div className='mb-2'>
                                        <select style={{ backgroundColor: '#ff5522' }} className='custom-select' name='diary_id' onChange={(e) => handleChange(e)} >
                                            <option style={{ color: 'white' }}>---Select Diary---</option>
                                            {Diarydata.map((Ditems) => (
                                                <option key={Ditems.diary_id} value={Ditems.diary_id}>{Ditems.diary_title}</option>
                                            ))}
                                              <option>None</option>
                                        </select>
                                        <label style={{ color: 'white' }} htmlFor="exampleDiary " className="form-label"></label>
                                    </div>

                                    <div className="mb-2">

                                        <textarea placeholder='Post Description' style={{ backgroundColor: '#ff5522' }} className="form-control" name='post_description' onChange={(e) => handleChange(e)} id="exampleFormControlTextarea1" rows="2"></textarea>
                                    </div>

                                </form>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-danger" data-toggle="modal" data-target="#Diary">Add Diaries</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-outline-primary" onClick={handleSubmit} >Add Post</button>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Diary Form  */}

                <div className="modal fade" id="Diary" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog " role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="title-box centered mb-2" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div className="subtitle" style={{ paddingTop: '20px' }}>Add Diary</div>
                                </div>

                            </div>
                            <div className="modal-body" style={{backgroundColor:'#ff5522'}}>

                                <form onSubmit={handleDiarySubmit}>
                                    <div className="mb-3">
                                        <input style={{backgroundColor:'#ff5522'}} type="text" className="form-control" id="exampleDiaryTitle" name='diary_title' onChange={e => handleDiaryChange(e)} aria-describedby="TitleHelp" placeholder="Enter Diary Title" />
                                    </div>

                                    <div className="mb-4">
                                        <input style={{backgroundColor:'#ff5522'}} type="file" className="form-control" id="exampleDiaryImg" name='diary_thumnail' aria-describedby="ImgHelp" onChange={(e) => {
                                            setFdata(prevData => ({ ...prevData, Diaryfile: e.target.files[0] }));
                                            setImgs(URL.createObjectURL(e.target.files[0]));
                                        }} />
                                    </div>

                                    <div className="mb-3">
                                        <textarea style={{backgroundColor:'#ff5522'}} className="form-control" placeholder='Enter Diary Description' name='diary_description' onChange={e => handleDiaryChange(e)} id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>

                                    <div className='mb-4'>
                                        <select style={{backgroundColor:'#ff5522'}} className="custom-select" name='cityid' onChange={e => handleDiaryChange(e)}>
                                            <option selected>Select City</option>
                                            {cities.map((items) => (
                                                <option key={items.cityid} value={items.cityid}>{items.cityName}</option>
                                            ))}
                                        </select>
                                    </div>
                                </form>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-outline-primary" onClick={handleDiarySubmit}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="inner-banner">
                    <div className="image-layer" style={{ backgroundImage: `url(https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)` }} >
                    </div>
                    <div className="auto-container">
                        <div className="content-box">
                            <h1>Explore Posts</h1>
                            <div className="bread-crumb">
                                <ul className="clearfix">
                                    <li className='current'><Link to={"/home"}>Home</Link></li>
                                    <li className="current">Explore Posts</li>
                                </ul>

                                {/* trigger button  */}
                                {guiderID == null ? "" : <button className='btn btn-success' data-toggle="modal" data-target="#exampleModal">Add Post</button>}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Display Post  */}

            <div className="news-two py-3">
                <div className="auto-container">
                    <div className="news-box">

                        <div className="row clearfix">
                            {data && data.map((posts) => (
                                <div className="news-block-two col-lg-3 col-md-6 col-sm-12 wow fadeInUp" onClick={() => setpostid(posts.postid)} data-toggle="modal" data-target="#singlePost" key={posts.postid} data-wow-duration="1500ms"
                                    data-wow-delay="0ms">
                                    <div className="inner-box position-relative">
                                        <div className="image-box">
                                            <img
                                                src={posts.post_cover} alt="" style={{ height: "250px", objectFit: "cover" }} />

                                        </div>
                                        <div className='position-absolute top-0 end-0 m-3 badge rounded-pill' style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                                            <img src={posts.url} style={{ width: "30px", height: "30px" }} className='rounded-circle object-fit-cover border-3 border-light border'></img>
                                            &nbsp;&nbsp;<span className='text-light'>{posts.nick_name}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="modal fade" id="singlePost" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div className="modal-dialog" style={{ marginLeft: "450px" }} role="document" >
                                    <div className="modal-content" style={{ width: '650px', backgroundColor: 'transparent', border: '0px solid transparent' }}>
                                        <div className="modal-body" >
                                            {Array.isArray(SinglePost) && SinglePost.map(((items) => (
                                                <div className="card" key={items.postid} style={{ width: "15rem;" }}>
                                                    <img src={items.post_cover} className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <div className='d-flex justify-content-between align-items-center'>
                                                            <div>
                                                                {Like ? (
                                                                    <><FaHeart onClick={handleLike} color='red' />{" "}{count}{" "}</>
                                                                ) : (
                                                                    <><FaRegHeart onClick={handleLike} color='black' />{" "}{count}{" "}</>
                                                                )}
                                                                <><FaRegComment style={{ width: "33px" }} data-toggle="modal" data-target="#CommentModal" />{""}{cmtCount}</>
                                                            </div>
                                                            {Save ? (
                                                                <><FaBookmark onClick={handleSave} color='black' /></>
                                                            ) : (
                                                                <><FaRegBookmark onClick={handleSave} color='black' /></>
                                                            )}
                                                        </div>
                                                        <h3 className="card-title text-uppercase mt-3">{items.post_title}</h3>
                                                        <p className="card-text" style={{ margin: "0px", padding: "0px" }}>{items.post_description}</p>

                                                        {/* <div className="form-floating d-flex ">
                                                            <textarea className="form-control" style={{width:"85%"}} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                                            <label for="floatingTextarea">Comments</label>
                                                            <button className='btn mx-3'><IoSendSharp/></button>
                                                        </div> */}
                                                    </div>

                                                </div>
                                            )))}

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="modal fade" id="CommentModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div className="modal-dialog" style={{ marginLeft: "400px" }} role="document" >
                                    <div className="modal-content" style={{ width: '750px', height: "650px", backgroundColor: 'white', border: '0px solid transparent' }}>
                                        <div className="modal-body " >
                                            <div className='d-flex'>
                                                <textarea className="form-control" onChange={(e) => handleCommentChange(e)} name='comments' placeholder="Leave a comment here" id="floatingTextarea2" style={{ width: "95%" }}></textarea>
                                                <button type="button" onClick={(e) => handleComments(e)} className='btn' ><IoSendSharp color='#ff5522' /></button>
                                            </div>
                                            <hr></hr>
                                            <div className='row'>
                                                {cmt && cmt.map((comments) => (
                                                    <div className='col-md-4'>
                                                        <div class="card border-0 shadow my-3">
                                                            <div className='card-body'>
                                                                <h6 class="title ">{comments.comments}</h6>
                                                                <p class="description m-0" style={{ fontSize: "12px" }} >{new Date(comments.cmt_date_time).toDateString()}</p>
                                                                <div class="actions mt-1" style={{ fontSize: "10px" }}>
                                                                    Posted By : {comments.uname}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
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

export default ExplorePost
