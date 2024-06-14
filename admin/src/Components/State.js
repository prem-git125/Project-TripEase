import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "../firebaseConfig";

function State() {
  const [FormData, setFormData] = useState({});
  const [tempImg, setImg] = useState(null);
  const [uploadProg, setProg] = useState(0);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/countries");

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

      const data = await response.json();
      setData(data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    console.log(FormData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (FormData.imgfile == null) {
      alert("Select Image first");
    } else {
      try {
        const storageRef = ref(
          storage,
          `Uimg/${FormData.sname.split(" ").join("").toLowerCase()}.jpg`
        );
        const uploadTask = uploadBytesResumable(storageRef, FormData.imgfile);
        uploadTask.on(
          "state_changed",
          (snapshot) =>
            setProg((snapshot.bytesTransferred / snapshot.totalBytes) * 100),
          (error) => {
            console.error(error);
          },
          async () => {
            const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
            const response = await fetch("http://localhost:7000/api/data/add", {
              method: "POST",
              headers: {
                "content-Type": "application/json",
              },
              body: JSON.stringify({
                sname: FormData.sname,
                cid: FormData.cid,
                surl: downloadUrl,
                surlname: `${FormData.sname
                  .split(" ")
                  .join("")
                  .toLowerCase()}.jpg`,
                description: FormData.description,
              }),
            });
            if (!response.ok) {
              console.error(response.status);
            } else {
              alert(response.statusText);
            }
          }
        );
      } catch (err) {
        console.error(err);
      }
    }
  };
  return (
    <>
      <div className="container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3">
            <label className="form-label">State Name</label>
            <input
              type="text"
              name="sname"
              onChange={(e) => handleChange(e)}
              className="form-control"
              aria-describedby="emailHelp"
            ></input>
          </div>

          <div className="mb-3">
            <label className="form-label">Select Country Name</label>
            <select
              className="form-control"
              name="cid"
              onChange={(e) => {
                FormData.cid = parseInt(e.target.value);
              }}
            >
              {Array.isArray(data) &&
                data.map((item) => (
                  <option key={item.cid} value={item.cid}>
                    {item.cname}
                  </option>
                ))}
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">State Cover Photo</label>
            <input
              type="file"
              onChange={(e) => {
                setFormData((prevData) => ({
                  ...prevData,
                  imgfile: e.target.files[0],
                }));
                setImg(URL.createObjectURL(e.target.files[0]));
              }}
              className="form-control"
              name="surl"
            ></input>
          </div>

          <div className="mb-3">
            <label className="form-label">State Description</label>
            <input
              type="textarea"
              name="description"
              onChange={(e) => handleChange(e)}
              className="form-control"
              aria-describedby="emailHelp"
            ></input>
          </div>
          <input
            type="submit"
            className="btn btn-success"
            align="center"
          ></input>
        </form>
      </div>
    </>
  );
}

export default State;
