import TopBar from "../TopBar";
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "../Footer";

const Resources = () => {
  const [resources, setResources] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get("http://localhost:8080/api/resources", config)
      .then((response) => {
        setResources(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .get("http://localhost:8080/api/getcurrentuser", config)
      .then((response) => {
        setCurrentUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const formatDate = (date) => {
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };

    return new Date(date).toLocaleString("en-GB", options);
  };

  const [showMore, setShowMore] = useState([]);

  const handleShowMoreToggle = (resourceId) => {
    setShowMore((prevState) => ({
      ...prevState,
      [resourceId]: !prevState[resourceId],
    }));
  };

  return (
    <>
      <TopBar />
      <main className="pt-20 bg-gray-100 min-h-screen">
        <div className="flex flex-col">
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full md:w-1/2 px-4 py-4">
              {resources.map((resource) => (
                <div
                  className="bg-white rounded-lg border-2 border-cyan-700 shadow p-6 mb-4 flex items-start resource-container"
                  key={resource._id}
                >
                  <div className="flex flex-col">
                    <div className="flex items-center mb-2">
                      <p className="font-bold text-gray-600 mr-2">
                        {resource.userName}
                      </p>
                      <p className="text-blue-400 font-semibold">
                        posted at {formatDate(resource.datePosted)}
                      </p>
                    </div>
                    <h2 className="font-bold text-xl mb-2">
                      {resource.resourceName}
                    </h2>
                    <div className="inline-block mb-2">
                      <div className="rounded-full bg-cyan-900 text-white px-2 py-1 text-sm inline-flex items-center">
                        <span className="whitespace-no-wrap">
                          {resource.resourceDomain}
                        </span>
                      </div>
                    </div>

                    <p
                      className={`text-gray-700 font-semibold whitespace-pre-line ${
                        showMore[resource._id] ? "" : "max-h-20 overflow-hidden"
                      }`}
                    >
                      {resource.resourceDescription}
                    </p>
                    {resource.resourceDescription.length > 120 && (
                      <button
                        className="font-bold text-cyan-700"
                        onClick={() => handleShowMoreToggle(resource._id)}
                      >
                        {showMore[resource._id] ? "Show Less" : "Show More"}
                      </button>
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
  );
};

export default Resources;
