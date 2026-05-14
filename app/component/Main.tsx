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

  const handleScrollToContactMe = () => {
    contactMeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToBeats = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
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
      <div className="w-full h-full absolute overflow-hidden">
        <div className="border-t-1 w-[200%] relative top-30 mb-25 border-gold-1/50 rotate-33"></div>
        <div className="border-t-1 w-[200%] relative -left-35 top-25 mb-60  border-secondary-2/40 rotate-33"></div>
        <div className="border-t-1 w-[200%] relative -left-35 top-25 mb-60 border-secondary-2/40 rotate-33"></div>
        <div className="border-t-1 w-[200%] relative -left-35 top-25 mb-60 border-secondary-2/40 rotate-33"></div>
        <div className="border-t-1 w-[200%] relative -left-35 top-25 mb-60 border-gold-1/40 rotate-33"></div>
        <div className="border-t-1 w-[200%] relative -left-35 top-25 mb-60 h-40 border-secondary-2/40 rotate-33"></div>
        <div className="border-t-1 w-[200%] relative -left-35 top-25 mb-60 border-secondary-2/40 rotate-33"></div>
        <div className="border-t-1 w-[200%] relative -left-35 top-25 mb-60 border-gold-1/40 rotate-33"></div>
        <div className="border-t-1 w-[200%] relative -left-35 top-25 mb-60 h-40 border-secondary-2/40 rotate-33"></div>
      </div>
      <main
        ref={topRef}
        className="flex flex-col items-center relative min-h-screen h-fit px-[16px]"
      >
        <section
          ref={aboutRef}
          className="flex w-full sm:w-full md:mt-10 md:w-[60%] info-animation mt-[130px] flex-col shrink-0 min-h-[50dvh] xl:justify-between lg:items-start "
        >
          <div className="flex justify-center items-center relative w-full rounded-xl text-white bg-linear-to-tr  border-black">
            <div className="flex pt-[48px] justify-center md:pt-13 pt-4.5 overflow-hidden items-center relative w-full md:h-70 h-auto bg-gold-1 aspect-square border-3 border-primary-5 rounded-full text-white ">
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
          <div className="mt-[40px] w-full px-[16px]">
            <div>
              <div className="text-[32px] w-[70%] text-secondary-2 font-semibold">
                Hi There, I'm{" "}
                <span className="text-gold-1 text-[36px]">Yehuda</span>
              </div>
              <div className="w-full border-b-2 border-t-2 py-[8px] mt-[16px] text-center border-gold-2 ">
                I'm a Music Producer
              </div>
              <div className="flex h-[32px] mt-[16px] items-center">
                <div className="h-[23px] w-[18px] mr-[16px]">
                  <Image
                    src={"/icons/location.svg"}
                    height={100}
                    width={100}
                    alt="location icon"
                    className="h-full"
                  />{" "}
                </div>
                <div className=" text-[16px] text-secondary-3">
                  Kaduna, Nigeria.
                </div>
              </div>
              <div className="flex h-[32px] mt-[16px] items-center">
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
            <div className="mt-[24px] text-[20px] h-[72px] w-full bg-secondary-2 flex items-center justify-center text-primary-2 font-semibold rounded-[64px]">
              <div className="mr-[16px]">Contact Me</div>
              <div className="h-[28px] w-[28px] mr-[16px]">
                <Image
                  src={"/icons/message.svg"}
                  height={100}
                  width={100}
                  alt="location icon"
                  className="h-full"
                />{" "}
              </div>
            </div>
          </div>
        </section>

        <div
          ref={projectRef}
          className="flex flex-row items-center justify-between w-full md:w-[30%] font-semibold border-black/30 text-yehuda-black px-[4px] py-[8px] w-[92%] border-t-2 border-primary-5 md:mt-5 h-[52px] flex-col my-5 mt-[36px]"
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
          className={`transition-all w-full lg:w-[60%] duration-700 ease-in`}
        >
          <div
            ref={item3.ref}
            className={`w-full transition-all duration-700 ease-in ${item3.isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"} flex items-center justify-center mb-5`}
          >
            <div className="text-2xl flex items-center justify-center relative overflow-hidden bg-primary-3 border-1 border-primary-5 sm:overflow-hidden sm:h-[70%] md:h-[80%] 2xl w-full h-[246px] text-white h-[246px] rounded-[4px]">
              <div className="absolute h-[102px] -bottom-10 -left-10 w-[118px] bg-gold-4 rounded-[120%]"></div>
              <div className="absolute h-[102px] -top-10 -right-10 w-[118px] bg-secondary-4 rounded-[120%]"></div>
              <div>Afro Beats</div>
            </div>
          </div>

          <div ref={item5.ref} className="w-full h-auto">
            {beatsLoading ? (
              <BeatsLoading />
            ) : (
              <div
                className={`w-full h-[214px] border-b-2 border-primary-5 overflow-x-auto overflow-y-hidden no-scrollbar flex transition-all ${item5.isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"} duration-700 ease-in`}
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
                      className="flex shrink-0 md:w-70 md:h-70 w-[170px] h-[198px] mr-[8px]"
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
            className={`w-full transition-all duration-700 ease-in ${item4.isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"} flex items-center justify-center mt-[32px]`}
          >
            <div className="text-2xl flex items-center justify-center relative overflow-hidden bg-primary-3 border-1 border-primary-5 sm:overflow-hidden sm:h-[70%] md:h-[80%] 2xl w-full h-[246px] text-white h-[246px] rounded-[4px]">
              <div className="absolute h-[102px] -top-10 -left-10 w-[118px] bg-gold-4 rounded-[120%]"></div>
              <div className="absolute h-[102px] -bottom-10 -right-10 w-[118px] bg-secondary-4 rounded-[120%]"></div>
              <div>Afro Fusion</div>
            </div>
          </div>

          <div ref={item6.ref} className="w-full min-h-60 mt-[16px]">
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

        <div className="bg-primary-1 border-1 border-primary-5 md:w-[60%] mb-[90px] sm:w-[80%] w-full flex flex-col justify-center items-center rounded-lg h-60">
          <div className="font-semibold text-lg">Follow me on Youtube</div>

          <Link
            href={
              "https://l.instagram.com/?u=https%3A%2F%2Fyoutube.com%2F%40beatsbyehuda%3Fsi%3DypppTO93I5ywiaim%26fbclid%3DPAZXh0bgNhZW0DMTAwAHNydGMGYXBwX2lkDDI1NjI4MTA0MDU1OAABp3XKMC9k6TJ4u3sVwoDvP-4197jgRuvOt64SHJIrJFfdx4XCgvfdCMDqHzk8_aem_HBtrmTCuC3ivFYJKAMwWrA&e=AT1vq1iV_PJqrxzXzIZfdZowq49KsOHQz_9qWIs-YCR-l7dilDztFgxZSz5bPQ8sTwDxG2Yz2R2z_JIU8KFY2Jo_R1SIvyz_YdxIwcVNMg"
            }
            target="_blank"
            className="w-[85%]  sm:w-60 md:w-70"
          >
            <div className="w-fullcursor-pointer text-white flex justify-center items-center h-13 bg-red-600 mt-5 rounded-xl">
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
      </main>
      <Footer
        scrollToHome={handleScrollToTop}
        scrollToAbout={handleScrollToAbout}
        scrollToBeats={handleScrollToBeats}
      />
    </>
  );
};

export default Main;
