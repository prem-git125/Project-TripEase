import { BrowserRouter, Route, Routes } from "react-router-dom";
import Country from "./Pages/Country";
import State from "./Pages/State";
import City from "./Pages/City";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";
import AllCountries from "./Components/AllCountries";
import Signup from "./Pages/Signup";
import UpdatePage from "./Pages/UpdatePage";
import SingleCity from "./Pages/SingleCity";
import SinglePlace from "./Pages/SinglePlace";
import SavePage from "./Pages/SavePage"
import EditProfile from "./Components/EditProfile";
import GuiderForm from "./Pages/GuiderForm";
import Vlogform from "./Pages/Vlogform";
import ExploreVlog from "./Pages/ExploreVlog";
import AboutWeb from "./Pages/AboutWeb";
import GuiderProfile from "./Pages/GuiderProfile";
import ExplorePost from "./Pages/ExplorePost";
import AllGuiders from "./Pages/AllGuiders";
import SingleGuiderView from "./Pages/SingleGuiderView";
import SingleDiarieView from "./Pages/SingleDiarieView";
import Login from "./Pages/Login"
import { useState,useEffect } from "react";
import PageBlocked from "./Pages/PageBlocked";

function App() {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const [status, setStatus] = useState();

  const fetchStatus = async () => {
    try {
      if (!uid) {
        console.error('No user id found.');
        return;
      }

      const response = await fetch(`http://localhost:7000/api/statuscheck/${uid}`);
      if (!response.ok) {
        throw new Error(`HTTP error Status ${response.status}`);
      }

      const jsonData = await response.json();
      if (jsonData.length > 0) {
        const userStatus = jsonData[0].status.trim().toLowerCase(); // Trim and convert to lowercase
        if (userStatus === 'true') {
          setStatus(true);
        } else if (userStatus === 'false') {
          setStatus(false);
        } else {
          console.error('Invalid status value:', userStatus);
        }
      } else {
        console.error('No status data found in response.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchStatus();
  }, [uid]);


  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={uid != null ? status ? <PageBlocked /> : <Country /> : <Login />} />
          <Route path="/home" element={status ? <PageBlocked /> : <Country />} />
          <Route path="/blocked" element={<PageBlocked />} />
          <Route path="/home" element={<Country />} />
          <Route path="/states/:cid" element={<State />} />
          <Route path="/city/:sid" element={<City />} />
          <Route path="/scity/:cityid" element={<SingleCity />} />
          <Route path="/splace/:placeid" element={<SinglePlace/>}></Route>
          <Route path="/contactus" element={<Contact />} />
          <Route path="/allcountry" element={<AllCountries />} />
          <Route path="/profile/:uid" element={<Profile />} />
          <Route path="/guiderprofile/:uid" element={<GuiderProfile/>}></Route>
          <Route path="/editprofile/:uid" element={<UpdatePage />} />
          <Route path="/guiderform/:uid" element={<GuiderForm/>}></Route>
          <Route path="/reg" element={<Signup/>}></Route>
          <Route path="/AddVlogs/:guid" element={<Vlogform/>}></Route>
          <Route path="/ExploreVlogs/:guid" element={<ExploreVlog/>}></Route>
          {/* <Route path="/ExploreDiaries" element={<ExploreDiaries/>}></Route> */}
          <Route path="/AboutUs" element={<AboutWeb/>}></Route>
          <Route path="/allguider" element={<AllGuiders/>}></Route>
          <Route path="/explorePost" element={<ExplorePost/>}></Route>
          <Route path="/allsave/:uid" element={<SavePage/>}></Route>
          <Route path="/guiderSingle/:uid" element={<SingleGuiderView/>}></Route>
          <Route path="/singleDiary/:diary_id" element={<SingleDiarieView/>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <GuiderForm/> */}
    </>
  );
}

export default App;
