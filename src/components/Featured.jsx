import React from 'react'
import picture2 from '../photos/lmfao.jpg';
import picture1 from '../photos/background.webp';
import bg1 from '../photos/bg01.jpg';
import bg2 from '../photos/bg02.jpg';
import bg3 from '../photos/bg03.jpg';
import bg4 from '../photos/bg04.jpg';
import Card from './Card';
import { Link,Outlet } from 'react-router-dom';
const Featured = () => {
  const cards = [
    {
      bg: picture1,
      profile: picture2,
      title: 'Fire Emblem Heroes',
      desc: 'We are a community for Fire Emblem Heroes .Enjoy lore,get game help. and Fe fandom',
      size:'85,532 Online • 232,032 Members'
    },
    {
      bg: bg1,
      profile: picture2,
      title: 'Fire Emblem Heroes',
      desc: 'We are a community for Fire Emblem Heroes .Enjoy lore,get game help. and Fe fandom',
      size:'85,532 Online • 232,032 Members'
    },
    {
      bg: bg2,
      profile: picture2,
      title: 'Fire Emblem Heroes',
      desc: 'We are a community for Fire Emblem Heroes .Enjoy lore,get game help. and Fe fandom',
      size:'85,532 Online • 232,032 Members'
    },
    {
      bg: bg3,
      profile: picture2,
      title: 'Fire Emblem Heroes',
      desc: 'We are a community for Fire Emblem Heroes .Enjoy lore,get game help. and Fe fandom',
      size:'85,532 Online • 232,032 Members'
    },
    {
      bg: bg4,
      profile: picture2,
      title: 'Fire Emblem Heroes',
      desc: 'We are a community for Fire Emblem Heroes .Enjoy lore,get game help. and Fe fandom',
      size:'85,532 Online • 232,032 Members'
    },
    {
      bg: picture1,
      profile: picture2,
      title: 'Fire Emblem Heroes',
      desc: 'We are a community for Fire Emblem Heroes .Enjoy lore,get game help. and Fe fandom',
      size:'85,532 Online • 232,032 Members'
    },
    {
      bg: bg1,
      profile: picture2,
      title: 'Fire Emblem Heroes',
      desc: 'We are a community for Fire Emblem Heroes .Enjoy lore,get game help. and Fe fandom',
      size:'85,532 Online • 232,032 Members'
    },
    {
      bg: bg2,
      profile: picture2,
      title: 'Fire Emblem Heroes',
      desc: 'We are a community for Fire Emblem Heroes .Enjoy lore,get game help. and Fe fandom',
      size:'85,532 Online • 232,032 Members'
    },
    {
      bg: bg3,
      profile: picture2,
      title: 'Fire Emblem Heroes',
      desc: 'We are a community for Fire Emblem Heroes .Enjoy lore,get game help. and Fe fandom',
      size:'85,532 Online • 232,032 Members'
    },
    {
      bg: bg4,
      profile: picture2,
      title: 'Fire Emblem Heroes',
      desc: 'We are a community for Fire Emblem Heroes .Enjoy lore,get game help. and Fe fandom',
      size:'85,532 Online • 232,032 Members'
    },
  ]
  return (
    <div className='pt-4'>
      {/* title */}
      <div className="text-white mb-4">
        <p className='font-bold text-[20px]'>Featured Servers</p>
        <p className='text-white/50'>Some awesome Discords we think you'd love</p>
      </div>
      {/* Card */}
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
        {cards.map((card, index) => (
        <Link to={'/card'} key={`key-${index}`}>
          <Card  card={card} />
        </Link>
        ))}
      </div>
    </div>
  )
}

export default Featured