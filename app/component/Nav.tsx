import { FaMessage } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

interface ChildProps {
  handleScrollToContactMe: () => void;
}

const Nav = ({ handleScrollToContactMe }: ChildProps) => {
  return (
    <nav className="flex sm:px-[10%] border-b-1 border-primary-5 md:px-[20%] nav-animation bg-primary-1 text-xl justify-between items-center z-10 px-[5%] md:mt-2 absolute top-0 left-0 w-full h-[80px]">
      <div
        onClick={handleScrollToContactMe}
        className="cursor-pointer flex justify-center font-semibold items-center text-lg w-11 h-11 text-primary-1 flex justify-center items-center rounded-full bg-secondary-2"
      >
        Y
      </div>
      <div className="">
        <div className="font-bold text-secondary-2 text-xl">BeatsByYehuda</div>
      </div>
      <div className="text-3xl flex items-center pb-2.5"></div>
      
    </nav>
  );
};

export default Nav;
