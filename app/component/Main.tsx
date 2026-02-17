"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Nav from "./Nav";
import api from "@/libs/api";
import { IBeat } from "@/models/beat";
import {
  FaInstagram,
  FaFacebook,
  FaPhone,
  FaLocationArrow,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaAngleUp } from "react-icons/fa";
import { IoMdGlobe } from "react-icons/io";
import Beats from "./Beats";
import HireMe from "./HireMe";
import MusicPlayer from "./MusicPlayer";
import BeatsLoading from "./loading/BeatsLoading";

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
  const item3 = useScrollAnimation();
  const item4 = useScrollAnimation();
  const item5 = useScrollAnimation();
  //const item6 = useScrollAnimation();
  //const item7 = useScrollAnimation();
  //const item8 = useScrollAnimation();
  const item9 = useScrollAnimation();

  const contactMeRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const [isButtonsVisible, setIsButtonVisble] = useState(false);
  const [beats, setBeats] = useState<IBeat[] | []>([]);
  const [isMusicPlayerOpen, setIsMusicPlayerOpen] = useState(false);
  const [beat, setBeat] = useState<IBeat | null>(null);
  const [beatsLoading, setBeatsLoading] = useState(false);

  /*const handleScrollToProject = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };*/

  const handleScrollToContactMe = () => {
    contactMeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setBeatsLoading(true);

    api
      .get("/api/get/beats")
      .then((res) => {
        setBeatsLoading(false);
        setBeats(res.data.beats);
      })
      .catch((err) => {
        setBeatsLoading(false);
        console.error("Error", err);
      });

    const checkScroll = () => {
      if (window.scrollY > 5) {
        setIsButtonVisble(true);
      } else {
        setIsButtonVisble(false);
      }
    };

    window.addEventListener("scroll", checkScroll);

    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <>
      <Nav handleScrollToContactMe={handleScrollToContactMe} />
      {isMusicPlayerOpen && (
        <MusicPlayer setIsMusiPlayerOpen={setIsMusicPlayerOpen} beat={beat} />
      )}
      <main
        ref={topRef}
        className="flex flex-col items-center relative min-h-screen h-fit px-[4%]"
      >
        <div className="flex info-animation flex-col shrink-0 lg:flex-row pt-25 min-h-[50dvh] w-full items-center xl:justify-between lg:items-start ">
          <div className="flex justify-center items-center relative w-full rounded-xl text-white bg-linear-to-tr  border-black">
            <div className="flex justify-center pt-4.5 overflow-hidden items-center relative w-full h-40 rounded-xl text-white ">
              <Image
                src={"/yehuda.jpg"}
                height={1000}
                width={1000}
                draggable={false}
                alt="afro"
                className="w-full object-fill"
              />
            </div>

            <div className="absolute flex justify-center items-center -bottom-8 left-7 h-17 w-17 rounded-full bg-linear-to-tr from-amber-400 to-green-600">
              <div className="rounded-full pt-7 flex justify-center items-center overflow-hidden border-b-green-500 border-t-green-500 w-full h-full ">
                <Image
                  src={"/small-image.jpg"}
                  height={1000}
                  width={1000}
                  draggable={false}
                  alt="image"
                  className="w-full"
                />
              </div>

              <div className="absolute z-30 border-2 shadow-[0_0_10px_rgba(0,95,238,0.6)] rounded-full ball-animation border-b-blue-600 border-t-green-500 w-17 h-17 top-0 left-0"></div>
            </div>
          </div>
          <div className="flex flex-col text-yehuda-black items-start h-40 mt-13 px-5 border-gray-500">
            <div className="fex w-full mb-3">
              Hello, I&apos;m{" "}
              <span className="font-semibold">BeatsByYehuda</span>
            </div>
            <div>
              I&apos;m a <span className="font-semibold">Music Producer</span>,
              I specialize in creating catchy afrobeats and I&apos;m also a{" "}
              <span className="font-semibold">mix/master engineer</span>
            </div>
            <div className="flex mt-5  mb-6 justify-between items-center">
              <div className="bg-yehuda-lightgray mr-4 p-2 rounded-xl">
                <FaFacebook />
              </div>
              <div className="bg-yehuda-lightgray mr-4 p-2 rounded-xl">
                <FaInstagram />
              </div>

              <div className="bg-yehuda-lightgray mr-4 p-2 rounded-xl">
                <FaXTwitter />
              </div>
              <div className="bg-yehuda-lightgray mr-4 p-2 rounded-xl">
                <FaYoutube />
              </div>
            </div>
          </div>
        </div>

        <div
          ref={projectRef}
          className="flex items-center font-semibold border-black/30 text-yehuda-black justify-center rounded-xl w-full border h-12 flex-col my-5 mt-10"
        >
          Genres I Produce
        </div>
        <div className="flex flex-col w-full justify-center lg:px-[5%] lg:grid lg:gap-x-10 lg:grid-cols-2">
          <div
            className={`transition-all w-full lg:w-full duration-700 ease-in`}
          >
            <div
              ref={item3.ref}
              className={`w-full overflow-hidden transition-all duration-700 ease-in ${item3.isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"} flex items-center justify-center rounded-xl aspect-square bg-yehuda-lightgray mb-5`}
            >
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
            <div
              ref={item4.ref}
              className={`w-full overflow-hidden transition-all duration-700 ease-in ${item4.isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"} flex items-center justify-center rounded-xl aspect-square bg-yehuda-lightgray mb-5`}
            >
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
        <div
          ref={item2.ref}
          className="flex font-semibold items-center border-black/30 justify-center rounded-xl w-full border h-12 flex-col my-5 mt-10"
        >
          My Beats
        </div>

        <div className="w-full min-h-140">
          {beatsLoading ? (
            <BeatsLoading />
          ) : (
            <div
              ref={item5.ref}
              className={`w-full transition-all duration-700 ease-in`}
            >
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
        </div>
        <div className="bg-yehuda-lightgray/80 flex flex-col justify-center items-center rounded-lg w-full h-60">
          <div className="font-semibold text-lg">Follow me on Youtube</div>

          <div className="w-[85%] cursor-pointer text-white flex justify-center items-center h-15 bg-red-600 mt-5 rounded-xl">
            <FaYoutube className="text-2xl mr-3" />
            <div className=""> BeatsByYehuda</div>
          </div>
        </div>
        <div
          onClick={handleScrollToTop}
          className={`fixed right-10 bottom-10 ${isButtonsVisible ? "flex" : "hidden"} justify-center items-center cursor-pointer w-12 h-12 rounded-full border-1 border-white/50 text-white z-50 bg-black shadow-4xl backdrop-blur-2xl`}
        >
          <FaAngleUp />
        </div>

        <div className="flex font-semibold items-center border-black/30 justify-center rounded-xl w-full border h-12 flex-col mt-10">
          CONTACT
        </div>
        <div
          ref={item9.ref}
          className={`transition-all duration-700 ease-in ${
            item9.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          } text-sm w-full border-b mx-auto text-yehuda-black flex flex-col justify-center md:h-80 items-center py-10 border-b-gray-400 border-t-gray-400`}
        >
          <div className="flex my-2 items-center w-[90%]">
            <FaInstagram className="w-[20%] text-lg " />
            <div className="text-lg"> Yehuda </div>
          </div>
          <div className="flex my-2  items-center w-[90%]">
            <FaPhone className="w-[20%] text-lg  rotate-90" />
            <div className="text-lg"> +234 906 481 2779 </div>
          </div>
          <div className="flex my-2 items-center w-[90%]">
            <FaLocationArrow className="w-[20%] text-lg " />
            <div className="text-lg"> Kaduna, Nigeria. </div>
          </div>
          <div className="flex my-2  items-center w-[90%]">
            <BiLogoGmail className="w-[20%] text-lg " />
            <div className="text-lg"> info.elvisanthony@gmail.com </div>
          </div>
        </div>
        <div
          ref={contactMeRef}
          className="flex font-semibold flex-col mx-auto my-5 mt-8"
        >
          CONTACT ME
        </div>

        <HireMe />
      </main>
    </>
  );
};

export default Main;
