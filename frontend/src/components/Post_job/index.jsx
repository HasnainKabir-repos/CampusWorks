import axios from "axios";
import { useState } from "react";
import Footer from "../Footer"
import TopBar from "../TopBar"
import { WithContext as ReactTags } from "react-tag-input";
const Post_job = () => {

    const [data, setData] = useState({ jobName: "", jobDescription: "", jobDuration: "", price: "", keywords:[]});
    const [error, setError] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [tags, setTags] = useState([]);

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
         
	};

    const handleDelete = (i) => {
        const newTags = tags.filter((tag, index) => index !== i);
        setData({ ...data, keywords: newTags.map((tag) => tag.text) });
        setTags(newTags);
    };

    const handleAddition = (tag) => {
        const newTags = [...tags, tag];
        setData({ ...data, keywords: newTags.map((tag) => tag.text) });
        setTags(newTags);
    };    

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{

            const token = localStorage.getItem('token');
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };

            const url = "http://localhost:8080/api/jobs";
            const { data: res } = await axios.post(url, data, config);
            console.log(data);
            setIsModalVisible(true);
        }
        catch(error){
            if(
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }
    };

    return(
        <>
            <div className="flex flex-col min-h-screen bg-gray-100">
                <TopBar />
                <main className="flex pt-20 items-center justify-center rounded-lg ">

                    <div class = "flex flex-row">

                    <div class="w-1/4 bg-gray-100">
                        <div class="p-4">
                        <h1 class="text-3xl font-bold mb-4 text-green-600">Post a Job</h1>
                        <p class="text-gray-700 text-lg">Provide some details about your job and we'll help you find the right candidates.</p>
                        </div>

                        <div class="p-4">
                        <h2 class="text-xl font-bold mb-2 text-green-600">What type of job is it?</h2>
                        <p class="text-gray-700 text-lg">Choose whether the job is hourly or fixed price.</p>
                        </div>

                        <div class="p-4 pt-8">
                        <h2 class="text-xl font-bold mb-2 text-green-600">Provide more details</h2>
                        <p class="text-gray-700 text-lg">Provide a description for your job as well as write down the job details.</p>
                        </div>
                    </div>

                        <div className="w-1/2 flex items-center justify-center rounded-lg shadow-lg bg-white ">
                            <div className="rounded-lg w-full">
                            <div className="bg-green-600 px-3 pt-2 rounded-t-lg w-full h-10">
                                <h1 className="font-medium text-white">Create a new Job</h1>
                            </div>

                            <div className=" p-5">

                            
                            <form onSubmit={handleSubmit}>
                                    <div class="relative z-0 w-full mb-6 group">
                                        <input type="text" name="jobName" onChange={handleChange} value = {data.jobName}
                                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer" 
                                        placeholder=" " 
                                        required />
                                            <label for="jobName" 
                                            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                                Title
                                            </label>
                                    </div>
                                        <div class="relative z-0 w-full mb-6 group">
                                        <label for="jobDuration" class="block mb-2 text-sm font-medium text-gray-900 ">Job Type:</label>
                                                <select 
                                                required
                                                onChange={handleChange}
                                                name = "jobDuration"
                                                value={data.jobDuration}
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-green-500 block w-full p-2.5 ">
                                                    <option value="">Select</option>
                                                    <option value="Hourly">Hourly</option>
                                                    <option value="Fixed">Fixed price</option>
                                                
                                                </select>
                                        </div>
                                        
                                    <div class="relative z-0 w-full mb-6 group">
                                        <input type="number" name="price" onChange={handleChange} value = {data.price}
                                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer" 
                                        placeholder=" " 
                                        required />
                                            <label for="price" 
                                            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                                Price
                                            </label>
                                    </div>

                                    <div class="grid md:grid-cols-2 md:gap-6">
                                        <div class="relative z-0 w-full mb-6 group">
                                            <textarea type="text" 
                                            name="jobDescription"
                                            onChange={handleChange}
                                            value = {data.jobDescription}
                                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent h-28 w-40 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-500 peer" 
                                            placeholder=" " 
                                            required ></textarea>
                                            <label for="jobDescription" class="peer-focus:font-medium absolute  text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                            Description</label>
                                        </div>
                                        
                                    </div>
                                    
                                    <div class="relative z-0 w-full mb-6 group">
                                        
                                        <div class="relative">
                                        <label for="keywords" class="block mb-2 text-sm font-medium text-gray-900 ">Keywords:</label>
                                            <ReactTags
                                                tags={tags}
                                                handleDelete={handleDelete}
                                                handleAddition={handleAddition}
                                                classNames={{
                                                    tags: 'flex flex-wrap gap-2 mt-2',
                                                    tag: 'inline-flex items-center px-2 py-1 rounded-full bg-green-500 text-white text-sm font-medium',
                                                    tagInput: 'w-full bg-gray-100 p-2 rounded-lg',
                                                    tagInputField: 'w-full focus:outline-none',
                                                  }}
                                                placeholder="Add keywords"
                                                inputFieldPosition="top"
                                            />
                                        </div>
                                    </div>


                                    <div class="relative z-0 w-full mb-6 group">
                                        {error && <div className="bg-red-500 px-5 rounded-lg font-normal text-white">{error}!</div>}
                                    </div>

                                    <button type="submit" 
                                    class="text-white bg-emerald-600 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-green-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
                                </form>
                            
                                </div>
                            </div>
                        </div>


                        <div class="w-1/4 bg-gray-100">
                            
                            <div class="p-4">
                            <h2 class="text-xl font-bold mb-2 text-green-600">What is the job about?</h2>
                            <p class="text-gray-700 text-lg">Provide a title for your job.</p>
                            </div>
                           
                            <div class="p-4 pt-20">
                            <h2 class="text-xl font-bold mb-2 text-green-600">How much are you willing to pay?</h2>
                            <p class="text-gray-700 text-lg">Provide a price for the job.</p>
                            </div>

                            <div class="p-4 pt-20">
                            <h2 class="text-xl font-bold mb-2 text-green-600">What are the keywords associated with this job?</h2>
                            <p class="text-gray-700 text-lg">Add keywords for this job to get more accurate searches. <br />
                                                            (Press Enter to add a new keyword).</p>
                            </div>
                        </div>
                    </div>
                    
                    
                    {isModalVisible && (
                        <div
                            id="successModal"
                            className="fixed inset-0 z-50 flex justify-center items-center bg-gray-900 bg-opacity-50"
                        >
                            <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                            <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                                <button
                                type="button"
                                className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-toggle="successModal"
                                >
                                <svg
                                    aria-hidden="true"
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                    ></path>
                                </svg>
                                <span className="sr-only">Close modal</span>
                                </button>
                                <div className="w-12 h-12 rounded-full bg-green-100 p-2 flex items-center justify-center mx-auto mb-3.5">
                                <svg
                                    aria-hidden="true"
                                    className="w-8 h-8 text-green-500 dark:text-green-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                    ></path>
                                </svg>
                                <span className="sr-only">Success</span>
                                </div>
                                    <p class="mb-4 text-lg font-semibold text-gray-900 ">Job Created Successfully.</p>
                                    <button 
                                    data-modal-toggle="successModal" 
                                    type="button" 
                                    onClick={() =>{
                                        setIsModalVisible(false);
                                        window.location.reload();
                                    } }
                                    class="py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-emerald-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 0">
                                        Continue
                                    </button>
                                </div>
                                </div>
                            
                        </div>)}

                </main>
                    <Footer />
            </div>  
            


        </>
        
    );

};

export default Post_job;


