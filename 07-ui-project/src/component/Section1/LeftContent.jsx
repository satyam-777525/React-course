import React from 'react'
import Arrow from './Arrow'
import Hero from './Hero'

const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3 '>
        <Hero/>
        <Arrow/>
      
    </div>
  )
}

export default LeftContent
