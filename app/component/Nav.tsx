import { useState } from "react";
import { FaMessage } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

interface ChildProps {
  scrollToHome: () => void;
  scrollToAfroFusion: () => void;
  scrollToAfroBeats: () => void;
  handleScrollToSocials: () => void;
}

const Nav = ({
  scrollToHome,
  scrollToAfroBeats,
  scrollToAfroFusion,
  handleScrollToSocials,
}: ChildProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="flex border-b-1 border-primary-5 md:px-[64px] xl:px-[168px] nav-animation bg-primary-1 text-xl justify-between items-center z-10 px-[32px] absolute top-0 left-0 w-full h-[72px] md:h-[88px]">
      <div className="flex items-center">
        <div className="cursor-pointer mr-[20px] flex justify-center font-bold items-center text-[20px] w-11 h-11 text-primary-1 flex justify-center items-center rounded-full bg-secondary-2">
          B
        </div>
        <div className="font-bold text-secondary-2 text-[16px] lg:text-[20px]">
          BeatsByYehuda
        </div>
      </div>
      <div
        onClick={() =>
          isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)
        }
        className="text-3xl md:hidden cursor-pointer flex flex-col justify-center items-center"
      >
        <span
          className={`w-[28px] h-[2px] transition-all ease-in duration-500 bg-secondary-2 mb-[4px] rounded-[2px] ${isMenuOpen && "-rotate-45 translate-y-2"}`}
        ></span>
        <span
          className={`w-[28px] h-[2px] transition-all ease-in duration-500 bg-secondary-2 mb-[4px] rounded-[2px] ${isMenuOpen && "opacity-0"}`}
        ></span>
        <span
          className={`w-[28px] h-[2px] transition-all ease-in duration-500 bg-secondary-2 mb-[4px] rounded-[2px] ${isMenuOpen && "rotate-45 -translate-y-1"}`}
        ></span>
      </div>
      <div
        className={`absolute shrink-0 md:sticky gap-y-[32px] md:gap-y-[0px] md:w-fit md:flex transition-all ease-in duration-500 w-full grid ${isMenuOpen ? "tranlate-x-0" : "-translate-x-1000 md:translate-x-0"} place-items-center place-content-center left-0 border-b-1 md:border-0 border-primary-5 top-[72px] md:top-0 h-[448px] md:h-fit md:items-center md:items-center bg-primary-1`}
      >
        <div className="flex justify-center hover:bg-white hover:text-primary-2 hover:px-[36px] tansition-all ease-in duration-500 cursor-pointer items-center text-[16px] md:text-[14px] lg:text-[16px] h-[48px] rounded-[32px] md:px-[16px]  md:px-[32px]">
          Home
        </div>
        <div
          className="flex rounded-[32px] justify-center hover:bg-white hover:text-primary-2 hover:px-[36px] tansition-all ease-in duration-500 cursor-pointer items-center text-[16px] md:text-[14px] lg:text-[16px] md:ml-[8px] md:px-[16px] xl:px-[32px] h-[46px] cursor-pointer"
          onClick={() => {
            scrollToAfroBeats();
            setIsMenuOpen(false);
          }}
        >
          Afro Beats
        </div>
        <div
          className="flex rounded-[32px] justify-center hover:bg-white hover:text-primary-2 hover:px-[36px] tansition-all ease-in duration-500 cursor-pointer items-center text-[16px] md:text-[14px] lg:text-[16px] md:ml-[8px] md:px-[16px] xl:px-[32px] px-[32px] h-[46px] cursor-pointer"
          onClick={() => {
            scrollToAfroFusion();
            setIsMenuOpen(false);
          }}
        >
          Afro Fusion
        </div>
        <div
          className="flex justify-center hover:bg-white hover:text-primary-2 hover:px-[36px] tansition-all ease-in duration-500 cursor-pointer items-center rounded-[32px] text-[16px] h-[46px] md:text-[14px] lg:text-[16px] md:ml-[8px] md:px-[16px] xl:px-[32px] cursor-pointer"
          onClick={() => {
            handleScrollToSocials();
            setIsMenuOpen(false);
          }}
        >
          Social Media
        </div>
      </div>
    </nav>
  );
};

export default Nav;
