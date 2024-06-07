import React, { useEffect, useRef } from "react";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { useVideo } from "../context/VideoContext";
import { Participant } from "../context/VideoContext";

interface ParticipantProps extends Participant {}

export default function Participants({
  name,
  role,
  part,
  imgSrc,
}: ParticipantProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { videoEnabledForPart } = useVideo();

  useEffect(() => {
    if (videoEnabledForPart === part && videoRef.current) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((error) => {
          console.error("Error accessing the camera", error);
        });
    }
  }, [videoEnabledForPart, part]);

  const handleMicrophoneButtonClick = () => {
    console.log("Microphone button clicked");
  };
  return (
    <div
      className={`relative flex flex-col items-center ${
        role === "judge"
          ? "h-60 w-[25rem] lg:min-w-[30rem] lg:min-h-[12rem] xl:min-w-[25rem]  2xl:min-w-[45rem] 2xl:min-h-[24rem]"
          : "w-[18rem] lg:min-w-[25.5rem] xl:min-h-[12rem] xl:min-w-[25rem] 2xl:min-w-[40rem] 2xl:min-h-[20rem]"
      }  `}
    >
      {videoEnabledForPart === part ? (
        <video
          ref={videoRef}
          className="h-56 xl:min-h-[12rem] lg:min-w-[25.5rem] xl:min-w-[25rem] 2xl:min-w-[40rem] 2xl:min-h-[20rem] object-cover rounded-lg"
          autoPlay
        />
      ) : (
        <img
          src={imgSrc}
          alt={name}
          className={`object-cover rounded-lg ${
            role === "judge"
              ? "h-60 w-[25rem] lg:min-w-[30rem] lg:min-h-[12rem] xl:min-w-[25rem] 2xl:min-w-[45rem] 2xl:min-h-[24rem] "
              : "h-56 xl:min-h-[12rem] lg:min-w-[25.5rem] xl:min-w-[25rem] 2xl:min-w-[40rem] 2xl:min-h-[20rem]"
          }`}
        />
      )}
      <div
        className={`absolute top-2.5 right-2.5 rounded-md ${
          part === "צד עורר" ? "bg-blue-500" : "bg-white"
        }`}
      >
        <p className={`text-blue-900 font-[700] text-xs p-1.5 `}>
          {role === "judge"
            ? "דובר"
            : part === "צד עורר"
            ? `אני - ${part}`
            : part}
        </p>
      </div>
      <div className="flex justify-between items-center absolute bottom-0 w-full bg-gray-800 bg-opacity-80 py-1.5 px-3.5 ">
        <button onClick={handleMicrophoneButtonClick} className="text-white">
          <KeyboardVoiceIcon style={{ fontSize: "22px" }} />
        </button>
        <div className="flex flex-col text-right right-0">
          <p className="text-sm text-cyan-600 font-bold">{part}</p>
          <p className="text-xs font-medium text-gray-300">{name}</p>
        </div>
      </div>
    </div>
  );
}
