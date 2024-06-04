import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <nav className="w-48 bg-gray-800 text-white h-full flex flex-col justify-between fixed right-0 top-0 bottom-0">
      <div className="flex flex-col space-y-4 p-4 mt-16">
        <Link
          to="/people"
          className="py-2 px-4 bg-gray-700 rounded text-center"
        >
          People
        </Link>
        <Link
          to="/sitting-details"
          className="py-2 px-4 bg-gray-700 rounded text-center"
        >
          Sitting Details
        </Link>
        <Link
          to="/sitting-manager"
          className="py-2 px-4 bg-gray-700 rounded text-center"
        >
          Sitting Manager
        </Link>
        <Link
          to="/settings"
          className="py-2 px-4 bg-gray-700 rounded text-center"
        >
          Settings
        </Link>
      </div>
      <div className="p-4">
        <button className="w-full py-2 px-4 bg-red-600 rounded">
          Leave Sitting
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
