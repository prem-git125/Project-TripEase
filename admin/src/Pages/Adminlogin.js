import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// import '../style.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Adminlogin() {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [token, setToken] = useState("")
    const [aid, setAid] = useState(0)
    const [emil, setEmil] = useState("")
    const navigate = useNavigate();
    const stoken = localStorage.getItem("token");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/api/admin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, pwd }) // Simplified object property shorthand
            });

            if (!response.ok) {
                alert("Incorrect email and Password");
                return;
            }

            const adminData = await response.json();
            localStorage.setItem("aid", adminData.result.aid);
            localStorage.setItem("email", adminData.result.email);
            localStorage.setItem("token", adminData.token);
            localStorage.setItem("name", adminData.result.uname);  

            navigate("/charts");
        } catch (error) {
            console.error(error);
            alert("Failed to login. Please try again."); // Generic error message for failed login attempt
        }
    };

    useEffect(() => {
        const stoken = localStorage.getItem("token");

        if (stoken === null) {
            navigate("/");
        }
        else {
            navigate("/charts")
        }
    })

    // useEffect(() => {
    //     const stoken = localStorage.getItem("token");

    //     if (stoken === null) {
    //         navigate("/");
    //     }
    //     else {
    //         setToken(localStorage.getItem("token"))
    //         setId(localStorage.getItem("aid"))
    //         setEml(localStorage.getItem("email"))
    //         navigate("/charts")
    //     }
    // }, [navigate]);

    useEffect(() => {
        const stoken = localStorage.getItem("token");

        if (stoken === null) {
            navigate("/");

        } else {
            setToken(localStorage.getItem("token"));
            setAid(localStorage.getItem("aid"))
            setEmil(localStorage.getItem("email"))
            navigate("/charts");
        }
    }, [navigate]);

    return (
        <>
            <div className='w-100'>
                <section className="vh-100" style={{ backgroundImage: 'linear-gradient(90deg, black 50%, cadetblue)' }}>
                    <div className="container py-2 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col col-xl-10">
                                <div className="card" style={{ borderRadius: '1rem' }}>
                                    <div className="row g-0">
                                        <div className="col-md-6 col-lg-5 d-none d-md-block">
                                            <img src="https://images.pexels.com/photos/4205464/pexels-photo-4205464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                                alt="login form" className="" style={{ borderRadius: '1rem 0 0 1rem', width: "100%", height: "95vh" }} />
                                        </div>
                                        <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                            <div className="card-body p-4 p-lg-5 text-black">
                                                <form onSubmit={e => handleSubmit(e)}>
                                                    <div className="d-flex align-items-center mb-4 pb-1">
                                                        {/* <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i> */}
                                                        {/* <span className="h1 fw-bold mb-0"><img src={mainLogo} className=' d-block mx-auto' style={{ width: '60%' }}></img></span> */}
                                                    </div>
                                                    <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Admin Login</h5>
                                                    <div className="form-outline mb-4">
                                                        <input type="email" id="" className="form-control form-control-lg" name='email' value={email} onChange={e => setEmail(e.target.value)} />
                                                        <label className="form-label" htmlFor="form2Example17">Email</label>
                                                    </div>
                                                    <div className="form-outline mb-4">
                                                        <input type="password" id="form2Example27" className="form-control form-control-lg" name='pwd' value={pwd} onChange={e => setPwd(e.target.value)} />
                                                        <label className="form-label" htmlFor="form2Example27">Password</label>
                                                    </div>
                                                    <div className="pt-1 mb-2">
                                                        <input type='submit' className="btn btn-primary" value={"Login"} />
                                                    </div>
                                                </form>
                                            </div>
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

export default Adminlogin