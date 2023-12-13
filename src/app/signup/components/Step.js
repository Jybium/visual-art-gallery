import React from "react";

const Step = ({ number, completed, title, hide }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="grid relative">
        <div className="w-full">
          <span className=" px-3.5 py-2 rounded-full text-sm border-black border-[1.5px]">
            {completed ? "👍" : number}{" "}
          </span>{" "}
        </div>
        {hide ? (
          ""
        ) : (
          // <hr className="flex flex-col grid-flow-col h-[2px] w-full rotate-90 bg-black absolute top-[50px]" />

          <p className="grid h-[2px] w-full rotate-90 bg-black absolute top-[50px] left-"></p>
        )}
      </div>
      <p className="text-xs tracking-wider font-bold">{title}</p>
    </div>
  );
};

export default Step;
