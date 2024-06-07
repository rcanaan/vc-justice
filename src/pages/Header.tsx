import React, { useEffect, useState } from "react";
import { FiMaximize } from "react-icons/fi";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
export default function Header() {
  const [headTitle, setHeadTitle] = useState<string>("");

  const [caseFileTitle, setCaseFileTitle] = useState<string>("");
  useEffect(() => {
    if (!headTitle) {
      setHeadTitle(
        "משרד המשפטים, ועדת ערר לענייני קורונה - השתתפות בהוצאות קבועות"
      );
    }
    if (!caseFileTitle) {
      setCaseFileTitle("תיק מספר 64949-02-22");
    }
  }, [caseFileTitle, headTitle]);

  const handleRecordingButtonClick = () => {
    // in here the recording meeting will be handled
    console.log("Recording button clicked");
  };

  const handleShieldButtonClick = () => {
    // in here will meeting security will be handled
    console.log("Shield button clicked - Security action");
  };

  const handleFullWindow = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  };
  return (
    <header
      className="bg-gray-800 text-white p-4 flex justify-between items-center "
      style={{ marginRight: "8rem" }}
    >
      <div className="flex items-center space-x-4 w-1/3">
        <button
          onClick={handleRecordingButtonClick}
          className="flex flex-row items-center gap-1"
        >
          <span>מקליט </span>
          <div className="bg-red-500 rounded-full h-2 w-2" />
        </button>
        <button onClick={handleShieldButtonClick} className="flex items-center">
          <ShieldOutlinedIcon className="text-white" />
        </button>
        <button className="flex items-center" onClick={handleFullWindow}>
          <OpenInFullIcon className="text-white" style={{ fontSize: "20px" }} />
        </button>
      </div>
      <div className="text-right w-1/2 ">
        <h1 className="text-base pb-2">{headTitle}</h1>
        <p className="text-sm">{caseFileTitle}</p>
      </div>
    </header>
  );
}
