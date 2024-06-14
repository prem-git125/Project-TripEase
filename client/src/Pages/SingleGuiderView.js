import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { FaComment, FaHeart } from 'react-icons/fa'
const SingleGuiderView = () => {
    const [vdata, setvData] = useState([])
    const [pdata, setpData] = useState([])
    const [Diarydata, setDiarydata] = useState([])
    const [countFollow, setcountFollow] = useState([])
    const [Follow, setFollow] = useState(false)
    const { uid } = useParams();
    const userid = localStorage.getItem("uid");
    const [data, setData] = useState([])


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



    const fetchFollowCount = async () => {
        const response = await fetch(`http://localhost:7000/api/countFollow/${uid}`)
        if (!response.ok) {
            console.error(response);
        } else {
            const resData = await response.json()
            setcountFollow(resData[0])
        }
    }


    useEffect(() => {
        fetchFollowCount()
    }, [uid])

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
                        return { ...post, commentCount }; // Add commentCount to the post object
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


    useState(() => {
        fetchCmtCount()

    })

    const fetchFollow = async () => {
        try {
            const res = await fetch(`http://localhost:7000/api/followdata/${uid}/${userid}`);
            if (!res.ok) {
                throw new Error("Error In HTTP : " + res.status);
            } else {
                const data = await res.json();
                console.log(data)
                const followed = data.followStatus; // Assuming follow status is received as data.followStatus
                setFollow(followed); // Update the Follow state based on received follow status
            }
        } catch (err) {
            console.error(err);
        }
    };


    // const handleFollow = async () => {
    //     try {
    //         const response = await fetch(
    //             `http://localhost:7000/api/addFollow/${userid}/${followerid}`,
    //             {
    //                 method: Follow ? "DELETE" : "POST", // Toggle like state
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                 },
    //             }
    //         );
    //         if (!response.ok) {
    //             throw new Error(`HTTP ERROR:${Response.status}`);
    //         }
    //         const data = await response.json();
    //         if (data.err) {
    //             console.log(data.err);
    //         }
    //         setfollow(!Follow); // Toggle Like state
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    const handleFollow = async () => {
        try {
            const response = await fetch(
                `http://localhost:7000/api/addFollow/${uid}/${userid}`,
                {
                    method: Follow ? "DELETE" : "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            if (!response.ok) {
                throw new Error(`HTTP ERROR: ${response.status}`);
            }
            const data = await response.json();
            if (data.error) {
                console.log(data.error);
            } else {
                setFollow(!Follow); // Toggle follow state only if request succeeds
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchFollow();
    },[userid]);

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
                                {/* <button className='btn btn-primary d-flex mx-auto m-2' style={{backgroundColor:"#ff5522"}} >Follow</button> */}
                                {Follow ? (
                                    <><button className='btn btn-primary d-flex mx-auto m-2' onClick={(e) => handleFollow(e)} style={{ backgroundColor: "#ff5522" }} >Following {Follow}</button></>
                                ) : (
                                    <><button className='btn btn-primary d-flex mx-auto m-2' onClick={(e) => handleFollow(e)} style={{ backgroundColor: "#ff5522" }} >Follow {Follow}</button></>
                                )}

                                <div className='d-flex justify-content-between border-top border-bottom-0 border-end-0 border-start-0 border border-2'>

                                    <div className='card w-25 border-0'>
                                        <div className='card-body'>
                                            <h4 style={{ color: "#ff5522" }}>{pdata.length}</h4>
                                            <h6>Posts</h6>
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
                                            <h4 style={{ color: "#ff5522" }}>{vdata.length}</h4>
                                            <h6>Vlogs</h6>
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
                                                    <div className="image-box"><a href="blog-single-2.html"><img
                                                        src={posts.post_cover} alt="" style={{ height: '250px', width: '100%', objectFit: "cover" }} /></a></div>
                                                    <div className="lower-box">
                                                        <ul className="info clearfix p-0 d-none">
                                                            <li><a href="#"><i className="fa-solid fa-comments"></i> 238</a></li>
                                                        </ul>
                                                        <h5 className='text-capitalize'>{posts.post_title}</h5>
                                                        <p>{posts.post_description}</p>
                                                        <div className='d-flex justify-content-between align-items-center' style={{ width: "100px" }}>
                                                            <div><FaHeart color='red' />{'  '}{posts.likeCount}</div>
                                                            <div><FaComment color='blue' />{'  '}{posts.commentCount}</div>

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
                                <div className="news-block-two col-lg-3 col-md-6 col-sm-12 wow fadeInUp" key={diary.diary_id} data-wow-duration="1500ms"
                                    data-wow-delay="0ms">
                                    <Link to={`/singleDiary/${diary.diary_id}`}>
                                        <div className="inner-box">
                                            <div className="image-box"><a href="blog-single-2.html"><img
                                                src={diary.diary_thumnail} alt="" style={{ height: '250px', width: '100%', objectFit: "cover" }} /></a></div>
                                            <div className="lower-box">
                                                <ul className="info clearfix p-0 d-none">
                                                    <li><a href="#"><i className="fa-solid fa-comments"></i> 238</a></li>
                                                </ul>
                                                <h5 className='text-capitalize'>{diary.diary_title}</h5>
                                                <p>{diary.diary_description}</p>

                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default SingleGuiderView
