import React from "react";

interface ChildProps {
  name: string;
}

const SkillsButton = ({ name }: ChildProps) => {
  return (
    <div className="flex justify-center items-center min-w-13 w-fit px-3 h-8 rounded-3xl border-1 text-[10px] mr-2 border-green-700 text-white">
      {name}
    </div>
  );
};

export default SkillsButton;
