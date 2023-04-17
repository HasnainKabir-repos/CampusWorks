import TopBar from "../TopBar";
import Footer from "../Footer";
import { useState, useEffect } from "react";
import axios from "axios";
const MyJobs = () =>{

    const [jobs, setJobs] = useState([]);


    useEffect(() => {

        const token = localStorage.getItem('token');
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        axios.get('http://localhost:8080/api/myjobs', config)
        .then(response => {
            setJobs(response.data);
            //console.log(response.data);
        })
        .catch(error =>{
            console.log(error);
        });
    }, []);

    return(
        <>
        <TopBar />

        <main className="pt-20 bg-gray-100 min-h-screen">

            <div class="flex flex-col">

                <div className="flex min-w-screen items-center justify-center bg-gradient-to-r from-green-500 to-cyan-500 h-36">
                    <h1 className="font-roboto text-white text-4xl font-bold animate-pulse">
                        You have posted {jobs.length} jobs
                        <span className="animate-bounce ml-2">💼</span>
                    </h1>
                </div>


                <div className="flex flex-wrap items-center justify-center"> 
                <div className="w-full md:w-1/2 px-4">
                    {jobs.map(job => (
                    <div className="bg-white rounded-lg shadow p-4 mb-4" key={job._id}>
                        <h2 className="font-bold text-lg mb-2">{job.jobName}</h2>
                        <p className="text-gray-600">{job.jobDescription}</p>
                        <div className="flex flex-wrap justify-between mt-4">
                        <div>
                            <p className="text-gray-600"><span className="font-bold">Job Type:</span> {job.jobDuration}</p>
                            <p className="text-gray-600"><span className="font-bold">Rate/Price:</span> {job.price}</p>
                        </div>
                        {job.keywords.length > 0 && (
                            <div className="py-1">
                            <span className="font-bold text-gray-700">Keywords:</span>
                            <div className="flex flex-wrap mt-1">
                                {job.keywords.map((keyword, index) => (
                                <span className="mr-2 mb-2 px-3 py-1 rounded-full bg-gray-200 text-gray-800 font-medium text-sm" key={index}>
                                    {keyword}
                                </span>
                                ))}
                            </div>
                            </div>
                        )}
                        </div>
                    </div>
                    ))}
                </div>
                </div>

            </div>

        </main>

        <Footer />
        </>
    )
}

export default MyJobs;