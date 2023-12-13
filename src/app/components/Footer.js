import React from 'react'
import Image from "next/image"
import Link from "next/link"
import Logo from './Logo';
import { follow, footer, partner } from '@/constants/data';

const Footer = () => {
  return (
    <section className="bg-blue-500 h-96 text-white w-full grid p-10">
      {/* FIRST ROW GROUP */}
      <div className="flex justify-between w-full gap-5">
        {/* COMPANY LOGO SECTION */}
        <div className="w-1/6">
          <Logo />
          <div className="mt-5 text-center text-sm tracking-widest font-thin grid justify-center">
            <p>Follow Us</p>
            <div className='flex gap-1 mt-4'>
              {follow.map((data) => (
                <Image
                  src={data.image}
                  key={data.id}
                  objectFit="contain"
                  objectPosition="center"
                  className="w-10 h-10 p-2 rounded-full bg-black"
                  alt='Social icons'
                />
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER LINKS */}
        <div className="flex justify-between w-[75%]">
          {footer.map((data) => (
            <div key={data.id} className="text-sm ">
              <p>{data.heading}</p>
              <ul className="text-xs grid gap-1 mt-2">
                {data.child.map((link, i) => (
                  <li className="font-thin" key={i}>
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* SECOND ROW GROUP */}
      <div className="grid text-xs text-white text-center tracking-widest mt-5">
        <p>
          © 2023 DecoArt Exchange | Privacy Policy General Terms and Services
        </p>
        <div className='flex items-center justify-center gap-3'>  
          {partner.map((data) => (
            // <div className= "w-50 h-auto flex">

            <Image
              src={data.image}
              key={data.id}
              objectFit="contain"
              alt='our partner icon'
              objectPosition="center"
              // className="block w-auto"
              />
              // </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Footer