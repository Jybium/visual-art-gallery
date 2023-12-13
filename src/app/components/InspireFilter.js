import { filter } from '@/constants/data';
import React from 'react'


const InspireFilter = ({onclick, item, setItem}) => {
  return (
    <div>
      <ul className="flex gap-5 px-3 pt-3 justify-center border-b-[1px] border-black">
        {filter.map((data) => (
          <li
            className={`${
              item === data.id ? "text-blue-500 border-blue-500 border-b-[2px]" : "text-black border-none"
            }  text-sm px-2 py-1 pb-3 cursor-pointer`}
            onClick={() => {
              onclick(data.id);
              //   if (item === data.id) {
              //     setopen("");
              //   }
            }}
            key={data.id}
          >
            {data.link}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InspireFilter