import campusWorks from "../../assets/campusWorks.png";
import logout from "../../assets/logout.png";
import Dropdown from "../Dropdown";
import { Link } from 'react-router-dom';
const TopBar = () => {


        const handleLogout = () => {
            localStorage.removeItem("token");
            window.location.reload();
        };
	return (
        
            <nav class="bg-white flex flex-row max-h-40 px-2 shadow-lg sm:px-4 py-2.5 0 fixed w-full z-20 top-0 left-0 right-0 border-b border-gray-200">
            
            <div class = "container flex flex-row w-full">
            <div class = "flex align-items-center">
                        <a href="/" class="flex items-center">
                        <img src={campusWorks} class="" width="200" height="100" alt="Logo"/>
                        </a>
            </div>
                <div class="container flex flex-wrap items-center justify-center">
            
                
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-inherit md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                    <li>
                        <a href="/" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0" >Home</a>
                    </li>
                    <li>
                        <Link to="/profile" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Profile</Link>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Inbox</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">My jobs</a>
                    </li>
                    </ul>
                      <Dropdown />  
                </div>
            </div>


            <div class="flex align-items-center p-2">
                
            <button onClick= {handleLogout} class="relative inline-flex items-center justify-center px-10  overflow-hidden text-sm  transition duration-300 ease-out border-2 border-green-500 rounded-3xl shadow-md group">
        <span class="absolute inset-0 flex items-center justify-center w-full h-15 text-white duration-300 -translate-x-full bg-green-500 group-hover:translate-x-0 ease">
        <img class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" src={logout}></img>
        </span>
        <span class="absolute flex items-center justify-center w-full h-15 text-grey-700 transition-all duration-300 transform group-hover:translate-x-full ease">Log Out</span>
        <span class="relative invisible">Log out</span>
        </button>
                    
                </div>  
            </div>
            
            </nav>

	);
};

export default TopBar;
