"use client";

import Button from "@/app/components/Button";
import ImageCard from "@/app/components/ImageCard";
import { Artists } from "@/constants/data";
import React from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const navigate = useRouter();
  const submit = () => {
    console.log();
    navigate.push("/signup/buyer/genre");
  };

  return (
    <div>
      <h1 className="text-center my-3 mb-10 text-[#7C7C7C] font-bold tracking-widest text-sm">
        You can select multiple artist of your choice.
      </h1>
      <p className="font-bold tracking-widest uppercase  text-sm">Artists</p>
      <div className="grid grid-cols-3 mt-3 gap-4">
        {Artists.map((data) => (
          <ImageCard
            text={data.name}
            width={120}
            // height={50}
            source={data.image}
            key={data.id}
            alt={data.name}
          />
        ))}
      </div>
      <div className="text-center">
        <Button
          classname="bg-blue-400 w-full mx-auto text-[#fff] rounded-full mt-8"
          title="Continue"
          onclick={submit}
        />
      </div>
    </div>
  );
};

export default page;
