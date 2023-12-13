"use client"

import React, { useState } from 'react'
import { Atomic_Age } from 'next/font/google';
import Banner from '../components/Banner';
import { Genre } from '@/constants/data';
import InspireFilter from '../components/InspireFilter';
import Inspire from '../components/Inspire';

const Atomic = Atomic_Age({subsets:['latin'], weight:"400"})

const page = () => {

     const [item, setItem] = useState("1");

     const revealAccordion = (id) => {
       setItem(id);
     };
    
  return (
    <main>
        {/* BANNER */}

      <Banner className="bg-inspire text-center items-center" style={Atomic.style}>
        <h1 className="text-2xl text-white font-semibold">
          Discover the beauty of art.
        </h1>
        <p className='text-white text-sm mt-3 w-3/5 mx-auto'>
          Embark on a journey through your personalized feed, unveiling the
          latest artworks and emerging trends. Tailor your preferences to unlock
          a world of inspiration—your next favorite awaits just below. Dive in
          and discover the artistic wonders that resonate with your unique
          taste!
        </p>
      </Banner>

      {/* FILTER */}
      <InspireFilter item={item} setItem={setItem} onclick={revealAccordion}/>

      {/* INSPIRE ME CARD */}
      <div className='grid grid-cols-3 gap-10 w-11/12 mx-auto my-7'>
        {Genre.map((data) => <Inspire name={data.name} image={data.image} profile={data.image} key={data.id}/>)}
      </div>
    </main>
  );
}

export default page