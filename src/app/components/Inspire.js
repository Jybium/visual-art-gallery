import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { GrAdd, GrFavorite } from 'react-icons/gr'

const Inspire = ({name, image, profile}) => {
  return (
    <div className="grid gap-3 w-auto">
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <Image
            src={profile}
            alt="profile image"
            objectFit="cover"
            objectPosition="center"
            className='w-16 h-16 rounded-full'
          />
          <div className='text-sm font-bold'>
            <p>{name}</p>
            <button type='submit' className='px-3 py-[3px] text-xs rounded-full border border-black flex items-center justify-between gap-2 mt-1'>
                <GrAdd className='font-bold'/>
                <span>Inspire me</span>
            </button>
          </div>
        </div>
        <GrFavorite size={21}/>
      </div>
      <Image
        src={image}
        alt="Artwork image"
        objectFit="cover"
        objectPosition="center"
        className='w-full h-auto'
      />
    </div>
  );
}

export default Inspire