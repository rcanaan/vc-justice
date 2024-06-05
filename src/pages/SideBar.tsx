import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IsraelIcon } from "../IsraelIcon.svg";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import BalanceOutlinedIcon from "@mui/icons-material/BalanceOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
const SideBar: React.FC = () => {
  return (
    <nav className="w-48 bg-gray-800 text-white h-full flex flex-col justify-between fixed right-0 top-0 bottom-0">
      {/* <IsraelIcon /> */}
      <div className="flex flex-col items-center mt-4 bg-gray-700 ">
        {/* <IsraelIcon className="w-20 h-20" /> */}
      </div>
      <div className="flex flex-col space-y-4 p-4 mt-20 mr-4 border-b border-r border-b-blue-300 border-r-blue-300 bg-gray-700">
        <Link
          to="/people"
          className="flex flex-col items-center py-2 px-4  text-center"
        >
          <PeopleAltOutlinedIcon />
          <span>אנשים</span>
        </Link>
        <Link
          to="/sitting-details"
          className="flex flex-col items-center py-2 px-4   text-center"
        >
          <BalanceOutlinedIcon />
          <span>פרטי דיון</span>
        </Link>
        <Link
          to="/sitting-manager"
          className="flex flex-col items-center py-2 px-4  text-center"
        >
          <ShieldOutlinedIcon />
          <span>מנהל דיון</span>
        </Link>
        <Link
          to="/settings"
          className="flex flex-col items-center py-2 px-4  text-center"
        >
          <SettingsOutlinedIcon />
          <span>הגדרות</span>
        </Link>
      </div>
      <div className="flex justify-center items-center mb-8">
        <button className=" py-2 px-4 text-red-400 bg-gray-700 rounded-2xl">
          יציאה מהדיון
        </button>
      </div>
    </nav>
  );
};

export default SideBar;
