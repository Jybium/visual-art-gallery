import React from 'react'
import Image from "next/image"

const Image = () => {
  return (
   
    <div>
       <Image src={source} className={className} alt={alt} objectFit="contain" objectPosition="center/>
        
    </div>    
  )
}

export default Image