"use client";

import React, { useState } from "react";
import Image from "next/image";

const ImageCard = ({ source, text, alt, width, height, classname }) => {
  const [style, setstyle] = useState("");

  const Click = () => {
    setstyle("bg-blend-overlay  blur-sm");
  };

  
  const classes = `shadow rounded-md m-auto + ${classname} + ${style}`;
  const styles = ` text-center `;

  return (
    <div className={styles} onClick={Click}>
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
      <p className="mt-2 text-sm font-bold">{text}</p>
    </div>
  );
};

export default ImageCard;
