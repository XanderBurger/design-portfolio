"use client"

import { useSpring, animated } from '@react-spring/web'
import Link from "next/link"
import NameLogo from "../assets/images/svgs/nameLogo.svg"
import Menu from "../assets/images/svgs/menu.svg"
import NavLink from "./NavLink"
import { useState, useEffect } from "react"


export default function Header() {

  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth)

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const springs = useSpring({
    from: { top: -300 }, // Start from off-screen above
    to: { top: 0 }, // End at natural position
    config : {
      friction: 20,
      tension: 300,
      mass: 1
  }
  })

  const WideMenu = () => {return (
    <div className="grid w-full h-[80px] grid-flow-col items-center">
      <div className="space-x-4 mx-[40px]"><Link href="/"><h1 className="ease-in-out duration-700 hover:text-hot-pink text-[72px]">*</h1></Link></div>
        <div className="justify-self-end grid grid-flow-col items-center space-x-4 mx-[40px]">
          <NavLink link="/work" linkName="work"/>
          <NavLink link="/about" linkName="About"/>
          <NavLink link="/contact" linkName="contact"/>
        </div>
    </div>
  )}

  const NarrowMenu = () => {return (
    <div className="grid w-full h-[80px] grid-flow-col items-center">
      <div className="space-x-4 mx-[40px]"><Link href="/"><h1 className="ease-in-out duration-700 hover:text-hot-pink text-[72px]">*</h1></Link></div>
      <Menu className="w-[40px] h-[40px] mx-[40px] justify-self-end"/>
    </div>
  )}


  return (
    <animated.div className='absolute w-full' style={springs} >
      {windowWidth < 600 ? <NarrowMenu/> : <WideMenu/>} 
    </animated.div>
  )
}
