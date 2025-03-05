import React from "react";

export const TechStackPill = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center w-fit rounded-lg px-2 py-1 bg-[#F7F7F7] flex-1">
      <p className="text-normal-13 text-[#737373]">{text}</p>
    </div>
  );
};
