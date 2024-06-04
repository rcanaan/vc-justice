import React, { useState, useEffect } from "react";

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
          <button className="bg-red-600 px-4 py-2 rounded">LIVE</button>
          <span>Meeting Time: {formatTime(meetingTime)}</span>
        </div>
        <div className="flex items-center space-x-4  w-1/3">
          <button className="bg-gray-700 px-4 py-2 rounded">Share</button>
          <button className="bg-gray-700 px-4 py-2 rounded">Microphone</button>
          <button className="bg-gray-700 px-4 py-2 rounded">Camera</button>
        </div>
      </footer>
      );
    </>
  );
}
