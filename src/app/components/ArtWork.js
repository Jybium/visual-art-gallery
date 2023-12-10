"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GrFavorite } from "react-icons/gr";

const ArtWork = ({ classname, artwork }) => {
    const {source, name, alt, width, height,description, dimension, price } = artwork
  const [style, setstyle] = useState("");

  console.log(style);
  const classes = `shadow rounded-md m-auto + ${classname} + ${style}`;
  

  return (
    <div className="hover:scale-105 delay-100">
      <div className="backdrop-blur-sm rounded-md">
        <Image
          src={source}
          alt={alt}
          width={width}
          height={height}
          objectFit="contain"
          objectPosition="center"
          className={classes}
        />
      </div>
      <div className="flex justify-between items-center mt-3">
        <p className="mt-2 text-lg font-bold">{name}</p>
        <GrFavorite size={21}/>
      </div>
      <div className="gap-2 grid text-sm mt-2">
        <p>{description}</p>
        <p className="text-xs line-clamp-2">{dimension}</p>
        <p className="font-bold">{price}</p>
      </div>
    </div>
  );
};

export default ArtWork;
