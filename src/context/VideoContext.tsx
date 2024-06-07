import React, { createContext, useContext, useState, ReactNode } from "react";

export interface Participant {
  name: string;
  role: string;
  part: string;
  imgSrc: string;
}

interface VideoContextProps {
  videoEnabledForPart: string | null;
  toggleVideo: (part: string) => void;
  isCameraOn: boolean;
  participants: Participant[];
}

const VideoContext = createContext<VideoContextProps | undefined>(undefined);

export const VideoProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [videoEnabledForPart, setVideoEnabledForPart] = useState<string | null>(
    null
  );
  const [isCameraOn, setIsCameraOn] = useState(false);

  const participants: Participant[] = [
    {
      name: "כבוד השופטת ישראלה ישראלוף",
      role: "judge",
      part: "ועדת ערר לענייני קורונה",
      imgSrc: `${process.env.PUBLIC_URL}/images/judge2.webp`,
    },
    {
      name: "שושנה שושני",
      role: "lawyer",
      part: "צד משיב",
      imgSrc: `${process.env.PUBLIC_URL}/images/female_lawyer.webp`,
    },

    {
      name: "קובי יעקובי",
      role: "lawyer",
      part: "צד עורר",
      imgSrc: `${process.env.PUBLIC_URL}/images/lawyer.jpg`,
    },
  ];

  const toggleVideo = (part: string) => {
    if (videoEnabledForPart === part) {
      setVideoEnabledForPart(null);
      setIsCameraOn(false);
    } else {
      setVideoEnabledForPart(part);
      setIsCameraOn(true);
    }
  };

  return (
    <VideoContext.Provider
      value={{ videoEnabledForPart, toggleVideo, isCameraOn, participants }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export const useVideo = () => {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error("useVideo must be used within a VideoProvider");
  }
  return context;
};
