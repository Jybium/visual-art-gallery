"use client"

import React from "react";
import { FAQ } from "@/constants/data";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const Accordion = ({ onclick, open, setopen }) => {
  return (
    <section className="mt-6 mx-auto grid gap-3">
      {FAQ.map((items) => (
        <div key={items.id}>
          <p
            className="bg-[#f6f6f6] sm:py-3 py-2 text-[13px] font-bold justify-between flex items-center border-b-[1px] border-black cursor-pointer"
            onClick={() => {
              onclick(items.id);
              if (open === items.id) {
                setopen("");
              }
            }}
          >
                {items.question}
            <span className="material-symbols-outlined transition-all delay-150 duration-100 ">
              {open === items.id ? (
                <MdKeyboardArrowUp size="24px" />
              ) : (
                <MdKeyboardArrowDown size="24px" />
              )}
            </span>{" "}
          </p>
          <div
            className={`${
              open === items.id ? "grid" : "hidden"
            } px-4 py-3 shadow rounded text-sm`}
          >
            {items.answer}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Accordion;
