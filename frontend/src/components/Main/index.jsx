import TopBar from "../TopBar";
import Footer from "../Footer";
import avatar from "../../assets/avatar.png";
import job_search from "../../assets/job_search.png";
import write from "../../assets/write.png";
import { Link } from "react-router-dom";
import { FaPlus } from 'react-icons/fa';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { FaUserFriends, FaBriefcase, FaSearch } from 'react-icons/fa';
const Main = () => {

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
		<div className="bg-gray-100 h-full w-full ">
      <div className="fixed w-full z-10 top-0">
        <TopBar />
      </div>

		<div className="flex flex-col">

			<div className="mt-20">
				<div className="flex flex-wrap items-center justify-center bg-gradient-to-r from-green-500 to-cyan-500 h-80">

					<div className="mx-20 flex items-center justify-center">
						<div className="flex flex-col items-center justify-center">
						<div className="my-5 mb-10 flex items-center justify-center">
								<h1 className="font-roboto text-black text-6xl font-bold">CampusWorks</h1>
							</div>
							<div className="flex items-center justify-center">
								<p className="font-roboto text-white text-3xl font-bold">Connecting University Students with Opportunities: <br/>
								Find Part-time Jobs and Internships from your peers.</p>
							</div>
							
						</div>
						
					</div>
				</div>
				
			</div>
			
			<div className="flex flex-row items-center justify-center flex-wrap py-1 -mt-9">
				<div className="flex-1 m-2 py-1">
				<div class="rounded-xl bg-white shadow-lg ">

					<div class="flex flex-wrap w-full px-3 pt-3 bg-emerald-500">
					<h2 class="mb-4 text-lg font-medium text-white">Profile</h2>
					</div>

					<div class="flex flex-wrap items-center justify-center">
						<div class = "flex flex-col">
							<div class = "flex flex-wrap items-center justify-center px-5 py-5">
								<img src={avatar} width="50" height = "50" alt="avatar" />
							</div>

							<div class = "flex flex-wrap items-center justify-center px-5 py-1">
								<a href="" className="font-medium">{userInfo.name}</a>
							</div>
						</div>
					</div>
					
					

					<div class="flex flex-wrap">
						<div class="flex flex-col py-5">

							<div class="flex flex-row">
								<div className="flex-wrap pl-5">
									<h1 class="font-medium">Email:</h1>
								</div>
								<div className="flex-wrap pl-6">
									<h1 className="font-normal">{userInfo.email}</h1>
								</div>
							</div>

							<div class="flex flex-row">
								<div className="flex-wrap pl-5">
									<h1 class="font-medium">Department:</h1>
								</div>
								<div className="flex-wrap pl-6">
									<h1 className="font-normal">{userInfo.department}</h1>
								</div>
							</div>

							<div class="flex flex-row">
								<div className="flex-wrap pl-5">
									<h1 class="font-medium">Batch:</h1>
								</div>
								<div className="flex-wrap pl-6">
									<h1 className="font-normal">{userInfo.batch}</h1>
								</div>
							</div>



						</div>
					</div>
				</div>
				</div>

				<div className="flex-auto m-2 ">
					<div className="flex flex-col items-center justify-center ">
						<div className="bg-gradient-to-r from-emerald-50 to-cyan-100 p-8 rounded-lg shadow-md flex flex-col items-center w-4/5">
							<div className="flex items-center justify-center rounded-full w-16 h-16 bg-green-500 text-white mb-6">
							<FaUserFriends className="text-2xl" />
							</div>
							<h2 className="text-2xl font-bold mb-2">Find Your Dream Job</h2>
							<p className="text-gray-600 text-center mb-6">
							Looking for a new career opportunity? Browse our job listings and find your dream job today.
							</p>

							<div class = "flex flex-row">
								<Link to="/Jobs"className="mr-2 bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600 focus:outline-none focus:ring focus:border-green-500">
								<FaBriefcase className="mr-2" />
								Browse all Jobs
								</Link>

								<Link to="/search_results"className="ml-2 bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600 focus:outline-none focus:ring focus:border-green-500">
								<FaSearch className="mr-2" />
								Search for Jobs
								</Link>
							</div>
							
						</div>
					</div>
					<div className="flex flex-col items-center justify-center mt-10">
						<div className="bg-gradient-to-r from-emerald-50 to-cyan-100 p-8 rounded-lg shadow-md flex flex-col items-center w-4/5">
							<div className="flex items-center justify-center rounded-full w-16 h-16 bg-green-500 text-white mb-6">
							<FaPlus className="text-2xl" />
							</div>
							<h2 className="text-2xl font-bold mb-2">Post New Work</h2>
							<p className="text-gray-600 text-center mb-6">
							Share your latest creations with the world. Post new work and get noticed by potential clients and collaborators.
							</p>
							<Link to="/postjob" className="bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-500">
							<FaPlus className="mr-2" />
							Post Work
							</Link>
						</div>
					</div>
				</div>

				<div className="flex-1 m-2 mx-3">

					<div class= "rounded-xl bg-white shadow-lg">
						<div class="flex flex-wrap w-full px-3 pt-3 bg-emerald-500">
							<h2 class="mb-4 text-lg font-medium text-white">Inbox</h2>
						</div>

						<div class = "flex flex-wrap px-20 py-20">
							inbox will be added here
						</div>
					</div>

				</div>

			</div>

		</div>

		<Footer />
    </div>

		
	);
};

export default Main;