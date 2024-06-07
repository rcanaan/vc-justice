// SideBar.tsx
import React from "react";
import { ReactComponent as IsraelIcon } from "../IsraelIcon.svg";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import BalanceOutlinedIcon from "@mui/icons-material/BalanceOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import { useVideo } from "../components/VideoContext";

const SideBar: React.FC = () => {
  const { participants } = useVideo();

  return (
    <nav className="w-28 bg-gray-700 text-white h-full flex flex-col justify-between fixed right-0 top-0 bottom-0">
      {/* <SideBarWave /> */}
      <div>
        <IsraelIcon className="h-28 w-28" />
      </div>
      <div className="flex flex-col space-y-4 p-2">
        <button className="relative flex flex-col items-center py-2 px-4 text-center">
          <PeopleAltOutlinedIcon />
          <span>אנשים</span>
          <div className="absolute top-1 right-4 bg-white text-gray-800 rounded-full w-[22px] h-[22px] flex items-center justify-center text-sm font-semibold">
            {participants.length}
          </div>
        </button>
        <button className="flex flex-col items-center py-2 px-4 text-center">
          <BalanceOutlinedIcon />
          <span>פרטי דיון</span>
        </button>
        <button className="flex relative flex-col items-center py-2 px-4 text-center">
          <ShieldOutlinedIcon />
          <div className="absolute bottom-8 right-9 bg-white text-gray-800 rounded-full w-3 h-3 flex items-center justify-center text-xs font-semibold">
            1
          </div>
          <span>מנהל דיון</span>
        </button>
        <button className="flex flex-col items-center py-2 px-4 text-center">
          <SettingsOutlinedIcon />
          <span>הגדרות</span>
        </button>
      </div>
      <div className="flex justify-center items-center mb-8">
        <button className="py-2 px-3 text-red-400 bg-gray-600 rounded-2xl text-sm">
          יציאה מהדיון
        </button>
      </div>
    </nav>
  );
};

export default SideBar;
