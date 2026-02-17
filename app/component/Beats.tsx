import Image from "next/image";
import { IBeat } from "@/models/beat";
import { FaPlay } from "react-icons/fa6";

interface ChildProps {
  beat: IBeat;
}

const Beats = ({ beat }: ChildProps) => {
  return (
    <div className="w-full h-65 relative mb-5 rounded-sm overflow-hidden">
      <div className="absolute h-full top-0 left-0 w-full mx-auto rounded-lg">
        {" "}
        <Image
          src={beat.imageUrl}
          height={1000}
          width={1000}
          draggable={false}
          className="h-full w-full object-cover"
          alt="back image"
        />
      </div>
      <div className="flex text-xl text-white justify-center absolute w-20 h-15 py-3 border border-white rounded-sm backdrop-blur-2xl flex-col bg-white/10 items-center z-40 top-[50%] left-[50%] -translate-[50%]">
        <FaPlay />
      </div>
      <div className="absolute w-[80%] py-3 border border-white/80 rounded-sm backdrop-blur-xl flex flex-col bg-white/10 items-center z-40 bottom-7 left-[50%] -translate-x-[50%]">
        <div className="text-white text-xs">{beat.name}</div>
      </div>
    </div>
  );
};

export default Beats;
