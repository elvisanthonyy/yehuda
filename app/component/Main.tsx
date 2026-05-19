"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Nav from "./Nav";
import api from "@/libs/api";
import { IBeat } from "@/models/beat";
import { FaYoutube } from "react-icons/fa";
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
import Footer from "./Footer";

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
  const aboutRef = useRef<HTMLDivElement>(null);
  const [isButtonsVisible, setIsButtonVisble] = useState(false);
  const [beats, setBeats] = useState<IBeat[] | []>([]);
  const [isMusicPlayerOpen, setIsMusicPlayerOpen] = useState(false);
  const [beat, setBeat] = useState<IBeat | null>(null);
  const [beatsLoading, setBeatsLoading] = useState(false);

  /*const handleScrollToProject = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };*/

  const handleScrollToSocials = () => {
    contactMeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToAfroBeats = () => {
    item3.ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToAfroFusion = () => {
    item4.ref.current?.scrollIntoView({ behavior: "smooth" });
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
      <Nav
        handleScrollToSocials={handleScrollToSocials}
        scrollToHome={handleScrollToTop}
        scrollToAfroFusion={handleScrollToAfroFusion}
        scrollToAfroBeats={handleScrollToAfroBeats}
      />
      {isMusicPlayerOpen && (
        <MusicPlayer setIsMusiPlayerOpen={setIsMusicPlayerOpen} beat={beat} />
      )}
      <div className="w-full h-full absolute overflow-hidden">
        <div className="border-t w-[200%] relative top-30 mb-25 border-gold-1/50 rotate-33"></div>
        <div className="border-t w-[200%] relative -left-35 md:-left-70 top-25 mb-60 md:mb-120  border-secondary-2/40 rotate-33"></div>
        <div className="border-t w-[200%] relative -left-35 md:-left-70 top-25 mb-60 md:mb-120 border-secondary-2/40 rotate-33"></div>
        <div className="border-t w-[200%] relative -left-35 md:-left-70 top-25 mb-60 md:mb-120 border-secondary-2/40 rotate-33"></div>
        <div className="border-t w-[200%] relative -left-35 md:-left-70 top-25 mb-60 md:mb-120 border-gold-1/40 rotate-33"></div>
        <div className="border-t w-[200%] relative -left-35 md:-left-70 top-25 mb-60 md:mb-120 h-40 border-secondary-2/40 rotate-33"></div>
        <div className="border-t w-[200%] relative -left-35 md:-left-70 top-25 mb-60 md:mb-120 border-secondary-2/40 rotate-33"></div>
        <div className="border-t w-[200%] relative -left-35 md:-left-70 top-25 mb-60 md:mb-120 border-gold-1/40 rotate-33"></div>
        <div className="border-t  w-[200%] relative -left-35 md:-left-70 top-25 mb-60 md:mb-120 h-40 border-secondary-2/40 rotate-33"></div>
      </div>
      <main
        ref={topRef}
        className="flex flex-col sm:px-[32px] items-center relative min-h-screen h-fit px-[16px] xl:px-[168px] md:px-[64px]"
      >
        <section
          ref={aboutRef}
          className="flex md:items-center relative w-full md:flex-row sm:w-full info-animation mt-[122px] md:mt-[156px] flex-col shrink-0 min-h-[50dvh] xl:justify-between"
        >
          <div className="flex md:order-2 md:top-0 md:right-0 md:ml-auto justify-center items-center shrink-0 relative w-full md:w-[50%] lg:w-[45%] xl:w-[45%] rounded-xl text-white bg-linear-to-tr  border-black">
            <div className="flex pt-[48px] justify-center md:pt-13 pt-4.5 overflow-hidden items-center relative w-full h-auto bg-linear-to-b from-gold-2 to-gold-1 aspect-square border-3 border-secondary-5 rounded-full text-white ">
              <Image
                src={"/yehuda.png"}
                height={1000}
                width={1000}
                draggable={false}
                alt="afro"
                className="h-[160%] object-cover"
              />
            </div>
          </div>
          <div className="mt-[40px] md:order-1 flex flex-col w-full md:w-[45%]">
            <div className="px-[16px]">
              <div className="text-[32px] md:text-[40px] xl:text-[54px] w-[70%] md:w-full text-secondary-2 font-semibold">
                Hi There, I'm <br />
                <span className="text-gold-1 text-[36px] md:text-[42px] xl:text-[58px]">
                  BeatsByYehuda
                </span>
              </div>
              <div className="w-full md:text-[20px] xl:text-[24px] border-b-2 border-t-2 py-[8px] md:py-[4px] mt-[16px] text-center border-gold-2 ">
                I'm a Music Producer
              </div>
              <div className="flex h-[32px] mt-[16px]  items-center">
                <div className="h-[23px] w-[18px] mr-[16px]">
                  <Image
                    src={"/icons/location.svg"}
                    height={100}
                    width={100}
                    alt="location icon"
                    className="h-full"
                  />{" "}
                </div>
                <div className="text-[16px] text-secondary-3">
                  Kaduna, Nigeria.
                </div>
              </div>
              <div className="flex h-[32px] mt-[16px] md:mt-[8px] xl:mt-[16px] items-center">
                <div className="h-[23px] w-[18px] mr-[16px]">
                  <Image
                    src={"/icons/email.svg"}
                    height={100}
                    width={100}
                    alt="location icon"
                    className="h-full"
                  />{" "}
                </div>
                <div className=" text-[16px] text-secondary-3">
                  officialyehuda@gmail.com
                </div>
              </div>
            </div>

            <Link
              href="https://wa.me/09023390682"
              target="_blank"
              className="mt-[24px] md:mt-[16px] tansition-all ease-in duration-500 md:w-[300px] xl:w-[444px] hover:text-secondary-2 cursor-pointer hover:bg-white/0 hover:border-1 hover:border-secondary-2 text-[20px] md:text-[20px] xl:text-[24px] h-[72px] w-full bg-secondary-2 flex items-center justify-center text-primary-2 font-semibold rounded-[64px]"
            >
              <div className="mr-[16px] tansition-all ease-in duration-500 ">
                Contact Me
              </div>
              <div className="h-[28px] w-[28px] mr-[16px]">
                <Image
                  src={"/icons/message.svg"}
                  height={100}
                  width={100}
                  alt="location icon"
                  className="h-full"
                />{" "}
              </div>
            </Link>
          </div>
        </section>

        <div
          ref={projectRef}
          className="flex flex-row items-center justify-between md:mt-[68px] w-full md:px-[32px] font-semibold border-black/30 text-yehuda-black px-[4px] py-[8px] md:px-[4px] w-[92%] border-t-2 border-primary-5 md:border-t-0 md:border-l-[3px] md:border-r-[3px] h-[52px] md:h-[48px] flex-col mt-[36px]"
        >
          <div className="text-[20px] text-secondary-1">Genres I Produce</div>
          <div>
            <div className="h-[36px] w-[36px] mr-[16px]">
              <Image
                src={"/icons/music.svg"}
                height={100}
                width={100}
                alt="location icon"
                className="h-full"
              />{" "}
            </div>
          </div>
        </div>

        <div
          className={`transition-all w-full mt-[24px] md:mt-[40px] duration-700 ease-in`}
        >
          <div
            ref={item3.ref}
            className={`w-full relative transition-all duration-700 ease-in ${item3.isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"} flex items-center md:justify-start justify-center mb-5`}
          >
            <div className="text-2xl md:w-[65%] bg-linear-to-b from-primary-1 to-primary-3 flex flex-col items-center justify-center relative overflow-hidden border md:h-[240px] lg:h-[300px] border-primary-5 sm:overflow-hidden sm:h- md:h-[80%] 2xl w-full h-[246px] text-white h-[246px] rounded-[4px]">
              <div className="absolute h-[102px] md:h-[200px] md:-left-[52px] md:-bottom-20 md:w-[200px] -bottom-10 -left-10 w-[118px] bg-gold-4 rounded-[120%]"></div>
              <div className="absolute h-[102px] -top-10 -right-10 w-[118px] md:hidden bg-secondary-2 rounded-[120%]"></div>
              <div className="mb-[64px] md:mb-0">
                Afro <span className="text-secondary-5">Beats</span>
              </div>
            </div>
            <div className="flex overflow-hidden items-center overflow-hidden justify-center top-[28px] md:top-0 md:bg-primary-1 rounded-[8px] md:border-1 md:border-primary-5 h-full absolute md:w-[33%] md:right-0">
              <div className="absolute hidden md:flex h-[102px] md:h-[200px] -right-[52px] md:-top-20 md:w-[200px] w-[118px] bg-secondary-2 rounded-[120%]"></div>
              <div className="h-[70px] md:w-[88px] md:h-[88px] w-[70px] mt-[16px]">
                <Image
                  src={"/icons/drums.svg"}
                  height={100}
                  width={100}
                  alt="location icon"
                  className="h-full"
                />{" "}
              </div>
            </div>
          </div>

          <div ref={item5.ref} className="w-full h-fit mt-[16px] md:mt-[24px]">
            {beatsLoading ? (
              <BeatsLoading />
            ) : (
              <div
                className={`w-full h-fit border-b-2 border-primary-5 overflow-x-auto overflow-y-hidden no-scrollbar flex transition-all ${item5.isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"} duration-700 ease-in`}
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
                      className="flex shrink-0 md:w-[300px] md:h-[340px] w-[170px] h-[198px] mr-[8px]"
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
            ref={item4.ref}
            className={`w-full relative transition-all duration-700 ease-in ${item4.isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"} flex items-center md:justify-end mt-[24px] md:mt-[40px] justify-center`}
          >
            <div className="text-2xl md:w-[65%] bg-linear-to-b from-primary-1 to-primary-3 flex flex-col items-center justify-center relative overflow-hidden border  md:h-[240px] lg:h-[300px] border-primary-5 sm:overflow-hidden sm:h- md:h-[80%] 2xl w-full h-[246px] text-white h-[246px] rounded-[4px]">
              <div className="absolute h-[102px] md:h-[200px] md:w-[200px] -bottom-10 md:-bottom-20 -right-10 w-[118px] bg-gold-4 rounded-[120%]"></div>
              <div className="absolute h-[102px] -left-10 -top-10 md:-top-10 md:-right-10 w-[118px] md:hidden bg-secondary-2 rounded-[120%]"></div>
              <div className="mb-[64px] md:mb-0">
                Afro <span className="text-secondary-5">Fusion</span>
              </div>
            </div>
            <div className="flex overflow-hidden items-center justify-center top-[28px] md:top-0 md:bg-primary-1 rounded-[8px] md:border-1 md:border-primary-5 h-full absolute md:w-[33%] md:left-0">
              <div className="absolute hidden md:flex h-[102px] md:h-[200px] -left-[52px] -top-20 md:w-[200px] w-[118px] bg-secondary-2 rounded-[120%]"></div>
              <div className="h-[64px] md:w-[80px] md:h-[80px] w-[64px] mt-[16px]">
                <Image
                  src={"/icons/piano.svg"}
                  height={100}
                  width={100}
                  alt="location icon"
                  className="h-full"
                />{" "}
              </div>
            </div>
          </div>

          <div ref={item6.ref} className="w-full mt-[16px]">
            {beatsLoading ? (
              <BeatsLoading />
            ) : (
              <div
                className={`w-full h-[222px] border-b-2 border-primary-5 md:h-fit overflow-y-hidden no-scrollbar flex h-60 transition-all ${item6.isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"} duration-700 ease-in`}
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
                      className="flex shrink-0 md:w-[300px] md:h-[340px] w-[170px] h-[198px] mr-[8px]"
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

        <div className="bg-primary-1 mt-[24px] md:mt-[40px] border-1 border-primary-5 md:w-fit px-[32px] mb-[90px] w-full flex flex-col justify-center items-center rounded-lg h-60">
          <div className="font-semibold text-[18px]">Follow me on Youtube</div>

          <Link
            href={
              "https://l.instagram.com/?u=https%3A%2F%2Fyoutube.com%2F%40beatsbyehuda%3Fsi%3DypppTO93I5ywiaim%26fbclid%3DPAZXh0bgNhZW0DMTAwAHNydGMGYXBwX2lkDDI1NjI4MTA0MDU1OAABp3XKMC9k6TJ4u3sVwoDvP-4197jgRuvOt64SHJIrJFfdx4XCgvfdCMDqHzk8_aem_HBtrmTCuC3ivFYJKAMwWrA&e=AT1vq1iV_PJqrxzXzIZfdZowq49KsOHQz_9qWIs-YCR-l7dilDztFgxZSz5bPQ8sTwDxG2Yz2R2z_JIU8KFY2Jo_R1SIvyz_YdxIwcVNMg"
            }
            target="_blank"
            className="w-[85%]  sm:w-60 md:w-70"
          >
            <div className="w-fullcursor-pointer text-white flex justify-center items-center h-13 bg-red-600 mt-[16px] rounded-[32px]">
              <FaYoutube className="text-2xl mr-[12px]" />
              <div className="text-[16x]"> BeatsByYehuda</div>
            </div>
          </Link>
        </div>
        <div
          onClick={handleScrollToTop}
          className={`fixed right-10 bottom-10 ${isButtonsVisible ? "flex" : "hidden"} justify-center items-center cursor-pointer w-12 h-12 rounded-full border border-white/50 text-white z-70 bg-black shadow-4xl backdrop-blur-2xl`}
        >
          <FaAngleUp />
        </div>
      </main>
      <div ref={contactMeRef}>
        <Footer />
      </div>
    </>
  );
};

export default Main;
