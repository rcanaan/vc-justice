import React, { useState, useEffect } from "react";
import VideocamIcon from "@mui/icons-material/Videocam";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import PresentToAllOutlinedIcon from "@mui/icons-material/PresentToAllOutlined";
export default function Footer() {
  const [meetingTime, setMeetingTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setMeetingTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };
  return (
    <>
      <footer
        className="w-full justify-start bg-gray-800 text-white fixed bottom-0 flex items-center  p-4"
        style={{ marginRight: "12rem" }}
      >
        <div className="flex items-center space-x-2 w-1/3">
          <button className="bg-red-400 px-4 py-2 rounded font-semibold">
            LIVE
          </button>
          <span> {formatTime(meetingTime)}</span>
        </div>
        <div className="flex items-center justify-center space-x-4 w-1/3">
          <button className="bg-gray-700 px-4 py-2 rounded-3xl flex space-x-2 justify-center">
            <span>שיתוף</span>
            <PresentToAllOutlinedIcon />
          </button>
          <button className="bg-gray-700 px-4 py-2 rounded-3xl flex space-x-2 justify-center">
            <span>מיקרופון</span>
            <KeyboardVoiceIcon />
          </button>
          <button className="bg-gray-700 px-4 py-2  justify-center rounded-3xl flex space-x-2">
            <span>מצלמה</span>
            <VideocamIcon />
          </button>
        </div>
      </footer>
      );
    </>
  );
}
