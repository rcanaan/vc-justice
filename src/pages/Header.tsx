import React, { useEffect, useState } from "react";
import { FiMaximize } from "react-icons/fi";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
export default function Header() {
  const [headTitle, setHeadTitle] = useState<string>(
    "משרד המשפטים, ועדת ערר לענייני קורונה - השתתפות בהוצאות קבועות"
  );

  const [caseFileTitle, setCaseFileTitle] = useState<string>(
    "תיק מספר 64949-02-22"
  );
  useEffect(() => {
    if (!headTitle) {
      setHeadTitle(
        "משרד המשפטים, ועדת ערר לענייני קורונה - השתתפות בהוצאות קבועות"
      );
    }
  }, []);
  return (
    <header
      className="bg-gray-800 text-white p-4 flex justify-between items-center "
      style={{ marginRight: "8rem" }}
    >
      <div className="flex items-center space-x-4 w-1/3">
        <div className="flex flex-row items-center gap-1">
          <span>מקליט </span>
          <div className="bg-red-500 rounded-full h-2 w-2" />
        </div>
        <div className=" flex items-center">
          <ShieldOutlinedIcon className="text-white" />
        </div>
        <button className="flex items-center">
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
