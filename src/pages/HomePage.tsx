import React from "react";
import VideoGrid from "../components/VideoGrid";

const HomePage: React.FC = () => {
  return (
    <div>
      <h2 className="text-center text-xl mt-4">
        Welcome to the Video Conference
      </h2>
      <VideoGrid />
    </div>
  );
};

export default HomePage;
