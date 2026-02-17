import React from "react";

const BeatsLoading = () => {
  return (
    <div className="w-full animate-pulse">
      <div className="flex relative justify-center items-center w-full h-65 rounded-sm mb-5 bg-yehuda-lightgray/60">
        <div className="w-20 h-15 bg-yehuda-lightgray rounded-sm"></div>
        <div className="absolute w-[80%] bottom-7 h-10 bg-yehuda-lightgray rounded-sm"></div>
      </div>
      <div className="flex relative justify-center items-center w-full h-65 rounded-sm mb-5 bg-yehuda-lightgray/60">
        <div className="w-20 h-15 bg-yehuda-lightgray rounded-sm"></div>
        <div className="absolute w-[80%] bottom-7 h-10 bg-yehuda-lightgray rounded-sm"></div>
      </div>
    </div>
  );
};

export default BeatsLoading;
