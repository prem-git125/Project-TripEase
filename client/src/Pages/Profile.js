import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../profile.css';
import bg from "../assets/images/resources/featured/featured-4.jpg"
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {
    const [data, setData] = useState({})
    const uid = localStorage.getItem("uid")
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

    const fetchData = () => {
        fetch(`http://localhost:7000/api/profile/${uid}`)
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
        if (uid === null) {
            navigate("/")
        }
        else {
            fetchData()
        }

    }, [])


    return (
        <>
            <div className=' w-100 vh-100 position-relative' style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}>
                <div className='card position-absolute top-50 w-50 start-50 translate-middle'>
                    <div className='card-body w-100 '>
                        <div className='row'>
                            <div className='col-md-5'>
                                <img src={data.url} alt="" className="w-100 rounded" style={{ zIndex: '1',height:"250px", objectFit: "cover" }} />

                            </div>
                            <div className='col-md-7'>
                                <h1 className='text-capitalize'>{data.uname}</h1>
                                <h6 className='fw-normal '>{data.email}</h6>
                                <p className='mb-5'>Registered On : {new Date(data.reg_date_time).toDateString()}</p>
                                <div className='d-flex justify-content-between pt-5' >
                                    <Link to={`/editprofile/${uid}`} type="button" className="btn btn-outline-dark w-25" data-mdb-ripple-color="dark" style={{ zIndex: '1' }}>
                                        Edit profile
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
            <Link to={`/allsave/${uid}`} type='button' className='btn position-absolute top-0 end-0' style={{ color: "white" }}><i className="fa-solid fa-bookmark" style={{ color: "white" }} ></i></Link>
        </>
    );
};

export default Profile;
