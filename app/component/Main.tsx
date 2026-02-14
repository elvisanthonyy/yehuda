"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import api from "@/libs/api";
import { IBeat } from "@/models/beat";
import {
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaLocationArrow,
  FaTwitter,
} from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaAngleUp } from "react-icons/fa";
import { IoMdGlobe } from "react-icons/io";
import Beats from "./Beats";
import HireMe from "./HireMe";
import MusicPlayer from "./MusicPlayer";

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisble] = useState(false);
  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisble(true);
        }
      },
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return { ref, isVisible };
}

const Main = () => {
  //const item1 = useScrollAnimation();
  const item2 = useScrollAnimation();
  //const item3 = useScrollAnimation();
  const item4 = useScrollAnimation();
  const item5 = useScrollAnimation();
  //const item6 = useScrollAnimation();
  //const item7 = useScrollAnimation();
  //const item8 = useScrollAnimation();
  //const item9 = useScrollAnimation();

  const hireMeRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  //const [isButtonsVisible, setIsButtonVisble] = useState(false);
  const [beats, setBeats] = useState<IBeat[] | []>([]);
  const [isMusicPlayerOpen, setIsMusicPlayerOpen] = useState(false);
  const [beat, setBeat] = useState<IBeat | null>(null);

  /*const handleScrollToProject = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToHireMe = () => {
    hireMeRef.current?.scrollIntoView({ behavior: "smooth" });
  };*/

  const handleScrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    //setIsButtonVisble(true);
    api
      .get("/api/get/beats")
      .then((res) => {
        setBeats(res.data.beats);
      })
      .catch();
  }, []);

  return (
    <>
      {isMusicPlayerOpen && (
        <MusicPlayer setIsMusiPlayerOpen={setIsMusicPlayerOpen} beat={beat} />
      )}
      <main
        ref={topRef}
        className="flex flex-col items-center relative min-h-screen h-fit px-[4%]"
      >
        <div className="flex flex-col shrink-0 lg:flex-row pt-25 min-h-[50dvh] w-full items-center xl:justify-between lg:items-start ">
          <div className="flex justify-center items-center relative w-full h-30 rounded-xl text-white bg-gradient-to-tr from-blue-800 via-blue-400 to-blue-700 border-black">
            <div className="text-xl">Music Producer</div>
            <div className="absolute -bottom-8 left-5 h-15 w-15 rounded-full bg-amber-400 border-2 border-white"></div>
          </div>
          <div className="flex flex-col items-center h-40 mt-13 px-5 border-gray-500">
            <div className="fex w-full mb-3">
              Hello, I&apos;m <b>Yehuda</b>
            </div>
            <div>
              I&apos;m a Music Producer, I specialize in creating catchy
              afrobeats and mix/ mastering
            </div>
            <div className="flex mt-5 mb-6 w-full justify-between items-center">
              <IoMdGlobe />
              <FaLinkedin />
              <FaTwitter />
            </div>
          </div>
        </div>

        <div ref={projectRef} className="flex flex-col my-10">
          Genres I Produce
        </div>
        <div className="flex flex-col w-full justify-center lg:px-[5%] lg:grid lg:gap-x-10 lg:grid-cols-2">
          <div
            ref={item5.ref}
            className={`transition-all w-full lg:w-full duration-700 ease-in ${
              item5.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="w-full overflow-hidden flex items-center justify-center rounded-xl aspect-square bg-blue-400 mb-5">
              <div className="text-2xl w-full h-full text-white ">
                <Image
                  src={"/genres/afro1.jpg"}
                  height={1000}
                  width={1000}
                  draggable={false}
                  alt="afro"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full flex overflow-hidden items-center justify-center rounded-xl aspect-square bg-green-400">
              <div className="text-2xl w-full h-full text-white">
                <Image
                  src={"/genres/afro2.jpg"}
                  height={1000}
                  width={1000}
                  draggable={false}
                  alt="afro"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div ref={item2.ref} className="flex flex-col mx-auto my-5">
          My Beats
        </div>
        {beats && (
          <div className="w-full">
            {beats.map((beat: IBeat) => (
              <div
                onClick={() => {
                  setBeat(beat);
                  setIsMusicPlayerOpen(true);
                }}
                key={beat._id?.toString()}
                className="w-full"
              >
                <Beats beat={beat} />
              </div>
            ))}
          </div>
        )}
        <div
          onClick={handleScrollToTop}
          className="fixed right-10 bottom-10 flex justify-center items-center cursor-pointer w-12 h-12 rounded-full border-1 border-white/50 text-white z-50 bg-black shadow-4xl backdrop-blur-2xl"
        >
          <FaAngleUp />
        </div>

        <div
          ref={item4.ref}
          className={`transition-all duration-700 ease-in ${
            item4.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          } aspect-square text-sm w-full border-b border-t mx-auto flex flex-col justify-center py-10 md:h-80 items-center border-b-gray-400 border-t-gray-400`}
        >
          <div className="flex flex-col mx-auto mb-5">CONTACT</div>
          <div className="flex my-2 items-center w-[90%]">
            <FaInstagram className="w-[20%] text-black" />
            <div> Yehuda </div>
          </div>
          <div className="flex my-2 items-center w-[90%]">
            <FaPhone className="w-[20%]  text-black rotate-90" />
            <div> +234 906 481 2779 </div>
          </div>
          <div className="flex my-2 items-center w-[90%]">
            <FaLocationArrow className="w-[20%]  text-black" />
            <div> Kaduna, Nigeria. </div>
          </div>
          <div className="flex my-2 items-center w-[90%]">
            <BiLogoGmail className="w-[20%] text-black" />
            <div> info.elvisanthony@gmail.com </div>
          </div>
        </div>
        <div ref={hireMeRef} className="flex flex-col mx-auto my-5 mt-8">
          HIRE ME
        </div>
        <HireMe />
      </main>
    </>
  );
};

export default Main;
