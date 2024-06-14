// import logo from './logo.svg';
import "./App.css";
// // import AboutWeb from "./Components/AboutWeb.js";
// // import Navbar from "./Components/Navbar.js";
// import Signup from "./Pages/Signup.js";
// // import Navbar2 from "./Components/Navbar2";
// // import CountryCard from "./Components/CountryCard";
// // import Csignup from "./Pages/Csignup";
// // import Signup from "./Pages/Signup";
import CountryHandle from "./Pages/CountryHandle";
import StateHandle from "./Pages/StateHandle";
import Cityadmin from "./Pages/Cityadmin";
import PlaceHandle from "./Pages/PlaceHandle";
// import NavbarAdmin from "./Components/NavbarAdmin";
// import ProfileAdmin from "./Pages/ProfileAdmin.js";
import Csignup from "./Pages/Csignup.js";
import Adminlogin from "./Pages/Adminlogin.js";
import Insertadmin from "./Pages/Insertadmin.js";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import NavbarAdmin from "./Components/NavbarAdmin.js";
import Posthandle from "./Pages/Posthandle.js";
import Vloghandle from "./Pages/Vloghandle.js";
import Vlogchart from "./Pages/Vlogchart.js";
import Postchart from "./Pages/Postchart.js";
import Userchart from "./Pages/Userchart.js";
import Charts from "./Pages/Charts.js";
import DiaryHandle from "./Pages/DiaryHandle.js";

function App() {
  const token = localStorage.getItem("token");
  const aid = localStorage.getItem("aid");
  console.log(aid)
  return (
    <>
      <BrowserRouter>
        <div className="row justify-content-end">
          <div >
            <Routes>
              <Route exact path="/" element={aid != null ? <Charts /> : <Adminlogin />}></Route>
              {/*<Route path="/profileadmin" element={<ProfileAdmin />}></Route> */}
              <Route path="/Csignup" element={<Csignup />}></Route>
              <Route path="/country" element={<CountryHandle />}></Route>
              <Route path="/state" element={<StateHandle />}></Route>
              <Route path="/city" element={<Cityadmin />}></Route>
              <Route path="/place" element={<PlaceHandle />}></Route>
              <Route path="/insertadmin" element={<Insertadmin />}></Route>
              <Route path="/navbar" element={<NavbarAdmin />}></Route>
              <Route path="/post" element={<Posthandle />}></Route>
              <Route path="/vlog" element={<Vloghandle />}></Route>
              <Route path="/charts" element={<Charts />}></Route>
              <Route path="/diary" element={<DiaryHandle />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
