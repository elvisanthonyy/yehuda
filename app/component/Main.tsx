"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Nav from "./Nav";
import api from "@/libs/api";
import { IBeat } from "@/models/beat";
import { FaYoutube } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import Beats from "./Beats";
import MusicPlayer from "./MusicPlayer";
import BeatsLoading from "./loading/BeatsLoading";
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
        <div className="border-t w-[200%] relative top-30 mb-25 border-gold-1/20 rotate-33"></div>
        <div className="border-t w-[200%] relative -left-35 md:-left-70 top-25 mb-60 md:mb-120  border-secondary-2/20 rotate-33"></div>
        <div className="border-t w-[200%] relative -left-35 md:-left-70 top-25 mb-60 md:mb-120 border-secondary-2/20 rotate-33"></div>
        <div className="border-t w-[200%] relative -left-35 md:-left-70 top-25 mb-60 md:mb-120 border-secondary-2/20 rotate-33"></div>
        <div className="border-t w-[200%] relative -left-35 md:-left-70 top-25 mb-60 md:mb-120 border-gold-1/20 rotate-33"></div>
        <div className="border-t w-[200%] relative -left-35 md:-left-70 top-25 mb-60 md:mb-120 h-40 border-secondary-2/20 rotate-33"></div>
        <div className="border-t w-[200%] relative -left-35 md:-left-70 top-25 mb-60 md:mb-120 border-secondary-2/20 rotate-33"></div>
        <div className="border-t w-[200%] relative -left-35 md:-left-70 top-25 mb-60 md:mb-120 border-gold-1/20 rotate-33"></div>
        <div className="border-t  w-[200%] relative -left-35 md:-left-70 top-25 mb-60 md:mb-120 h-40 border-secondary-2/20 rotate-33"></div>
      </div>
      <main
        ref={topRef}
        className="flex flex-col sm:px-[24px] items-center relative min-h-screen h-fit px-[16px] xl:px-[168px] md:px-[64px]"
      >
        <section
          ref={aboutRef}
          className="flex bg-[#333333] md:bg-white/0 md:gap-[24px] px-4 py-4 md:p-0 rounded-[28px] md:items-center relative w-full md:flex-row sm:w-full info-animation md:mt-[120px] md:h-[350px] mt-[88px] flex-col shrink-0"
        >
          <div className="flex aspect-[7/5] md:border md:border-primary-4 md:h-full h-auto overflow-hidden w-full md:top-0 md:right-0 justify-center items-center shrink-0 relative w-full md:w-[50%] md:w-[50%] rounded-xl text-white bg-linear-to-tr  border-black">
            <div className="flex w-full h-full pt-[48px] md:h-fit bg-red-300  rounded-[16px] justify-center md:pt-13 pt-4.5 overflow-hidden items-center relative h-auto bg-linear-to-b from-gold-3 to-gold-4">
              <Image
                src={"/yehuda.png"}
                height={400}
                width={400}
                draggable={false}
                alt="afro"
                className="mt-24 "
              />
            </div>
          </div>
          <div className="mt-[32px] md:w-[60%] md:justify-center md:border md:border-primary-5 bg-[#333333] md:h-full md:mt-0 md:px-[40px] rounded-[12px] md:order-1 flex flex-col w-full">
            <div className="flex flex-col gap-3">
              <div className="text-[24px] px-2 leading-[1.4] md:text-[28px] tracking-tight w-full md:w-full text-secondary-2 font-semibold">
                <span className="text-secondary-5">
                  Hi There, <br />
                </span>
                I'm BeatsByYehuda
              </div>
              <div className="w-full rounded-[32px] border border-primary-5 bg-[#38372E] my-1 md:text-[16px] px-6 py-[8px] md:my-[12px] text-[14px] md:py-[8px] text-left border-primary-2 text-secondary-2">
                A Music Producer
              </div>
              <div className="flex gap-3 items-center">
                <div className="h-[20px] aspect-[1/1]">
                  <Image
                    src={"/icons/location.svg"}
                    height={100}
                    width={100}
                    alt="location icon"
                    className="h-full"
                  />{" "}
                </div>
                <div className="text-[14px] text-secondary-2">
                  Kaduna, Nigeria.
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="h-[20px] aspect-[1/1]">
                  <Image
                    src={"/icons/email.svg"}
                    height={100}
                    width={100}
                    alt="location icon"
                    className="h-full"
                  />{" "}
                </div>
                <div className=" text-[14px] text-secondary-2">
                  officialyehuda@gmail.com
                </div>
              </div>
            </div>

            <Link
              href="https://wa.me/09023390682"
              target="_blank"
              className="mt-[32px] md:mt-[16px] gap-2 tansition-all ease-in duration-500 md:w-full hover:text-secondary-2 cursor-pointer hover:bg-white/0 hover:border-1 hover:border-secondary-2 text-[14px] md:text-[18px] h-[54px] md:h-[60px] w-full bg-secondary-2 flex items-center justify-center text-primary-2 rounded-[64px]"
            >
              <div className="tansition-all ease-in duration-500 ">
                Contact Me
              </div>
              <div className="h-[20px] w-[20px]">
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
          className="flex flex-row bg-primary-2 items-center justify-between md:mt-[40px] w-full  font-semibold border-black-3 text-yehuda-black py-[8px] md:px-[4px] w-[92%] border-t border-b border-primary-5 h-[52px] md:h-[48px] flex-col mt-[24px]"
        >
          <div className="text-[16px] md:text-[18px] text-secondary-4">
            Genres I Produce
          </div>
          <div>
            <div className="h-[24px] aspect-square">
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
          className={`transition-all w-full mt-[24px] md:mt-[32px] duration-700 ease-in`}
        >
          <div
            ref={item3.ref}
            className={`w-full relative transition-all duration-700 ease-in ${item3.isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"} flex items-center md:justify-start justify-center mb-3`}
          >
            <div className="text-2xl md:w-[65%] bg-[#262626] flex flex-col items-center justify-center relative overflow-hidden border md:h-[220px] border-primary-5 sm:overflow-hidden sm:h- 2xl w-full aspect-[8/5] text-white md:rounded-[16px] rounded-[12px]">
              <div className="absolute h-[102px] blur-[120px] md:h-[200px] md:-left-[52px] md:-bottom-20 md:w-[200px] -bottom-10 -left-10 w-[118px] bg-gold-3/50 rounded-[120%]"></div>
              <div className="absolute h-[102px] blur-[80px] -top-10 -right-10 w-[118px] md:hidden bg-secondary-2 hidden rounded-[120%]"></div>
              <div className="mb-[16px] text-[18px] font-semibold md:mb-0">
                Afro <span className="text-secondary-5">Beats</span>
              </div>
            </div>
            <div className="flex overflow-hidden items-center overflow-hidden justify-center top-[48%] md:top-0  md:bg-[#262626] rounded-[16px] md:border-1 md:border-primary-5 md:h-full absolute md:w-[34%] md:right-0">
              <div className="absolute hidden blur-[120px] md:flex h-[102px] md:h-[200px] -right-[52px] md:-top-20 md:w-[200px] w-[118px] bg-secondary-2 rounded-[120%]"></div>
              <div className="h-[40px] md:w-[60px] md:h-[60px] w-[70px] mt-[16px]">
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

          <div ref={item5.ref} className="w-full h-fit mt-[12px] md:mt-[16px]">
            {beatsLoading ? (
              <BeatsLoading />
            ) : (
              <div
                className={`w-full h-fit border-b border-primary-4 overflow-x-auto overflow-y-hidden no-scrollbar flex transition-all ${item5.isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"} duration-700 ease-in`}
              >
                {beats
                  ?.filter((beat) => beat.category === "afrobeats")
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
            className={`w-full relative transition-all duration-700 ease-in ${item4.isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"} flex items-center md:justify-end mt-[16px] md:mt-[32px] justify-center`}
          >
            <div className="text-2xl md:w-[65%] bg-[#262626] flex flex-col items-center justify-center relative overflow-hidden border  md:h-[220px] border-primary-5 sm:overflow-hidden md:h-[80%] 2xl w-full aspect-[8/5] text-white md:rounded-[16px] rounded-[12px]">
              <div className="absolute h-[102px] blur-[120px] md:h-[200px] md:w-[200px] -bottom-10 md:-bottom-20 -right-10 w-[118px] bg-gold-2/50 rounded-[120%]"></div>
              <div className="absolute h-[102px] hidden blur-[80px] -left-10 -top-10 md:-top-10 md:-right-10 w-[118px] md:hidden bg-secondary-2 rounded-[120%]"></div>
              <div className="mb-[32px] text-[18px] font-semibold md:mb-0">
                Afro <span className="text-secondary-5">Fusion</span>
              </div>
            </div>
            <div className="flex overflow-hidden items-center justify-center top-[48%] md:top-0 md:bg-[#262626] rounded-[16px] md:border-1 md:border-primary-5 md:h-full absolute md:w-[34%] md:left-0">
              <div className="absolute hidden md:flex blur-[120px] h-[102px] md:h-[200px] -left-[52px] -top-20 md:w-[200px] w-[118px] bg-secondary-2 rounded-[120%]"></div>
              <div className="h-[40px] md:w-[60px]  md:h-[80px] w-[64px] mt-[16px]">
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

          <div ref={item6.ref} className="w-full mt-[12px] md:mt-[16px]">
            {beatsLoading ? (
              <BeatsLoading />
            ) : (
              <div
                className={`w-full border-b border-primary-4 md:h-fit overflow-y-hidden no-scrollbar flex transition-all ${item6.isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"} duration-700 ease-in`}
              >
                {beats
                  ?.filter((beat) => beat.category === "afrofusion")
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

        <div className="bg-primary-1 mt-[24px] md:mt-[32px] border-1 border-primary-4 md:border-primary-3 md:w-fit px-[32px] md:px-[64px] mb-[64px] w-full flex flex-col justify-center items-center md:rounded-[16px] rounded-[12px] h-fit md:py-12 py-8">
          <div className="font-semibold text-[16px]">Follow me on Youtube</div>

          <Link
            href={
              "https://l.instagram.com/?u=https%3A%2F%2Fyoutube.com%2F%40beatsbyehuda%3Fsi%3DypppTO93I5ywiaim%26fbclid%3DPAZXh0bgNhZW0DMTAwAHNydGMGYXBwX2lkDDI1NjI4MTA0MDU1OAABp3XKMC9k6TJ4u3sVwoDvP-4197jgRuvOt64SHJIrJFfdx4XCgvfdCMDqHzk8_aem_HBtrmTCuC3ivFYJKAMwWrA&e=AT1vq1iV_PJqrxzXzIZfdZowq49KsOHQz_9qWIs-YCR-l7dilDztFgxZSz5bPQ8sTwDxG2Yz2R2z_JIU8KFY2Jo_R1SIvyz_YdxIwcVNMg"
            }
            target="_blank"
            className="w-[85%]  sm:w-60 md:w-70"
          >
            <div className="w-full gap-2 cursor-pointer text-white flex justify-center items-center h-13 bg-red-600 mt-[16px] rounded-[32px]">
              <FaYoutube className="text-[20px]" />
              <div className="text-[16x] text-secondary-2"> BeatsByYehuda</div>
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
