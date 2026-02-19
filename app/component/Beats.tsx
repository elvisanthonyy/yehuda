import Image from "next/image";
import { IBeat } from "@/models/beat";
import { FaPlay } from "react-icons/fa6";
import React, { SetStateAction } from "react";

interface ChildProps {
  beat: IBeat;
  setBeat: React.Dispatch<SetStateAction<IBeat | null>>;
  setIsMusicPlayerOpen: React.Dispatch<SetStateAction<boolean>>;
}

const Beats = ({ beat, setBeat, setIsMusicPlayerOpen }: ChildProps) => {
  const setMusicPlayer = () => {
    setBeat(beat);
    setIsMusicPlayerOpen(true);
  };
  return (
    <div className="w-full h-full">
      <div className="w-full h-full relative rounded-sm overflow-hidden">
        <div className="absolute h-full top-0 left-0 w-full mx-auto rounded-lg">
          {beat.imageUrl && (
            <Image
              src={beat.imageUrl}
              height={1000}
              width={1000}
              draggable={false}
              className="h-full w-full object-cover"
              alt="back image"
            />
          )}
        </div>
        <div
          //onClick={setMusicPlayer}
          className="flex text-xl text-white justify-center absolute w-13 h-13 py-3 rounded-full backdrop-blur-2xl flex-col bg-black/20 items-center z-40 top-[50%] left-[50%] -translate-[50%]"
        >
          <FaPlay />
        </div>
      </div>
      <div className="w-full text-yehuda-black font-semibold text-xs overflow-hidden h-10 whitespace-nowrap text-ellipsis border-yehuda-black/30 backdrop-blur-xl flex flex-nowrap items-end z-40 bottom-7">
        {beat.name}
      </div>
    </div>
  );
};

export default Beats;
