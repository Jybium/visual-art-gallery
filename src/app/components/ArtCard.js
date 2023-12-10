

import React from "react";
import Image from "next/image";
import Link from "next/link"

const ArtCard = ({width, height, classname ,  data}) => {
  
  const {source, works, name} = data





 
  const classes = `shadow rounded-md m-auto + ${classname}`;
 

  return (
    <div className="hover:scale-105  delay-100">
      <div className="backdrop-blur-sm rounded-md">
        <Image
          src={source}
          alt={`A sample image of ${name}`}
          width={width}
          height={height}
          objectFit="contain"
          objectPosition="center"
          className={classes}
        />
      </div>
      <p className="mt-3 text-sm font-bold">{name}</p>
      <p className="mt-1 text-[10px]">{works}</p>
    </div>
  );
};

export default ArtCard;
