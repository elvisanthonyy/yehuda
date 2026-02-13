import Image from "next/image";
import { IBeat } from "@/models/beat";

interface ChildProps {
  beat: IBeat;
}

const Beats = ({ beat }: ChildProps) => {
  return (
    <div className="w-full aspect-square relative mb-5 rounded-2xl overflow-hidden">
      <div className="absolute h-full top-0 left-0 w-full h-35 mx-auto rounded-lg">
        {" "}
        <Image
          src={beat.imageUrl}
          height={1000}
          width={1000}
          className="h-full w-full object-cover"
          alt="back image"
        />
      </div>
      <div className="absolute w-[80%] py-3 border border-white rounded-xl backdrop-blur-2xl flex items-center flex flex-col bg-white/10 items-center z-40 top-[50%] left-[50%] -translate-[50%]">
        <div className="text-white text-xs">{beat.name}</div>
      </div>
    </div>
  );
};

export default Beats;
