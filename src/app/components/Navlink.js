import React from 'react'
import Link from "next/link"
import { NavBar } from '@/constants/data'

const Navlink = () => {
  return (
    <nav className='text-black flex gap-10'>
        {NavBar.map((data) => <Link href={`/data.to`} key={data.id} className='text-xs text-black'>{data.link}</Link>)}
    </nav>
  )
}

export default Navlink