import React from "react";

const Nav = () => {
  return (
    <nav className="flex text-xl justify-between items-center z-10 px-[5%] absolute top-0 left-0 w-full h-18">
      <div className="">
        <div className="font-bold">BeatsByYehuda</div>
      </div>
      <div className="w-10 h-10 rounded-full bg-gray-700"></div>
    </nav>
  );
};

export default Nav;
