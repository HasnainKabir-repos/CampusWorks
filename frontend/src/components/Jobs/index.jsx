import TopBar from "../TopBar";
import axios from 'axios';
import { useState, useEffect } from "react";
import Footer from "../Footer";
const Jobs = () =>{

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/jobs')
          .then(response => {
            setJobs(response.data);
            //console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          });
    }, []);
      
    return(
        <>
            <TopBar />
            <main className="pt-20 bg-gray-100 min-h-screen">

            <div class = "flex flex-col">

                <div className="flex min-w-screen items-center justify-center bg-gradient-to-r from-green-500 to-cyan-500 h-36">
                    <h1 className="font-roboto text-white text-4xl font-bold animate-pulse">
                        {jobs.length} jobs and counting!
                        <span className="animate-bounce ml-2">🚀</span>
                    </h1>
                </div>

                <div className="flex flex-wrap items-center justify-center"> 
                    <div className="flex flex-col gap-4 mt-5 mb-5">

                    {jobs.map(job => (
                        <div className="bg-white rounded-lg shadow p-4" key={job._id}>
                            <h2 className="font-bold text-lg">{job.jobName}</h2>
                            <p className="py-1 text-gray-600">{job.jobDescription}</p>
                            <p className="py-1 text-gray-600">Job Type: {job.jobDuration}</p>
                            <p className="py-1 text-gray-600">Rate/Price: {job.price}</p>
                            <button 
                                type="submit" 
                                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-green-500 to-cyan-500 hover:bg-gradient-to-r hover:from-green-400 hover:to-cyan-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 shadow-sm"
                                >
                                Apply Now
                            </button>
                        </div>
                        ))}
                    </div>
                </div>
            </div>

                
            </main>
            <Footer />
        </>
    );
};

export default Jobs;