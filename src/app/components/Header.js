 import React from 'react'
import Logo from './Logo'
import Navlink from './Navlink'
import Link from "next/link"
import Image from "next/image"
import Profile from "../../../public/second-genre.png"
import { GrCart, GrSearch, GrLike, GrFavorite } from 'react-icons/gr'
 
 const Header = () => {
   return (
     <header className="flex justify-between items-center px-12 py-2 shadow-lg">
       <Logo />
       <Navlink />
       <div className="relative">
         <GrSearch className="absolute bottom-[30%] left-3" size={13}/>
         <input
           type="text"
           name="search"
           placeholder='search ....'
           id="search"
           className="text-sm border-[1px] rounded py-1 px-4 pl-10 border-black placeholder:text-xs placeholder:text-black"
         />
       </div>
       <button
         type="button"
         className="rounded text-xs py-2 px-6 border-[1px] border-[#285FF4]"
       >
         Upload 
       </button>
       <div className="flex justify-between items-center gap-9">
         <div className="relative">
           {/* <GrLike /> */}
           <p className="bg-red-500 h-4 w-4 text-center justify-center grid rounded-full text-[10px] absolute bottom-3 left-2 text-white">
             0
           </p>
           <GrFavorite size={22} />
         </div>
         <div className='relative'>
           <GrCart size={22} />
           <p className="bg-red-500 h-4 w-4 text-center justify-center grid rounded-full text-[10px] absolute bottom-3 left-2 text-white">
             0
           </p>
           <p></p>
         </div>
         <Image
           src={Profile}
           className="w-12 h-12 rounded-full"
           alt="profile-picture"
           objectFit="cover"
           objectPosition="center"
         />
       </div>
     </header>
   );
 }
 
 export default Header