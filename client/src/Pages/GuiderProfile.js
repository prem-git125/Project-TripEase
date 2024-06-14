import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import "../App.css";
import bg21 from "../assets/images/background/bg-gradient-21.png"
import bg22 from "../assets/images/background/bg-gradient-22.png"
import { BsPostcardHeartFill } from "react-icons/bs";
import { FaComment, FaTrash } from 'react-icons/fa';
import { FaBookmark, FaHeart, FaRegBookmark } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
// import { FaComments } from "react-icons/fa";
import { FaComments } from "react-icons/fa6"
import { FaRegComment } from "react-icons/fa";
import { IoSendSharp } from "react-icons/io5";

const GuiderProfile = () => {
    const [vdata, setvData] = useState([])
    const [pdata, setpData] = useState([])
    const [Diarydata, setDiarydata] = useState([])
    const [countVlog, setcountVlogs] = useState([])
    const [countPost, setcountPost] = useState([])
    const [SinglePost, setSinglePost] = useState([]);
    const [diaryid, setDiaryid] = useState(0)
    const [SingleDiary, setSingleDiary] = useState([])
    const [countFollow, setcountFollow] = useState([])
    const [Like, setlike] = useState(false);
    const [Save, setsave] = useState(false);
    const [cmt, setCmt] = useState([])
    const [cmtCount, setcmtCount] = useState([])
    const [count, setCount] = useState(0)
    const [Cformdata, setCFormData] = useState({})
    const [loading, setLoading] = useState(false);
    const { uid } = useParams();
    const guiderID = localStorage.getItem("gid");
    const userid = localStorage.getItem("uid");
    const UID = localStorage.getItem("uid")
    const [data, setData] = useState([])
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("uid")
        localStorage.removeItem("name")
        localStorage.removeItem("email")
        localStorage.removeItem("url")
        localStorage.removeItem("gid")
        navigate("/")
    }

    const handleCommentChange = (e) => {
        const { name, value } = e.target;
        setCFormData(prevData => ({ ...prevData, [name]: value }))
        console.log(Cformdata)
    }

    const fetchData = () => {
        fetch(`http://localhost:7000/api/guiderprofile/${uid}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error status ${res.status}`)
                }
                return res.json();
            })
            .then(values => {
                setData(values[0])
                console.log(values[0])
            })
            .catch(err => alert(err))
    }
    useEffect(() => {
        fetchData();
    }, [])
    useEffect(() => {
        fetchVlog();

        fetchDiary();
    })

    const fetchSingleDiary = async () => {
        try {
            const response = await fetch(`http://localhost:7000/api/SingleDiary/${diaryid}`);
            if (!response.ok) {
                throw new Error(`HTTP error Status ${response.status}`)
            }
            const jsonData = await response.json()
            setSingleDiary(jsonData)
            console.log(jsonData)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        if (diaryid !== 0) {

            fetchSingleDiary()
        }
    }, [diaryid])

    const fetchDiary = async () => {
        try {
            const response = await fetch(`http://localhost:7000/api/diaryDisplay/${data.guiderid}`);

            if (!response.ok) {
                throw new Error(`HTTP error status ${response.status}`)
            }
            const jsonData = await response.json()
            setDiarydata(jsonData);
            // console.log(jsonData)

        } catch (error) {
            console.error("Error In Fetching Data : ", error)
        }
    }



    const fetchVlog = async () => {
        try {
            const response = await fetch(`http://localhost:7000/api/vlogDisplay/${data.guiderid}`);

            if (!response.ok) {
                throw new Error(`HTTP error status ${response.status}`)
            }
            const jsonData = await response.json()
            setvData(jsonData);
            // console.log(jsonData)

        } catch (error) {
            console.error("Error In Fetching Data : ", error)
        }
    }

    const handleDelete = async (vlogid) => {
        try {
            const response = await fetch(
                `http://localhost:7000/api/vlogdel/${vlogid}`,
                {
                    method: "DELETE",
                }
            );
            if (!response.ok) {
                throw new Error("HTTP Error: " + response.error);
            }
            const responseData = await response.json();
            // console.log(responseData);
            // navigate('/profile/:uid')
        } catch (err) {
            console.error(err);
        }
    };

    const handlepDelete = async (postid) => {
        try {
            const response = await fetch(
                `http://localhost:7000/api/postdel/${postid}`,
                {
                    method: "DELETE",
                }
            );
            if (!response.ok) {
                throw new Error("HTTP Error: " + response.error);
            }
            const responseData = await response.json();
        } catch (err) {
            console.error(err);
        }
    };

    const fetchVlogCount = async () => {
        const response = await fetch(`http://localhost:7000/api/countVlogs/${guiderID}`)
        if (!response.ok) {
            console.error(response)
        }
        else {
            const resdata = await response.json()
            setcountVlogs(resdata[0])
            // console.log(countVlog)
        }
    }

    const fetchPostCount = async () => {
        const response = await fetch(`http://localhost:7000/api/countPost/${guiderID}`)
        if (!response.ok) {
            console.error(response)
        } else {
            const resData = await response.json()
            setcountPost(resData[0])
        }
    }

    const fetchFollowCount = async () => {
        const response = await fetch(`http://localhost:7000/api/countFollow/${UID}`)
        if (!response.ok) {
            console.error(response);
        } else {
            const resData = await response.json()
            setcountFollow(resData[0])
        }
    }


    const handleDiaryDelete = async (diary_id) => {
        try {
            const response = await fetch(
                `http://localhost:7000/api/diarydel/${diary_id}`,
                {
                    method: "DELETE",
                }
            );
            if (!response.ok) {
                throw new Error("HTTP Error: " + response.error);
            }
            const responseData = await response.json();
            // console.log(responseData);

        } catch (err) {
            console.error(err);
        }
    }



   
    useEffect(() => {
        fetchVlogCount();
    }, [])

    useEffect(() => {
        fetchPostCount();
    }, [])

    useEffect(() => {
        fetchFollowCount()
    }, [])

    // Function to fetch comment count for a specific post
    const fetchCmtCount = async (postid) => {
        try {
            const response = await fetch(`http://localhost:7000/api/countComment/${postid}`);
            if (!response.ok) {
                throw new Error(`HTTP ERROR: ${response.status}`);
            }
            const data = await response.json();
            if (data.err) {
                console.log(data.err);
                return 0; // Return 0 if there's an error
            }
            return parseInt(data[0].commentCount); // Return the comment count as an integer
        } catch (error) {
            console.error(error);
            return 0; // Return 0 in case of error
        }
    };

    useEffect(() => {
        fetchCmtCount();
    })

    const fetchCount = async (postid) => {
        try {
            const response = await fetch(`http://localhost:7000/api/countlikes/${postid}`);
            if (!response.ok) {
                throw new Error(`HTTP ERROR: ${response.status}`);
            }
            const data = await response.json();
            if (data.err) {
                console.log(data.err);
            }
            return data[0].likeCount;
        } catch (error) {
            console.error(error);
            return 0; // Return 0 in case of error
        }
    };

    // useEffect to fetch posts and comment counts
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`http://localhost:7000/api/postDisplay/${data.guiderid}`);

                if (!response.ok) {
                    throw new Error(`HTTP error status ${response.status}`)
                }
                const jsonData = await response.json()
                setpData(jsonData);

                const updatedPdata = await Promise.all(
                    jsonData.map(async (post) => {
                        const commentCount = await fetchCmtCount(post.postid);
                        const likeCount = await fetchCount(post.postid);
                        return { ...post, commentCount, likeCount }
                        // return { ...post, commentCount }; // Add commentCount to the post object
                    })
                );
                setpData(updatedPdata);
                console.log(updatedPdata); // Check the updated data
            } catch (error) {
                console.error("Error In Fetching Data : ", error)
            }
        };

        fetchPosts(); // Call fetchPosts when component mounts
    }, [data.guiderid]); // Depend on data.guiderid to re-fetch when it changes





    // fetching posts 
    const [Postdata, setPostData] = useState([]);

    const fetchPosts = async () => {
        try {
            const response = await fetch(`http://localhost:7000/api/displayPost/${userid}`);

            if (!response.ok) {
                throw new Error(`HTTP error status ${response.status}`)
            }
            const jsonData = await response.json()
            setPostData(jsonData);

        } catch (error) {
            console.error("Error In Fetching Data : ", error)
        }
    }

    useEffect(() => {
        fetchPosts()
    })

    // fetching singlepost 
    const [postid, setpostid] = useState(0)
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

    // adding comments 

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

    useEffect(() => {
        if (postid !== 0) {
            fetchSinglePost();
        }
    }, [postid]);

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

    useEffect(() => {
        fetchlike();


    }, [postid]);
    useEffect(() => {
        fetchCount();
    })

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
            <div className='w-100 position-relative'>
                <img src={data.cover_photo} className='w-100' style={{ height: "100vh", objectFit: "cover", objectPosition: "100% 100%", filter: "blur(5px)" }} />
                <div className='w-100 position-absolute top-0 ' style={{ height: "100vh", backgroundColor: "rgba(0,0,0,0.7)" }}>
                    <div className='position-relative translate-middle-y' style={{ top: "25%" }} >
                        <img src={data.url} className='rounded-circle mx-auto d-block img-thumbnail' style={{ width: "200px", height: "200px", objectFit: "cover" }} />
                        <div className='card position-absolute  start-50 translate-middle-x z-n1 pt-5' style={{ width: "500px", top: "75%" }}>
                            <div className='card-body text-center title-box pb-0 mb-0'>
                                <h1 className='subtitle'>{data.nick_name}</h1>
                                <h4 className='text-capitalize text-muted '>Guider {data.uname}</h4>
                                <h6 style={{ color: "#ff5522" }}>{data.cityName}</h6>
                                <p className='travilo-text pt-0'>{data.bio}</p>
                                <div className='d-flex justify-content-between border-top border-bottom-0 border-end-0 border-start-0 border border-2'>
                                    <div className='card w-25 border-0'>
                                        <div className='card-body'>
                                            <h4 style={{ color: "#ff5522" }}>{countVlog.vcount}</h4>
                                            <h6>Vlogs</h6>
                                        </div>
                                    </div>
                                    <div className='card w-25 border-0'>
                                        <div className='card-body'>
                                            <h4 style={{ color: "#ff5522" }}>{countFollow.fcount}</h4>
                                            <h6>Followers</h6>
                                        </div>
                                    </div>
                                    <div className='card w-25 border-0'>
                                        <div className='card-body'>
                                            <h4 style={{ color: "#ff5522" }}>{countPost.pcount}</h4>
                                            <h6>Posts</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between p-3 px-5'>
                                    <Link to={data.fb_link}>
                                        <i className="fa-brands fa-square-facebook fa-2x" style={{ color: "#ff5522" }}></i>
                                    </Link>
                                    <Link to={data.youtube_link}>
                                        <i className="fa-brands fa-square-youtube fa-2x" style={{ color: "#ff5522" }}></i>
                                    </Link>
                                    <Link to={data.insta_link}>
                                        <i className="fa-brands fa-square-instagram fa-2x" style={{ color: "#ff5522" }}></i>
                                    </Link>
                                </div>
                                <div className='d-flex justify-content-between pb-3' >
                                    <Link to={`/editprofile/${uid}`} type="button" className="btn btn-outline-dark w-25" data-mdb-ripple-color="dark" style={{ zIndex: '1' }}>
                                        Edit Profile
                                    </Link>
                                    <button type="button" className="btn btn-outline-danger w-25" data-mdb-ripple-color="danger" style={{ zIndex: '1' }} onClick={handleLogout}>
                                        Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='container p-3'>
                <ul className="nav nav-tabs nav-fill nav-pills" role="tablist">
                    <li className="nav-item " role="presentation">
                        <a style={{ color: "#fffff" }} className="nav-link active" id="icon-tab-0" data-bs-toggle="tab" href="#icon-tabpanel-0" role="tab" aria-controls="icon-tabpanel-0" aria-selected="true">Posts</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a style={{ color: "#fffff" }} className="nav-link" id="icon-tab-1" data-bs-toggle="tab" href="#icon-tabpanel-1" role="tab" aria-controls="icon-tabpanel-1" aria-selected="false">Vlogs</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a style={{ color: "#fffff" }} className="nav-link" id="icon-tab-2" data-bs-toggle="tab" href="#icon-tabpanel-2" role="tab" aria-controls="icon-tabpanel-2" aria-selected="false">Diaries</a>
                    </li>
                </ul>

                {/* Posts  */}

                <div className="tab-content" id="tab-content">
                    <div className="tab-pane active" id="icon-tabpanel-0" role="tabpanel" aria-labelledby="icon-tab-0">
                        <div className="news-two  p-0 pt-3">
                            <div className="auto-container">

                                <div className="news-box">

                                    <div className="row clearfix mt-4">
                                        {pdata && pdata.map((posts) => (
                                            <div className="news-block-two col-lg-3 col-md-6 col-sm-12 wow fadeInUp" key={posts.postid} data-wow-duration="1500ms"
                                                data-wow-delay="0ms">
                                                <div className="inner-box">
                                                    <div className="image-box"><img
                                                        src={posts.post_cover} alt="" style={{ height: '250px', width: '100%', objectFit: "cover" }} /></div>
                                                    <div className="lower-box">
                                                        <ul className="info clearfix p-0 d-none">
                                                            <li><i className="fa-solid fa-comments"></i> 238</li>
                                                        </ul>
                                                        <h5 className='text-capitalize'>{posts.post_title}</h5>
                                                        <p>{posts.post_description}</p>
                                                        <div className='d-flex justify-content-between align-items-center' style={{ width: "100px" }}>
                                                            <div><FaHeart color='red' />{'  '}{posts.likeCount}</div>
                                                            <div><FaComment color='blue' />{'  '}{posts.commentCount}</div>
                                                            <button
                                                                onClick={() => handlepDelete(posts.postid)}
                                                            >
                                                                <FaTrash />
                                                            </button>
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

                    {/* Vlogs */}

                    <div className="tab-pane" id="icon-tabpanel-1" role="tabpanel" aria-labelledby="icon-tab-1">
                        <div className='row clearfix' >
                            {vdata &&
                                vdata.map((vlog) => (
                                    <div className="col-md-3 py-5" key={vlog.vlogid}>
                                        <div className="card">
                                            <video
                                                src={vlog.vurl}
                                                className='card-img-top'
                                                style={{ height: '200px', objectFit: "cover" }}
                                                controls
                                                poster={vlog.vthumbnail}
                                            >
                                            </video>
                                            <div className="card-body">

                                                <h3 className='text-uppercase'>{vlog.vname}</h3>
                                                <h6 className="travilo-text text-truncate">{vlog.v_description}</h6>

                                                <button
                                                    onClick={() => handleDelete(vlog.vlogid)}
                                                    className={"btn btn-danger float-end"} >
                                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>

                    {/* Diaries  */}

                    <div className="tab-pane" id="icon-tabpanel-2" role="tabpanel" aria-labelledby="icon-tab-2">
                        <div className="row clearfix mt-3 ">
                            {Diarydata && Diarydata.map((diary) => (
                                <div className="news-block-two col-lg-3 col-md-6 col-sm-12 wow fadeInUp"  key={diary.diary_id} data-wow-duration="1500ms"
                                    data-wow-delay="0ms" data-toggle="modal" data-target="#Vdiary" >
                                    <Link to={`/singleDiary/${diary.diary_id}`}>
                                        <div className="inner-box">
                                            <div className="image-box"><img
                                                src={diary.diary_thumnail} alt="" style={{ height: '250px', width: '100%', objectFit: "cover" }} /></div>
                                            <div className="lower-box">
                                                <ul className="info clearfix p-0 d-none">
                                                    <li><a href="#"><i className="fa-solid fa-comments"></i> 238</a></li>
                                                </ul>
                                                <h5 className='text-capitalize'>{diary.diary_title}</h5>
                                                <p>{diary.diary_description}</p>
                                                <button
                                                    onClick={() => handleDiaryDelete(diary.diary_id)}

                                                    className={"btn btn-danger float-end"}>
                                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div >
            <Link to={`/allsave/${uid}`} type='button' className='btn position-absolute top-0 end-0' style={{ color: "white" }}><i className="fa-solid fa-bookmark" style={{ color: "white" }} ></i></Link>
        </>
    )
}

export default GuiderProfile