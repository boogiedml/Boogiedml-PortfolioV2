import React, { useState, useEffect } from "react";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes().toString().padStart(2, "0");
      // const seconds = date.getSeconds().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedHours = (hours % 12 || 12).toString().padStart(2, "0");

      setCurrentTime(`${formattedHours}:${minutes} ${ampm}`);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-[150px] fixed text-center z-40 -rotate-90 top-1/2 -right-14 transform -translate-y-1/2 font-outfit text-sm bg-[#9A9A9A] dark:bg-[#1A1A1A] dark:text-[#9A9A9A] border-[1px] border-[#242424] py-3 cursor-default">
      {currentTime}
    </div>
  );
};

export default Clock;
