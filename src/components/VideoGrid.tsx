import React from "react";
import Participant from "./Participant";

const participants = [
  { name: "Judge 1", role: "judge", imgSrc: "path/to/image1.jpg" },
  { name: "Lawyer 1", role: "lawyer", imgSrc: "path/to/image2.jpg" },
  { name: "Lawyer 2", role: "lawyer", imgSrc: "path/to/image3.jpg" },
  { name: "Lawyer 3", role: "lawyer", imgSrc: "path/to/image2.jpg" },
  { name: "Lawyer 4", role: "lawyer", imgSrc: "path/to/image3.jpg" },
];

const VideoGrid: React.FC = () => {
  const judge = participants.find(
    (participant) => participant.role === "judge"
  );
  const otherParticipants = participants.filter(
    (participant) => participant.role !== "judge"
  );
  return (
    <div className="p-4">
      {judge && (
        <div className="mb-4 flex justify-center">
          <Participant
            key={judge.name}
            name={judge.name}
            role={judge.role}
            imgSrc={judge.imgSrc}
          />
        </div>
      )}
      <div className="flex flex-wrap gap-4 justify-center">
        {otherParticipants.map((participant, index) => (
          <Participant
            key={index}
            name={participant.name}
            role={participant.role}
            imgSrc={participant.imgSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoGrid;
