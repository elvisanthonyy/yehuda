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
    <div className="w-full h-full flex flex-col">
      <div className="h-full aspect-square relative rounded-sm overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full mx-auto rounded-lg">
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
          className="flex text-xl text-white justify-center absolute w-[64px] h-[64px] py-3 rounded-full backdrop-blur-2xl flex-col bg-black/20 items-center z-40 top-[50%] left-[50%] -translate-[50%]"
        >
          <div className="h-[24px] w-[24px]">
            <Image
              src={"/icons/play.svg"}
              height={100}
              width={100}
              alt="location icon"
              className="h-full"
            />{" "}
          </div>
        </div>
      </div>
      <div className="md:text-[18px] mt-[8px] md:mt-[16px] mb-[8px] w-[90%] text-secondary-2 text-[16px] overflow-hidden h-[30px] whitespace-nowrap text-ellipsis border-yehuda-black/30 flex flex-nowrap items-end z-40">
        {beat.name}
      </div>
    </div>
  );
};

export default Beats;
