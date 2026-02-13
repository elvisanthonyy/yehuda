import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex px-5 flex-col items-start justify-evenly text-black bg-white w-full h-100">
      <div className="text-2xl font-bold">Yehuda</div>
      <div>Bringing prodicts to life</div>
      <div className="h-30 flex flex-col justify-between">
        <div>Home</div>
        <div>About</div>
        <div>Projects</div>
        <div>Contact</div>
      </div>
      <div className="w-[25%] text-xl text-black justify-between flex h-10">
        <FaInstagram />
        <FaFacebook />
        <FaLinkedin />
      </div>
      <div> &copy; 2025. All rights reserved </div>
    </footer>
  );
};

export default Footer;
