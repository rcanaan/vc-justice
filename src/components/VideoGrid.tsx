import React from "react";
import Participant from "./Participant";

const participants = [
  {
    name: "כבוד השופטת ישראלה ישראלוף",
    role: "judge",
    part: "ועדת ערר לענייני קורונה",
    imgSrc: `${process.env.PUBLIC_URL}/judge2.webp`,
  },
  {
    name: "שושנה שושני",
    role: "lawyer",
    part: "צד משיב",
    imgSrc: `${process.env.PUBLIC_URL}/judge2.webp`,
  },
  {
    name: "קובי יעקובי",
    role: "lawyer",
    part: "צד עורך",
    imgSrc: `${process.env.PUBLIC_URL}/judge2.webp`,
  },
];

const VideoGrid: React.FC = () => {
  const judge = participants.find(
    (participant) => participant.role === "judge"
  );
  const otherParticipants = participants.filter(
    (participant) => participant.role !== "judge"
  );
  return (
    <div>
      {judge && (
        <div className="flex justify-center mb-[0.75rem]">
          <Participant
            key={judge.name}
            name={judge.name}
            role={judge.role}
            part={judge.part}
            imgSrc={judge.imgSrc}
          />
        </div>
      )}
      <div className="flex flex-wrap gap-x-[0.75rem] gap-y-[0.75rem] xl:gap-y-[0.75rem] justify-center mr-16">
        {otherParticipants.map((participant, index) => (
          <Participant
            key={index}
            name={participant.name}
            role={participant.role}
            part={participant.part}
            imgSrc={participant.imgSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoGrid;
