import React from 'react'
import Hero from './Hero'
import Featured from './Featured'

const MainContent = () => {
  return (
    <div className='w-full px-4 pt-4 bg-[#393943]'>
      {/* Hero */}
      <Hero />
      <Featured/>
    </div>
  )
}

export default MainContent
