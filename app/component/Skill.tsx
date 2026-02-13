interface ChildProps {
  progress: number;
  name: string;
}

const Skill = ({ progress, name }: ChildProps) => {
  return (
    <div className="px-5 flex my-2 justify-start items-center w-[90%] h-5">
      <div className="w-[75%] text-md text-gray-200">{name}</div>
      <div className="flex justify-between items-center">
        <span
          className={`w-3 h-3   ${
            progress >= 25 ? "bg-amber-300/25" : "bg-gray-600/20"
          } rounded-full  mx-1`}
        ></span>
        <span
          className={`w-3 h-3  ${
            progress >= 50 ? "bg-amber-300/50" : "bg-gray-600/20"
          } rounded-full  mx-1`}
        ></span>
        <span
          className={`w-3 h-3 ${
            progress >= 75 ? "bg-green-500/70" : "bg-gray-600/20"
          } rounded-full  mx-1`}
        ></span>
        <span
          className={`w-3 h-3  ${
            progress >= 100 ? "bg-green-500" : "bg-gray-600/20"
          } rounded-full  mx-1`}
        ></span>
      </div>
    </div>
  );
};

export default Skill;
