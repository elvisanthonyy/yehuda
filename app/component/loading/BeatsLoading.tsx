import React from "react";

const BeatsLoading = () => {
  return (
    <div className="w-full flex overflow-hidden animate-pulse mb-8">
      <div className="flex flex-col relative shrink-0 justify-center items-center w-50 h-50 rounded-sm mr-5 bg-primary-3">
        <div className="w-15 h-15 mb-6 bg-primary-2 rounded-full"></div>
        <div className="absolute bottom-0 w-full mt-4 h-10 border-b-2 bg-primary-2 border-primary-3"></div>
      </div>
      <div className="flex flex-col relative shrink-0 justify-center items-center w-50 h-50 rounded-sm mr-5 bg-primary-3">
        <div className="w-15 h-15 mb-6 bg-primary-2 rounded-full"></div>
        <div className="absolute bottom-0 w-full mt-4 h-10 border-b-2 bg-primary-2 border-primary-3"></div>
      </div>
      <div className="flex flex-col relative shrink-0 justify-center items-center w-50 h-50 rounded-sm mr-5 bg-primary-3">
        <div className="w-15 h-15 mb-6 bg-primary-2 rounded-full"></div>
        <div className="absolute bottom-0 w-full mt-4 h-10 border-b-2 bg-primary-2 border-primary-3"></div>
      </div>
      <div className="flex flex-col relative shrink-0 justify-center items-center w-50 h-50 rounded-sm mr-5 bg-primary-3">
        <div className="w-15 h-15 mb-6 bg-primary-2 rounded-full"></div>
        <div className="absolute bottom-0 w-full mt-4 h-10 border-b-2 bg-primary-2 border-primary-3"></div>
      </div>
    </div>
  );
};

export default BeatsLoading;
