import TopBar from "../TopBar";
import Footer from "../Footer";
import axios from 'axios';
import { useState, useEffect } from "react";

const Profile = () => {
  const [userInfo, setUserInfo] = useState({});

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
  }, []);

  return (
    <>
      <TopBar />
      <main className="pt-20 bg-gray-100 min-h-screen">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-4xl mb-8">Profile</h1>
          <div className="bg-white p-8 shadow-md rounded-lg w-96">
            <p className="text-gray-700 font-bold">Name:</p>
            <p className="text-gray-700">{userInfo.name}</p>
            <p className="text-gray-700 font-bold mt-4">Email:</p>
            <p className="text-gray-700">{userInfo.email}</p>
            <p className="text-gray-700 font-bold mt-4">Department:</p>
            <p className="text-gray-700">{userInfo.department}</p>
            <p className="text-gray-700 font-bold mt-4">Batch:</p>
            <p className="text-gray-700">{userInfo.batch}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Profile;
