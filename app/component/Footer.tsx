import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

interface ChildProps {
  scrollToHome: () => void;
  scrollToAbout: () => void;
  scrollToBeats: () => void;
}

const Footer = ({ scrollToHome, scrollToAbout, scrollToBeats }: ChildProps) => {
  return (
    <footer className="flex px-5 py-10 flex-col items-center justify-evenly text-white/90 bg-yehuda-black w-full min-h-100">
      <div className="text-xl font-bold pb-4">BeatByYehuda</div>
      <div>Creative beats</div>
      <div className="h-20 text-sm mt-5 text-center items-center flex flex-col justify-evenly">
        <div
          onClick={scrollToAbout}
          className="cursor-pointer hover:text-blue-500"
        >
          About
        </div>
        <div
          onClick={scrollToBeats}
          className="cursor-pointer hover:text-blue-500"
        >
          My Beats
        </div>
      </div>
      <div className="text-xl mt-5 border-t border-white py-3 justify-between flex h-10">
        <Link target="_blank" href="" className="mr-5">
          <FaInstagram />
        </Link>
        <Link target="_blank" href="" className="ml-5">
          <FaXTwitter />
        </Link>
      </div>
      <div className="text-sm text-white/50">
        {" "}
        &copy; 2025. All rights reserved{" "}
      </div>
    </footer>
  );
};

export default Footer;
