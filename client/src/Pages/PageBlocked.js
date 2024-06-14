import React from 'react'
import { useNavigate } from "react-router-dom"
const PageBlocked = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("uid")
        localStorage.removeItem("name")
        localStorage.removeItem("email")
        localStorage.removeItem("url")
        navigate('/', { replace: true });

    }
    return (
        <div className='bg-black vh-100 wv-100 d-flex justify-content-center align-items-center'>
            <div className='text-center'>
                <h1 className='text-danger'>You Have Been Blocked From Accessing This Website</h1>
                <h2 className='text-light'>Contact <a href='mailto:hello@tripease.com'>hello@tripease.com</a></h2>
                <button className='btn btn-danger w-50' onClick={() => handleLogout()}>Logout</button>
            </div>
        </div>
    )
}

export default PageBlocked