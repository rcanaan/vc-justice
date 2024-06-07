import React from "react";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import BalanceOutlinedIcon from "@mui/icons-material/BalanceOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import { useVideo } from "../components/VideoContext";

export default function SideBar() {
  const { participants } = useVideo();

  const handlePeopleButtonClick = () => {
    console.log("People button clicked");
  };

  const handleSittingDetails = () => {
    console.log("Sitting Details button clicked");
  };

  const handleSittingManagerButton = () => {
    console.log("Sitting Manager button clicked");
  };
  const handleSettings = () => {
    console.log("Sitting Manager button clicked");
  };
  const handleExitButtonClick = () => {
    console.log("Handle exit meeting button clicked");
  };

  return (
    <nav className="w-28 bg-gray-700 text-white h-full flex flex-col justify-between fixed right-0 top-0 bottom-0">
      <img
        src={`${process.env.PUBLIC_URL}/icons/IsraelIcon.svg`}
        alt="Israel Icon"
        className="h-28 w-28"
      />

      {/* in here supposes to be an svg - for the blue light wave */}
      <div className="flex flex-col space-y-4 p-2">
        <button
          onClick={handlePeopleButtonClick}
          className="relative flex flex-col items-center py-2 px-4 text-center"
        >
          <PeopleAltOutlinedIcon />
          <span>אנשים</span>
          <div className="absolute top-1 right-4 bg-white text-gray-800 rounded-full w-[22px] h-[22px] flex items-center justify-center text-sm font-semibold">
            {participants.length}
          </div>
        </button>
        <button
          onClick={handleSittingDetails}
          className="flex flex-col items-center py-2 px-4 text-center"
        >
          <BalanceOutlinedIcon />
          <span>פרטי דיון</span>
        </button>
        <button
          onClick={handleSittingManagerButton}
          className="flex relative flex-col items-center py-2 px-4 text-center"
        >
          <ShieldOutlinedIcon />
          <div className="absolute bottom-8 right-9 bg-white text-gray-800 rounded-full w-3 h-3 flex items-center justify-center text-xs font-semibold">
            1
          </div>
          <span>מנהל דיון</span>
        </button>
        <button
          onClick={handleSettings}
          className="flex flex-col items-center py-2 px-4 text-center"
        >
          <SettingsOutlinedIcon />
          <span>הגדרות</span>
        </button>
      </div>
      <div className="flex justify-center items-center mb-8">
        <button
          onClick={handleExitButtonClick}
          className="py-2 px-3 text-red-400 bg-gray-600 rounded-2xl text-sm"
        >
          יציאה מהדיון
        </button>
      </div>
    </nav>
  );
}
