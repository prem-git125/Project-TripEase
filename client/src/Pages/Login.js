import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import mainLogo from "../assets/images/mainlogo.png";
import '../style.css';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; 

function Login() {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [token, setToken] = useState("")
    const [id, setId] = useState(0)
    const [eml, setEml] = useState("")
    const [url, setUrl] = useState("")
    const navigate = useNavigate()
    const stoken = localStorage.getItem("token");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:7000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, pwd })
            });

            if (!response.ok) {
                // alert("Incorrect Username and Password");
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Incorrect Username or password"
                  });
              
                return;
            }

            const userData = await response.json();

            if (userData.result.utype === "Guider") {
                const guidersResponse = await fetch("http://localhost:7000/api/glogin", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ uid: userData.result.uid })
                });

                const guiderData = await guidersResponse.json();
                console.log(guiderData);
                localStorage.setItem("uid", userData.result.uid);
                localStorage.setItem("email", userData.result.email);
                localStorage.setItem("token", userData.token);
                localStorage.setItem("url", userData.result.url);
                localStorage.setItem("name", userData.result.uname);
                localStorage.setItem("gid", guiderData.guiderid);
                if (userData.result.status === "true") {
                    navigate("/blocked");
                }
                else {
                    navigate("/home")
                }


            } else {
                localStorage.setItem("uid", userData.result.uid);
                localStorage.setItem("email", userData.result.email);
                localStorage.setItem("token", userData.token);
                localStorage.setItem("url", userData.result.url);
                localStorage.setItem("name", userData.result.uname);
                if (userData.result.status === "true") {
                    navigate("/blocked");
                }
                else {
                    navigate("/home")
                }

            }
        } catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {
        const stoken = localStorage.getItem("token");

        if (stoken !== null) {
            navigate("/home");
        }
    },);

    useEffect(() => {
        const stoken = localStorage.getItem("token");

        if (stoken === null) {
            navigate("/");

        } else {
            setToken(localStorage.getItem("token"))
            setId(localStorage.getItem("id"))
            setEml(localStorage.getItem("email"))
            setUrl(localStorage.getItem("url"))
            navigate("/home");
        }
    }, [navigate]);

    // console.log(data)
    // const { token, uid, guiderid, eml, url, uname } = data;
    // localStorage.setItem("token", token);
    // localStorage.setItem("email", eml);
    // localStorage.setItem("url", url);
    // localStorage.setItem("name", uname);
    // localStorage.setItem("uid", uid);
    // if (guiderid) {
    //     localStorage.setItem("gid", guiderid);
    // }
    // navigate("/home");


    return (
        <>
            <div className=''>
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
                                                        <span className="h1 fw-bold mb-0"><img src={mainLogo} className=' d-block mx-auto' style={{ width: '60%' }}></img></span>
                                                    </div>
                                                    <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>
                                                    <div className="form-outline mb-4">
                                                        <input type="email" id="" className="form-control form-control-lg" name='email' value={email} onChange={e => setEmail(e.target.value)} />
                                                        <label className="form-label" htmlFor="form2Example17">Email address</label>
                                                    </div>
                                                    <div className="form-outline mb-4">
                                                        <input type="password" id="form2Example27" className="form-control form-control-lg" name='pwd' value={pwd} onChange={e => setPwd(e.target.value)} />
                                                        <label className="form-label" htmlFor="form2Example27">Password</label>
                                                    </div>
                                                    <div className="pt-1 mb-2">
                                                        <input className="btn btn-dark btn-lg btn-block" type="submit" value={"Login"}></input>
                                                    </div>
                                                    <a className="small text-muted" href="#!">Forgot password?</a>
                                                    <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <Link to={"/reg"} href="#!" style={{ color: '#393f81' }}>Register here</Link></p>
                                                    <a href="#!" className="small text-muted">Terms of use.</a>
                                                    <a href="#!" className="small text-muted">Privacy policy</a>
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

export default Login