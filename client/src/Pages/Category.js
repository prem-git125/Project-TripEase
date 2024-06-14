import React, { useEffect } from 'react'
import { useState } from 'react'

const Category = () => {
    const [cat, setCategory] = useState();

    const fetchData = async () => {
        const response = await fetch("http://localhost:7000/api/categorydata")
        if (!response.ok) {
            console.error(response.statusText)
        }
        else {
            const resData = await response.json();
            setCategory(resData)
            console.log(resData)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <div className='container-fluid bg-light'>
                <div className='container'>
                    <div className='d-flex justify-content-evenly py-3 pt-5 '>
                        {Array.isArray(cat) && cat.map((item) => {
                            return <div className='rounded p-3 text-center shadow z-2' style={{ borderColor: "#e5e5e5", backgroundColor: "rgba(255,255,255,0.8)" }}>
                                <img src={item.caturl} style={{ width: "35px", height: "35px" }} />
                                <h6 className='fw-normal mt-2'>{item.catName}</h6>
                            </div>
                        })}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Category