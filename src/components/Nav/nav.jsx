import React, { useState } from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageRoundedDots} from 'react-icons/bi'

const nav = () => {
  return (
   <nav>
    <a href="#" className='active'><AiOutlineHome/></a>
    <a href="#about"><AiOutlineUser/></a>
    <a href="#experience"><BiBook/></a>
    <a href="#services"><RiServiceLine/></a>
    <a href="#contact"><BiMessageRoundedDots/></a>
   </nav>
  )
}

export default nav
