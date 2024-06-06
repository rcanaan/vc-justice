import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IsraelIcon } from "../IsraelIcon.svg";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import BalanceOutlinedIcon from "@mui/icons-material/BalanceOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import { ReactComponent as SideBarWave } from "../sideBar.svg";
const SideBar: React.FC = () => {
  return (
    <nav className="w-28 bg-gray-700 text-white h-full flex flex-col justify-between fixed right-0 top-0 bottom-0">
      {/* <SideBarWave /> */}
      <div>
        <IsraelIcon className="h-28 w-28" />
      </div>
      <div className="flex flex-col space-y-4 p-2">
        <button className="flex flex-col items-center py-2 px-4  text-center">
          <PeopleAltOutlinedIcon />
          <span>אנשים</span>
        </button>
        <button className="flex flex-col items-center py-2 px-4 text-center">
          <BalanceOutlinedIcon />
          <span>פרטי דיון</span>
        </button>
        <button className="flex flex-col items-center py-2 px-4  text-center">
          <ShieldOutlinedIcon />
          <span>מנהל דיון</span>
        </button>
        <button className="flex flex-col items-center py-2 px-4  text-center">
          <SettingsOutlinedIcon />
          <span>הגדרות</span>
        </button>
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
