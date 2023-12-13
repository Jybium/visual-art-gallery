import React from "react";
import AuthWrapper from "./AuthWrapper";
import Link from "next/link";
import ImageCard from "./ImageCard";
import Buyer from "../../../public/buyer.png";
import Artist from "../../../public/artist.png";

const AuthStarter = () => {
  return (
    <>
      <div className="text-center grid ">
        <h1 className="font-[900] text-2xl tracking-widest ">
          Welcome to Nexus
        </h1>
        <p className="mt-3 tracking-wider text-sm font-semibold text-[#7C7C7C]">
          How do you want to register your account?
        </p>
      </div>
      <section className="grid sm:flex justify-center gap-40 my-7 mt-20">
        <Link href="/signup/buyer">
          <ImageCard
            source={Buyer}
            width={180}
            height={180}
            text="Buyer"
            classname="p-4"
            alt="man sitting with laptop and working"
          />
        </Link>
        <Link href="/signup/artist?stage=1">
          <ImageCard
            source={Artist}
            width={180}
            height={180}
            classname="p-4"
            text="Artist"
            alt="man turned around while working at the computer"
          />
        </Link>
      </section>
    </>
  );
};

export default AuthStarter;
