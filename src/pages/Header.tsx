import React from "react";
import { Link } from "react-router-dom";
import { FiMaximize } from "react-icons/fi";
import { FaLock } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header
      className="bg-gray-800 text-white p-4 flex justify-between items-center"
      style={{ marginRight: "12rem" }}
    >
      <div className="flex items-center space-x-4 w-1/3">
        <span>Recording</span>
        <FaLock className="text-white" />
        <button className="bg-gray-700 p-2 rounded">
          <FiMaximize className="text-white" />
        </button>
      </div>
      <div className="text-right w-1/3 justify-start">
        <h1 className="text-xl">Ministry of Justice - VC Conference</h1>
        <p className="text-sm">Case File #123456</p>
      </div>
    </header>
  );
};

export default Header;
