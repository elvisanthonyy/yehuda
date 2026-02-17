import { FaMessage } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

interface ChildProps {
  handleScrollToContactMe: () => void;
}

const Nav = ({ handleScrollToContactMe }: ChildProps) => {
  return (
    <nav className="flex nav-animation text-xl justify-between items-center z-10 px-[5%] absolute top-0 left-0 w-full h-18">
      <div className="">
        <div className="font-bold text-yehuda-black text-xl">BeatsByYehuda</div>
      </div>
      <div className="text-3xl flex items-center pb-2.5">👉🏾</div>
      <div
        onClick={handleScrollToContactMe}
        className="cursor-pointer flex justify-center items-center text-lg w-11 h-11 text-white rounded-full bg-yehuda-black"
      >
        <FiMail />
      </div>
    </nav>
  );
};

export default Nav;
