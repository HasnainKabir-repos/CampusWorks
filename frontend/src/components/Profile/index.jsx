import TopBar from "../TopBar";
import Footer from "../Footer";
import axios from 'axios';
import { useState, useEffect } from "react";
import avatar from "../../assets/avatar.png";
import { Link } from "react-router-dom";

const Profile = () => {
  const [userInfo, setUserInfo] = useState({});
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    const token = localStorage.getItem('token');
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

    axios.get('http://localhost:8080/api/user_info', config)
      .then(response => {
        setUserInfo(response.data);
      })
      .catch(error => {
        console.log(error);
      });
      axios.get('http://localhost:8080/api/userProfile', config)
      .then(response => {
        setUserProfile(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
   
  return (
  <div className="bg-gray-100 h-full w-full flex flex-col">
    <TopBar />

    <div className="max-w-md mx-auto min-h-screen mt-20">
  <div className="bg-white rounded-lg shadow-lg overflow-hidden p-5 flex">
    <div className="flex-shrink-0 mr-5">
      <img src={avatar} alt="avatar" className="w-24 h-24 rounded-full" />
    </div>

    <div>
      <h1 className="text-2xl font-medium mb-2">{userInfo.name}</h1>
      <p className="text-gray-600 mb-1">Email: {userInfo.email}</p>
      <p className="text-gray-600 mb-1">Department: {userInfo.department}</p>
      <p className="text-gray-600 mb-1">Batch: {userInfo.batch}</p>
      

      <Link
        to="/EditProfile"
        className="rounded-md bg-emerald-500 px-4 py-2 text-white hover:bg-teal-700 focus:border-green-600 focus:outline-none focus:ring"
      >
        Edit Profile
      </Link>
    </div>
  </div>
</div>

    <Footer />
  </div>
);

};


export default Profile;
