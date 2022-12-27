import React from 'react'
import img1 from '../photos/img1.png'
import img2 from '../photos/img2.png'
import img3 from '../photos/img3.png'
import img4 from '../photos/img4.png'
import {AiFillCompass} from 'react-icons/ai'
import { FiPlus } from 'react-icons/fi'
import dc from '../photos/dc.png'
import { useNavigate } from 'react-router-dom'

const Grounds = () => {
  
  const groups = [img1, img2, img3, img4];
  const navigate = useNavigate();
  return (
    <div className=' py-4 hidden sm:flex w-[5rem] h-screen sticky top-0 left-0 bottom-0 shrink-0  bg-[#212226]'>
      {/* groups */}
     <div className='flex items-center gap-4 flex-col w-full '>
        <div className=' bg-[#36393f] p-1 rounded-[3rem] cursor-pointer'>
          <img src={dc} onClick={()=>navigate('/')} alt='' className='w-10 h-10 rounded-full text-white brightness-75'/>
        </div>
        <div className=' bg-[#7289dc] p-[0.64rem] rounded-[3rem]'>
          <AiFillCompass className='w-6 h-6 rounded-full text-white'/>
        </div>
        {groups.map(group => (
        <div className='w-10 h-10  flex cursor-pointer'>
          <img src={group} alt="" className='object-cover rounded-full' />
        </div>
      ))}
        <div className=' bg-[#36393f] p-2 rounded-full'>
          <FiPlus className='w-6 h-6 rounded-full text-green-700 cursor-pointer'/>
        </div>
      </div>
    </div>
  )
}

export default Grounds
