import React from "react";

interface ParticipantProps {
  name: string;
  role: string;
  imgSrc: string;
}

const Participant: React.FC<ParticipantProps> = ({ name, role, imgSrc }) => {
  return (
    <div className="flex flex-col items-center p-2 border-4 border-blue-300 rounded-md w-1/3">
      <img src={imgSrc} alt={name} className=" w-32 h-32" />
      <p className="mt-2 text-sm">{name}</p>
      <p className="text-xs text-gray-500">{role}</p>
    </div>
  );
};

export default Participant;
