import axios from "axios";
import { useState , useEffect} from "react";
import Footer from "../Footer";
import TopBar from "../TopBar";
import avatar from "../../assets/avatar.png";


const EditProfile = () => {
    const [data, setData] = useState({
      Bio: "",
      Education: "",
      Result: "",
      Strength: "",
      Achievements: "",
      Experience: "",
      photo: null,
    });
    const [error, setError] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [userProfile, setUserProfile] = useState({});
  
    useEffect(() => {
      const fetchUserProfile = async () => {
        try {
          const token = localStorage.getItem("token");
          const config = {
            headers: { Authorization: `Bearer ${token}` },
          };
  
          const response = await axios.get(
            "http://localhost:8080/api/userProfile",
            config
          );
          setUserProfile(response.data);
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchUserProfile();
    }, []);
  
    const handleChange = ({ target }) => {
      setData((prevData) => ({ ...prevData, [target.name]: target.value }));
    };
  
    const handlePhoto = ({ target }) => {
        const file = target.files[0];
        setData((prevData) => {
          if (file) {
            return {
              ...prevData,
              photo: file,
            };
          } else {
            return prevData;
          }
        });
      };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const token = localStorage.getItem("token");
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };
  
        const url = "http://localhost:8080/api/userProfile";
        const formData = new FormData();
        formData.append("Bio", data.Bio || userProfile.Bio);
        formData.append("Education", data.Education || userProfile.Education);
        formData.append("Result", data.Result || userProfile.Result);
        formData.append("Strength", data.Strength || userProfile.Strength);
        formData.append("Achievements", data.Achievements || userProfile.Achievements);
        formData.append("Experience", data.Experience || userProfile.Experience);
        formData.append("photo", data.photo || userProfile.photo);
  
        const response = await axios.post(url, formData, config);
        setIsModalVisible(true);
      } catch (error) {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          setError(error.response.data.message);
        }
      }
    };

  
    return (
      <>
        <div className="flex flex-col min-h-screen bg-gray-100">
  <TopBar />
  <main className="flex-grow flex items-center justify-center bg-gray-100">
    <div className="flex w-full">
      {/* Profile Picture */}
      <div className="w-1/2 flex items-center justify-center bg-gray-200">
        <div className="w-full h-full flex items-center justify-center">
          {userProfile.photo ? (
            <img
              src={`http://localhost:8080/api/images/${userProfile.photo}`}
              alt="avatar"
              className="w-72 h-72 rounded-full mb-5"
            />
          ) : (
            <img
              src={avatar} // Replace with the path to your default avatar image
              alt="default-avatar"
              className="w-72 h-72 rounded-full mb-5"
            />
          )}
        </div>
      </div>

      {/* Edit Profile Form */}
      <div className="flex items-center justify-center w-full h-full">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full h-full">
          <h1 className="font-medium text-green-600 text-2xl mb-4">
            Edit Profile
          </h1>
                  {/* Add your form code here */}
                  <form onSubmit={handleSubmit} encType="multipart/form-data">
                  <div className="relative z-0 w-full mb-6 group">
                        <input
                          type="text"
                          name="Result"
                          onChange={handleChange}
                          value={data.Result}
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
                          placeholder="Cgpa"
                        />
                        <label
                          htmlFor="Result"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Cgpa
                        </label>
                      </div>
    
                      <div className="relative z-0 w-full mb-6 group">
                        <input
                          type="text"
                          name="Education"
                          onChange={handleChange}
                          value={data.Education}
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
                          placeholder="Education"
                        />
                        <label
                          htmlFor="Education"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Education
                          </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="Strength"
              onChange={handleChange}
              value={data.Strength}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder="Strength"
            />
            <label
              htmlFor="Strength"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Strength
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="Achievements"
              onChange={handleChange}
              value={data. Achievements}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" Achievements"
            />
            <label
              htmlFor="Achievements"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Achievements
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="Experience"
              onChange={handleChange}
              value={data.Experience}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder="Experience"
            />
            <label
              htmlFor="Experience"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Experience
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <textarea
              name="Bio"
              onChange={handleChange}
              value={data.Bio}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 resize-none peer"
              rows={4}
              placeholder="Bio"
            />
            <label
              htmlFor="Bio"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Bio
            </label>
          </div>


          <div className="relative z-0 w-full mb-6 group">
            <input
              type="file"
              name="photo"
              onChange={handlePhoto}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
              accept=".png, .jpg, .jpeg"
            />
            <label
              htmlFor="photo"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Upload Profile Picture
            </label>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
            >
              Save
            </button>
          </div>
                  </form>
                </div>
              </div>
            </div>
          </main>
        </div>
      </>
    );
  };
  
  export default EditProfile;