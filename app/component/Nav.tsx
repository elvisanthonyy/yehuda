import { FaMessage } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

const Nav = () => {
  return (
    <nav className="flex text-xl justify-between items-center z-10 px-[5%] absolute top-0 left-0 w-full h-18">
      <div className="">
        <div className="font-bold text-xl">BeatsByYehuda</div>
      </div>
      <div className="text-3xl flex items-center pb-2.5">👉🏾</div>
      <div className="flex justify-center items-center text-lg w-11 h-11 text-white rounded-full bg-black/80">
        <FiMail />
      </div>
    </nav>
  );
};

export default Nav;
