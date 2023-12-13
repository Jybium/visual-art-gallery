import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import { color } from "@/constants";
import { GrCaretLeftFill } from "react-icons/gr";

import { Atomic_Age } from "next/font/google";

const Atomic = Atomic_Age({ subsets: ["latin"], weight: "400" });

const AuthWrapper = ({ children }) => {
  return (
    <main className="min-h-screen flex  w-full">
      <section className="w-[95%] flex flex-col mx-auto justify-between p-3 py-4">
        <section className="flex justify-between items-center">
          <div className="flex items-end text-sm">
            <Image
              src={Logo}
              alt="Nexus logo"
              width={40}
              objectFit="contain"
              objectPosition="center"
            />
            <span className={Atomic.className}>ecoArt Exchange</span>
          </div>
          <div className="flex items-center justify-between">
            <GrCaretLeftFill />
            <p className="text-sm">
              Already have an account? <Link href="/connect">Connect</Link>
            </p>
          </div>
        </section>
        <section className="w-1/2 h-4/6 m-auto justify-center flex flex-col content-center items-center">
          {children}
        </section>
        {/* <section className="flex justify-between text-sm">
          <p>
            <span>Let's get you started</span>
          </p>
          <p className="text-center w-auto">
            <Link href="/privacy-policy">privacy policy</Link> and{" "}
            <Link href="/terms">terms and conditions</Link>
          </p>
        </section> */}
      </section>
    </main>
  );
};

export default AuthWrapper;
