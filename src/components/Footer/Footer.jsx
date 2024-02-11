import React from 'react'
import Inspiration from './Inspiration '
import BottomFooter from './BottomFooter'
import Middle from './Middle'

const Footer = () => {
  return (
    <div className='bg-zinc-100 px-10 pt-10 bottom-0 '>
      <Inspiration/>
      <Middle/>
      <BottomFooter/>
      </div>
  )
}

export default Footer