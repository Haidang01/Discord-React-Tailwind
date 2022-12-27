import React from 'react'

const Card = ({card}) => {
  return (
    <div className=' cursor-pointer '>
      {/* banner  */}
      <div className="  h-40 w-full flex">
        <img src={card.bg} className=' w-full rounded-t-[0.8rem] object-cover' alt="" />
      </div>
      <div className='bg-[#292b2f] px-[1rem] relative min-h-[10rem] pb-2 rounded-b-[0.8rem]'>
        {/* Profile pic  */}
        <div className=' absolute  -top-8 left-4 w-16 h-16 flex rounded-[0.8rem] p-1 bg-[#292b2f]'>
          <img src={card.profile} alt="" className=' object-cover rounded-[1rem]' />
        </div>
        {/* TITLE  */}
        <div className='text-white font-bold text-[17px]'>
          <p className='pt-9'>{card.title}</p>
        </div>
        {/* Desc  */}
        <p className='text-gray-400 font-medium text-[13px]'>{card.desc}</p>
        {/* size  */}
        <p className='text-gray-400 mt-2 font-medium text-[11px]'> {card.size}</p>

      </div>
    </div>
  )
}

export default Card