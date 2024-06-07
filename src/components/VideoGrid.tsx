import React from "react";
import Participant from "./Participant";
import { useVideo } from "./VideoContext";

const VideoGrid: React.FC = () => {
  const { participants } = useVideo();

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
            isVideo={true}
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
