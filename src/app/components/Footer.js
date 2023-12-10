import React from 'react'
import Logo from './Logo';
import { footer } from '@/constants/data';

const Footer = () => {
  return (
    <section className="bg-blue-500 h-96 text-white w-full grid p-10">
      {/* FIRST ROW GROUP */}
      <div className='flex justify-between w-full gap-5'>
        {/* COMPANY LOGO SECTION */}
        <div className='w-1/6'>
            <Logo/>
            <div className='mt-5'>
                <p>Follow Us</p>
                <div>

                </div>
            </div>
        </div>

        {/* FOOTER LINKS */}
        <div className='flex justify-between w-[80%]'>
            {
                footer.map((data) => <div key={data.id} className='text-sm '>
                    <p>{data.heading}</p>
                    <ul className='text-xs grid gap-1 mt-2'>
                        {data.child.map((link, i)=> <li className='' key={i}>{link}</li>)}
                    </ul>
                </div>)
            }
        </div>
      </div>

      {/* SECOND ROW GROUP */}
      <div className='text-xs text-white text-center tracking-wide'>
        <p >
          © 2023 DecoArt Exchange | Privacy Policy General Terms and Services
        </p>
        <span></span>
      </div>
    </section>
  );
}

export default Footer