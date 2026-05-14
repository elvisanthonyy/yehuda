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
    <nav className="flex sm:px-[10%] border-b-1 border-primary-5 md:px-[20%] nav-animation bg-primary-1 text-xl justify-between items-center z-10 px-[5%] md:mt-2 absolute top-0 left-0 w-full h-[72px]">
      <div className="flex items-center">
        <div className="cursor-pointer mr-[20px] flex justify-center font-bold items-center text-lg w-11 h-11 text-primary-1 flex justify-center items-center rounded-full bg-secondary-2">
          Y
        </div>
        <div className="font-bold text-secondary-2 text-xl">BeatsByYehuda</div>
      </div>
      <div
        onClick={() =>
          isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)
        }
        className="text-3xl cursor-pointer flex flex-col justify-center items-center"
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
        className={`absolute gap-y-[32px] transition-all ease-in duration-500 w-full grid ${isMenuOpen ? "tranlate-x-0" : "-translate-x-1000"} place-items-center place-content-center left-0 border-b-1 border-primary-5 top-[80px] h-[448px] bg-primary-1`}
      >
        <div className="text-[18px] h-[46px]">Home</div>
        <div
          className="text-[18px] h-[46px] cursor-pointer"
          onClick={() => {
            scrollToAfroBeats();
            setIsMenuOpen(false);
          }}
        >
          Afro Beats
        </div>
        <div
          className="text-[18px] h-[46px] cursor-pointer"
          onClick={() => {
            scrollToAfroFusion();
            setIsMenuOpen(false);
          }}
        >
          Afro Fusion
        </div>
        <div
          className="text-[18px] h-[46px] cursor-pointer"
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
