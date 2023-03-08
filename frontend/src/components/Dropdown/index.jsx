import { useState } from "react";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={toggleMenu}
        className="inline-flex justify-center items-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 border-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-green-500"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
      >
        Search
        <svg
          className="-mr-1 ml-2 h-5 w-5 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 6.707a1 1 0 011.414 0L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
      >
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-600 hover:text-white"
          role="menuitem"
        >
          Jobs
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-600 hover:text-white"
          role="menuitem"
        >
          Internships
        </a>
      </div>
    </div>
  );
}

export default Dropdown;
