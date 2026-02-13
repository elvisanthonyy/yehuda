import React from "react";

const LoadingH = () => {
  return (
    <div className="z-20 fixed top-0 left-0 bg-black/70 flex justify-center items-center h-[100dvh] w-full">
      <div className="h-10 w-10 border-2 border-gray-200 border-t-green-600 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingH;
