"use client";

import Button from "@/app/components/Button";
import ImageCard from "@/app/components/ImageCard";
import { Artists, Genre } from "@/constants/data";
import React from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const navigate = useRouter();
  const submit = (data) => {
    // console.log(data);
    navigate.push("/");
  };
  return (
    <>
      <div className="grid w-full">
        <h1 className="text-center my-3 mb-10 text-[#7C7C7C] font-bold tracking-widest text-sm">
          You can select multiple genre of your choice.
        </h1>
        <p className="font-bold tracking-widest ml-10 text-sm uppercase">
          Genres
        </p>
        <div className="grid grid-cols-3 mt-3 gap-4">
          {Genre.map((data) => (
            <ImageCard
              text={data.name}
              width={125}
              // onclick={Click}
              // height={50}
              source={data.image}
              key={data.id}
              alt={data.name}
            />
          ))}
        </div>

        {/* <p className="text-blue-400 font-bold">Skip</p> */}
        <div className="text-center">
          <Button
            classname="bg-blue-400 w-[90%] m-auto text-[#fff] rounded-full mt-8"
            title="Create Account"
            onclick={submit}
          />
        </div>
      </div>
    </>
  );
};

export default page;
