import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

interface ChildProps {
  scrollToHome: () => void;
  scrollToAbout: () => void;
  scrollToBeats: () => void;
}

const Footer = ({ scrollToHome, scrollToAbout, scrollToBeats }: ChildProps) => {
  return (
    <footer className="flex px-[32px] relative left-[50%] mb-[64px] -translate-x-[50%] flex-col items-center justify-center text-white/90 bg-secondary-2 rounded-[32px] w-fit h-[53px]">
      <div className="text-xl items-center text-primary-2 justify-between flex h-10">
        <Link
          target="_blank"
          href="https://www.instagram.com/beatsbyehuda?igsh=MWhrdWpiYmQ1YnFzeg%3D%3D&utm_source=qr"
          className="mr-[16px]"
        >
          <div className="h-[26px] w-[26px]">
            <Image
              src={"/icons/facebook.svg"}
              height={100}
              width={100}
              alt="location icon"
              className="h-full"
            />{" "}
          </div>
        </Link>
        <Link
          target="_blank"
          href="https://www.instagram.com/beatsbyehuda?igsh=MWhrdWpiYmQ1YnFzeg%3D%3D&utm_source=qr"
          className="mr-[16px]"
        >
          <div className="h-[26px] w-[26px]">
            <Image
              src={"/icons/instagram.svg"}
              height={100}
              width={100}
              alt="location icon"
              className="h-full"
            />{" "}
          </div>
        </Link>
        <Link
          target="_blank"
          href="https://x.com/beatsbyehuda?s=21"
          className=""
        >
          <div className="h-[24px] w-[24px]">
            <Image
              src={"/icons/twitter.svg"}
              height={100}
              width={100}
              alt="location icon"
              className="h-full"
            />{" "}
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
