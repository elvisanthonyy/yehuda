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
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaAngleUp } from "react-icons/fa";
import { IoMdGlobe } from "react-icons/io";
import Beats from "./Beats";
import HireMe from "./HireMe";
import MusicPlayer from "./MusicPlayer";
import BeatsLoading from "./loading/BeatsLoading";
import { FaArrowDown } from "react-icons/fa6";
import Link from "next/link";

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
  const item6 = useScrollAnimation();
  //const item7 = useScrollAnimation();
  //const item8 = useScrollAnimation();
  const item9 = useScrollAnimation();
  const item10 = useScrollAnimation();

  const contactMeRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
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
        className="flex flex-col items-center relative min-h-screen h-fit"
      >
        <div className="flex w-[92%] md:mt-10 md:w-[60%] info-animation flex-col shrink-0 pt-25 min-h-[50dvh] items-center xl:justify-between lg:items-start ">
          <div className="flex justify-center items-center relative w-full rounded-xl text-white bg-linear-to-tr  border-black">
            <div className="flex justify-center md:pt-13 pt-4.5 overflow-hidden items-center relative w-full md:h-70 h-40 rounded-xl text-white ">
              <Image
                src={"/yehuda.jpg"}
                height={1000}
                width={1000}
                draggable={false}
                alt="afro"
                className="w-full object-fill"
              />
            </div>

            <div
              ref={profileRef}
              className="absolute flex justify-center items-center -bottom-8 left-7 md:left-20 h-17 w-17 md:w-24 md:h-24 rounded-full "
            >
              <div className="rounded-full pt-7 md:pt-13 flex justify-center items-center overflow-hidden border-b-green-500 border-t-green-500 w-full h-full ">
                <Image
                  src={"/small-image.jpg"}
                  height={1000}
                  width={1000}
                  draggable={false}
                  alt="image"
                  className="w-full"
                />
              </div>

              <div className="absolute z-30 border-2 shadow-[4px_0_9px_rgba(0,95,238,0.4)] rounded-full ball-animation border-b-blue-600 border-r-blue-600 w-17 h-17 md:w-24 md:h-24 top-0 left-0"></div>
            </div>
          </div>
          <div className="flex flex-col text-yehuda-black items-start h-40 mt-13 px-5 border-gray-500">
            <div className="fex md:text-lg w-full mb-3">
              Hello, I&apos;m{" "}
              <span className="font-semibold">BeatsByYehuda</span>
            </div>
            <div className="md:text-lg">
              I&apos;m a <span className="font-semibold">Music Producer</span>,
              I specialize in creating catchy afrobeats and I&apos;m also a{" "}
              <span className="font-semibold">mix/master engineer</span>
            </div>
            <div className="flex mt-5  mb-6 justify-between items-center">
              <div className="bg-yehuda-lightgray md:mr-8 mr-4 md:p-3 md:rounded-2xl md:text-xl p-2 rounded-xl">
                <FaFacebook />
              </div>
              <div className="bg-yehuda-lightgray md:mr-8 mr-4 md:p-3 md:rounded-2xl md:text-xl p-2 rounded-xl">
                <FaInstagram />
              </div>

              <div className="bg-yehuda-lightgray md:mr-8 mr-4 md:p-3 md:rounded-2xl md:text-xl p-2 rounded-xl">
                <FaXTwitter />
              </div>
              <div className="bg-yehuda-lightgray md:mr-8 mr-4 md:p-3 md:rounded-2xl md:text-xl p-2 rounded-xl">
                <FaYoutube />
              </div>
            </div>
          </div>
        </div>

        <div
          ref={projectRef}
          className="flex items-center md:w-[30%] font-semibold border-black/30 text-yehuda-black justify-center rounded-xl w-[92%] border md:mt-5 h-12 flex-col my-5 mt-10"
        >
          Genres I Produce
        </div>

        <div className="flex items-center font-semibold border-black/30 text-yehuda-black justify-center rounded-xl w-[92%] flex-col">
          <FaArrowDown className="text-xl" />
        </div>
        <div
          className={`transition-all w-[92%] lg:w-[60%] duration-700 ease-in`}
        >
          <div
            ref={item10.ref}
            className="flex sticky  border-black/30 border shadow-sm  font-semibold top-3 z-60 mx-auto bg-yehuda-black text-white w-[50%] items-center justify-center rounded-xl h-12 flex-col mt-2 mb-5"
          >
            Afro Beats
          </div>
          <div
            ref={item3.ref}
            className={`w-full md:bg-yehuda-black md:h-80 overflow-hidden transition-all duration-700 ease-in ${item3.isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"} flex items-center justify-center rounded-xl aspect-square bg-yehuda-lightgray mb-5`}
          >
            <div className="text-2xl overflow-hidden md:h-[80%] md:w-auto md:aspect-square md:rounded-2xl w-full h-full text-white ">
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

          <div ref={item5.ref} className="w-full min-h-60">
            {beatsLoading ? (
              <BeatsLoading />
            ) : (
              <div
                className={`w-full h-60 md:h-90 overflow-y-auto no-scrollbar flex transition-all ${item5.isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"} duration-700 ease-in`}
              >
                {beats
                  .filter((beat) => beat.category === "afrobeats")
                  .map((beat: IBeat) => (
                    <div
                      onClick={() => {
                        setBeat(beat);
                        setIsMusicPlayerOpen(true);
                      }}
                      key={beat._id?.toString()}
                      className="flex shrink-0 md:w-70 md:h-70 w-40 h-40 mr-3"
                    >
                      <Beats
                        beat={beat}
                        setBeat={setBeat}
                        setIsMusicPlayerOpen={setIsMusicPlayerOpen}
                      />
                    </div>
                  ))}
              </div>
            )}
          </div>
          <div
            ref={item2.ref}
            className="flex sticky top-3 z-60 shadow-md bg-yehuda-black mx-auto text-white font-semibold w-[50%] items-center border-black/30 justify-center rounded-xl border h-12 flex-col mb-5"
          >
            Afro Fusion
          </div>
          <div
            ref={item4.ref}
            className={`w-full md:bg-yehuda-black md:h-90 overflow-hidden transition-all duration-700 ease-in ${item4.isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"} flex items-center justify-center rounded-xl aspect-square bg-yehuda-lightgray mb-5`}
          >
            <div className="text-2xl overflow-hidden rounded-2xl md:h-[80%] md:w-auto md:aspect-square w-full h-full text-white">
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

          <div ref={item6.ref} className="w-full min-h-60 ">
            {beatsLoading ? (
              <BeatsLoading />
            ) : (
              <div
                className={`w-full md:h-90 overflow-y-auto no-scrollbar flex h-60 transition-all ${item6.isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"} duration-700 ease-in`}
              >
                {beats
                  .filter((beat) => beat.category === "afrofusion")
                  .map((beat: IBeat) => (
                    <div
                      onClick={() => {
                        setBeat(beat);
                        setIsMusicPlayerOpen(true);
                      }}
                      key={beat._id?.toString()}
                      className="flex shrink-0 md:w-70 md:h-70 w-40 h-40 mr-2"
                    >
                      <Beats
                        beat={beat}
                        setBeat={setBeat}
                        setIsMusicPlayerOpen={setIsMusicPlayerOpen}
                      />
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>

        <div className="bg-yehuda-lightgray/80 md:w-[60%] w-[92%] flex flex-col justify-center items-center rounded-lg h-60">
          <div className="font-semibold text-lg">Follow me on Youtube</div>

          <Link
            href={
              "https://l.instagram.com/?u=https%3A%2F%2Fyoutube.com%2F%40beatsbyehuda%3Fsi%3DypppTO93I5ywiaim%26fbclid%3DPAZXh0bgNhZW0DMTAwAHNydGMGYXBwX2lkDDI1NjI4MTA0MDU1OAABp3XKMC9k6TJ4u3sVwoDvP-4197jgRuvOt64SHJIrJFfdx4XCgvfdCMDqHzk8_aem_HBtrmTCuC3ivFYJKAMwWrA&e=AT1vq1iV_PJqrxzXzIZfdZowq49KsOHQz_9qWIs-YCR-l7dilDztFgxZSz5bPQ8sTwDxG2Yz2R2z_JIU8KFY2Jo_R1SIvyz_YdxIwcVNMg"
            }
            target="_blank"
            className="w-[85%] md:w-[30%]"
          >
            <div className="w-full cursor-pointer text-white flex justify-center items-center h-13 bg-red-600 mt-5 rounded-xl">
              <FaYoutube className="text-2xl mr-3" />
              <div className=""> BeatsByYehuda</div>
            </div>
          </Link>
        </div>
        <div
          onClick={handleScrollToTop}
          className={`fixed right-10 bottom-10 ${isButtonsVisible ? "flex" : "hidden"} justify-center items-center cursor-pointer w-12 h-12 rounded-full border border-white/50 text-white z-70 bg-black shadow-4xl backdrop-blur-2xl`}
        >
          <FaAngleUp />
        </div>

        <div
          ref={contactMeRef}
          className="flex md:w-[30%] w-[42%] font-semibold items-center border-black/30 sticky bg-yehuda-black text-white z-60 top-3 shadow-sm justify-center rounded-xl border h-12 mb-8 flex-col mt-10"
        >
          CONTACT
        </div>
        <div
          ref={item9.ref}
          className={`transition-all duration-700 ease-in ${
            item9.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          } text-sm w-full  mx-auto md:w-[60%] text-yehuda-black flex flex-col justify-center md:h-80 items-center py-10 border-b-gray-400 border-t-gray-400`}
        >
          <div className="flex my-2  items-center box-border w-[88%]">
            <div className="flex shrink-0">
              <FaInstagram className="text-2xl" />
            </div>

            <div className="w-[90%] mx-3">
              <div className="border-b border-yehuda-lightgray"></div>
            </div>
            <div className="text-lg ml-auto"> Yehuda </div>
          </div>
          <div className="flex my-2  items-center w-[88%]">
            <div className="flex shrink-0 rotate-90">
              <FaPhone className="text-xl" />
            </div>
            <div className="w-[90%] mx-3">
              <div className="border-b border-yehuda-lightgray"></div>
            </div>
            <div className="text-lg ml-auto shrink-0"> +234 813 711 4067 </div>
          </div>
          <div className="flex my-2 items-center w-[88%]">
            <div className="flex shrink-0">
              <FaLocationArrow className="text-xl" />
            </div>
            <div className="w-[90%] mx-3">
              <div className="border-b border-yehuda-lightgray"></div>
            </div>
            <div className="text-lg ml-auto shrink- flex shrink-0">
              {" "}
              Kaduna, Nigeria.{" "}
            </div>
          </div>
          <div className="flex my-2  items-center w-[88%]">
            <div className="flex shrink-0">
              <BiLogoGmail className="text-2xl" />
            </div>
            <div className="w-[90%] mx-3">
              <div className="border-b-2 border-yehuda-lightgray"></div>
            </div>
            <div className="text-lg ml-auto flex shrink-0">
              {" "}
              beatsbyyehuda@gmail.com{" "}
            </div>
          </div>
        </div>

        <button className="flex md:w-[30%] cursor-pointer w-[90%] transition-all duration-500 ease-in justify-center items-center my-3 mb-5 rounded-lg hover:rounded-[8em] h-13 bg-yehuda-black text-white">
          Send mail
        </button>
        <div className="mb-20 cursor-pointer flex flex-col items-center w-full mx-auto">
          <div className="w-[90%] md:w-[30%] flex items-center justify-center rounded-lg h-13 bg-green-500">
            <FaWhatsapp className="text-2xl text-white" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
