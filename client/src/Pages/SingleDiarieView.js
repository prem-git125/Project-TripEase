import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from 'react-router-dom';

const SingleDiarieView = () => {
    const { diary_id } = useParams(); // Access diaryid from URL params
    const [SingleDiary, setSingleDiary] = useState([]);
    const [DairyPost, setDairyPost] = useState([]);



    useEffect(() => {
        if (diary_id !== null) {
            const fetchSingleDiary = async () => {
                try {
                    const response = await fetch(`http://localhost:7000/api/Dairy/${diary_id}`);
                    if (!response.ok) {
                        throw new Error(`HTTP error Status ${response.status}`);
                    }
                    const jsonData = await response.json();
                    setSingleDiary(jsonData[0]);
                    console.log(jsonData);
                } catch (error) {
                    console.error(error);
                }
            };

            const fetchDiaryPost = async () => {
                try {
                    const response = await fetch(`http://localhost:7000/api/SingleDiary/${diary_id}`);
                    if (!response.ok) {
                        throw new Error(`HTTP error Status ${response.status}`);
                    }
                    const jsonData = await response.json();
                    setDairyPost(jsonData);
                    // console.log({ "data": DairyPost });
                } catch (error) {
                    console.error(error);
                }
            };
            fetchSingleDiary();
            fetchDiaryPost();
        }

    },[]); // Ensure useEffect runs only when diaryid changes

    return (
        <div>
            <div style={{ backgroundImage: `url(${SingleDiary && SingleDiary.diary_thumnail})`, height: "400px", backgroundSize: "cover", backgroundAttachment: "fixed", backgroundColor: "rgba(0,0,0,0.5)", backgroundBlendMode: "multiply" }} className='d-flex justify-content-center align-items-center flex-column' >
                <h4 className='h1 text-light'>{SingleDiary && SingleDiary.diary_title}</h4>
                <p className='text-light'>{SingleDiary && SingleDiary.diary_description}</p>
            </div>
            <div className='container'>
                <div className="row clearfix mt-4">
                    {DairyPost && DairyPost.map((posts) => (
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

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default SingleDiarieView;
