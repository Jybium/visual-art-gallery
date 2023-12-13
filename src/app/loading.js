import React from "react";
import Image from "next/image";
import Logo from "@/app/logo.svg";

const loading = () => {
  return (
    <main className="w-full h-full fixed flex items-center content-center flex-1 justify-center bg-slate-100 backdrop-blur-sm z-30">
      <div>
        <Image
          src={Logo}
          alt="logo"
          width={100}
          height={100}
          objectFit="contain"
          objectPosition="center"
        />
      </div>
    </main>
  );
};

export default loading;
