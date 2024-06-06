import React from "react";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";

interface ParticipantProps {
  name: string;
  role: string;
  part: string;
  imgSrc: string;
  isJudge?: boolean;
}

const Participant: React.FC<ParticipantProps> = ({
  name,
  role,
  part,
  imgSrc,
  isJudge = false,
}) => {
  return (
    <div
      className={`relative flex flex-col items-center h-56 lg:min-h-64  ${
        !isJudge
          ? "w-[18rem] lg:min-w-[25.5rem] xl:min-w-[29rem] 2xl:min-w-[40rem] 2xl:min-h-96"
          : " w-full"
      }  `}
    >
      <img
        src={imgSrc}
        alt={name}
        className="h-56 lg:min-h-64 lg:min-w-[25.5rem] xl:min-w-[29rem] 2xl:min-w-[40rem] 2xl:min-h-96 object-cover rounded-lg"
      />
      <div
        className={`absolute top-2.5 right-2.5 rounded-md ${
          part === "צד עורך" ? "bg-blue-500" : "bg-white"
        }`}
      >
        <p className={`text-blue-900 font-[700] text-xs p-1.5 `}>
          {role === "judge" ? "דובר" : part}
        </p>
      </div>
      <div className="flex justify-between items-center absolute bottom-0 w-full bg-gray-800 bg-opacity-80 py-1.5 px-3.5 ">
        <div className="text-white">
          <KeyboardVoiceIcon style={{ fontSize: "22px" }} />
        </div>
        <div className="flex flex-col text-right right-0">
          <p className="text-sm text-cyan-600 font-bold">{part}</p>
          <p className="text-xs font-medium text-gray-300">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default Participant;
