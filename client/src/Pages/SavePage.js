import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from 'react';
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
function SavePage() {
    const userid = localStorage.getItem("uid");
    const [data, setData] = useState([]);

    const fetchsave = async () => {
        try {
            const response = await fetch(`http://localhost:7000/api/savedisplay/${userid}`);

            if (!response.ok) {
                throw new Error(`HTTP error status ${response.status}`)
            }
            const jsonData = await response.json()
            setData(jsonData);

        } catch (error) {
            console.error("Error In Fetching Data : ", error)
        }
    }

    const handlesaveRemove = async (saveid) => {
        console.log(saveid)
        try {
            const response = await fetch(
                `http://localhost:7000/api/removesave/${saveid}`,
                {
                    method: "DELETE",
                }
            );
            if (!response.ok) {
                console.log(response)
            }
            else {
                console.log(response)
            }
        } catch (err) {
            console.error(err);
        }
    };


    useEffect(() => {
        fetchsave();
    })
    return (
        <>
            <div className="news-two py-3 mt-5">
                <div className="title-box centered wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div className="subtitle">Saved Post</div>
                </div>
                <div className="auto-container">
                    <div className="news-box">
                        <div className="row clearfix">
                            {data && data.map((posts) => (
                                <div className="news-block-two col-lg-3 col-md-6 col-sm-12 wow fadeInUp" key={posts.postid} data-wow-duration="1500ms"
                                    data-wow-delay="0ms">
                                    <div className="inner-box position-relative">
                                        <div className="image-box"><img
                                            src={posts.post_cover} alt="" style={{ height: "250px", objectFit: "cover" }} /></div>
                                        <button className='btn position-absolute top-0 end-0' style={{ color: "white" }} onClick={e => handlesaveRemove(posts.save_id)}>
                                            <FaBookmark />
                                        </button>
                                        <div className="lower-box">
                                            <ul className="info clearfix p-0 m-0">
                                                <li><button className='btn disabled border-0 text-dark px-0'><i className="fa-solid fa-clock"></i>{new Date(posts.post_date_time).toDateString()}</button></li>
                                            </ul>
                                            <h4 className=' text-capitalize'>{posts.post_title}</h4>
                                            <p>{posts.post_description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default SavePage
