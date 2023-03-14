import axios from "axios";
import { useState } from "react";
import Footer from "../Footer"
import TopBar from "../TopBar"

const EditProfile = () => {

    const [data, setData] = useState({ Bio: "", Education: "", Result:"",Strength:"",
    Achievements:"",
    Experience:""});
    const [error, setError] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
         
	};
      

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{

            const token = localStorage.getItem('token');
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };

            const url = "http://localhost:8080/api/userProfile";
            const { data: res } = await axios.post(url, data, config);
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
                <main className="flex pt-20 items-center justify-center  rounded-lg ">
                    <div className="flex items-center justify-center  rounded-lg shadow-lg bg-white ">
                        <div className="rounded-lg">
                        <div className="bg-green-600 px-3 pt-2 rounded-t-lg w-full h-10">
                            <h1 className="font-medium text-white">Edit Profile</h1>
                        </div>

                        <div className=" p-5">

                        
                        <form onSubmit={handleSubmit}>
                                <div class="relative z-0 w-full mb-6 group">
                                    <input type="text" name="Result" onChange={handleChange} value = {data.Result}
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer" 
                                    placeholder=" " 
                                    />
                                        <label for="Result" 
                                        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                            Cgpa
                                        </label>
                                        </div>
                                        
                                        <div class="relative z-0 w-full mb-6 group">
                                    <input type="text" name="Strength" onChange={handleChange} value = {data.Strength}
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer" 
                                    placeholder="" 
                                     />
                                        <label for="Strength"
                                        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                            Add Strength
                                        </label>
                                </div>
                              
                                
                                        <div class="relative z-0 w-full mb-6 group">
                                    <input type="text" name="Experience" onChange={handleChange} value = {data.Experience}
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer" 
                                    placeholder=" " 
                                    />
                                        <label for="Experience"
                                        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                            Add Experience
                                        </label>
                                </div>
                                
                                        <div class="relative z-0 w-full mb-6 group">
                                    <input type="text" name="Achievements" onChange={handleChange} value = {data.Achievements}
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer" 
                                    placeholder=" " 
                                    />
                                        <label for="Achievements"
                                        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                            Add Achievements
                                        </label>
                                </div>
                               

                                    
                                <div class="relative z-0 w-full mb-6 group">
                                    <input type="text" name="Education" onChange={handleChange} value = {data.Education}
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer" 
                                    placeholder=" " 
                                     />
                                        <label for="Education" 
                                        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                            Add Education
                                        </label>
                                        </div>

                                <div class="grid md:grid-cols-2 md:gap-6">
                                    <div class="relative z-0 w-full mb-6 group">
                                        <textarea type="text" 
                                        name="Bio"
                                        onChange={handleChange}
                                        value = {data.Bio}
                                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent h-28 w-40 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-500 peer" 
                                        placeholder=" " 
                                        ></textarea>
                                        <label for="Bio" class="peer-focus:font-medium absolute  text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                        Bio</label>
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
                                    <p class="mb-4 text-lg font-semibold text-gray-900 ">Profile Updated Successfully.</p>
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

export default EditProfile;


