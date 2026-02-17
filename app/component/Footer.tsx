import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex px-5 pb-20 flex-col items-center justify-evenly text-white/90 bg-yehuda-black w-full h-100">
      <div className="text-xl font-bold">BeatByYehuda</div>
      <div>Creative beats</div>
      <div className="h-30 text-sm text-center items-center flex flex-col justify-between">
        <div>Home</div>
        <div>About</div>
        <div>My Beats</div>
        <div>Contact</div>
      </div>
      <div className="w-[25%] text-xl  justify-between flex h-10">
        <FaInstagram />
        <FaFacebook />
        <FaLinkedin />
      </div>
      <div className="text-sm text-white/50">
        {" "}
        &copy; 2025. All rights reserved{" "}
      </div>
    </footer>
  );
};

export default Footer;
