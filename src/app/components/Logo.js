import React from 'react'
import Logos from "../../../public/logo.png"
import Image from "next/image"
import Link from "next/link"
import { Atomic_Age } from "next/font/google";

const Atomic = Atomic_Age({ subsets: ["latin"], weight: "400" });

const Logo = () => {
  return (
    <Link href="/" className='text-black'>
      <div className="flex items-end text-sm">
        <Image
          src={Logos}
          alt="Nexus logo"
          width={40}
          objectFit="contain"
          objectPosition="center"
        />
        <span className={Atomic.className}>ecoArt Exchange</span>
      </div>
    </Link>
  );
}

export default Logo