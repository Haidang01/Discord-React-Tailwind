import React from 'react'
import hero from '../photos/hero2.webp'
import {FiSearch} from 'react-icons/fi'
const Hero = () => {
  return (
    <div className="relative z-20 h-[15rem] rounded-[0.4rem] ">
      {/* background img */}
     <div className=' absolute h-[15rem] w-full flex'>
        <img src={hero} alt="" className=' w-full object-cover rounded-[0.5rem]' />
      </div>
      {/* Overlay */}
        <div className='absolute w-full h-full  z-10 bg-black/20'></div>

      {/* Search */}
      <div className='relative z-20 text-bold text-white flex flex-col items-center justify-center h-full text-white pb-1 space-y-2'>
        <p className='text-[20px] font-black'>Find your community onn Discord</p>
        <p className='pb-1 text-[14px] text-white/70'>Form gaming, to music,to study,there's a place for you</p>
        <div className=' mb-2 relative flex  items-center justify-center'>
          <input placeholder='Explore servers' className='rounded-[0.4rem] h-full px-3 py-2  text-black pl-2 placeholder:text-gray-600 outline-0 w-full w-[20rem]  py-1.5' />
          <FiSearch className='absolute  text-black right-2 cursor-pointer '/>
        </div>
      </div>
    </div>
  )
}

export default Hero
