import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex px-[32px] md:h-[70px] relative left-[50%] mb-[32px] -translate-x-[50%] text-white/90 md:w-[420px] bg-secondary-2 rounded-[64px] md:rounded-[64px] w-fit h-[44px]">
      <div className="text-xl items-center text-primary-2 md:px-[64px] md:justify-between justify-center min-w-20 flex">
        <Link
          target="_blank"
          href="https://www.instagram.com/beatsbyehuda?igsh=MWhrdWpiYmQ1YnFzeg%3D%3D&utm_source=qr"
          className="md:mr-0"
        >
          <div className="h-[20px] md:h-[30px] w-[26px]">
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
          className=" md:mr-0"
        >
          <div className="h-[20px] md:w-[26px]">
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
          <div className="h-[20px] aspect-square md:w-[24px]">
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
