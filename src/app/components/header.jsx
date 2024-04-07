"use client"

import { useSpring, animated } from '@react-spring/web'
import Link from "next/link"
import NameLogo from "../assets/images/svgs/nameLogo.svg"
import Menu from "../assets/images/svgs/menu.svg"
import NavLink from "./NavLink"
import { useState, useEffect } from "react"


export default function Header() {

  const [windowWidth, setWindowWidth] = useState(null);
  const [showMenu, setShowMenu] = useState(false)

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

  const menuSpring = useSpring({
    from: { top: -900 }, // Start from off-screen above
    to: { top: showMenu? 80 : -900}, // End at natural position
    config : {
      friction: 25,
      tension: 200,
      mass: 1
  }
  })

  const WideMenu = () => {return (
    <div className="grid w-full h-[80px] grid-flow-col items-center bg-white">
      <div className="space-x-4 mx-[40px]"><Link href="/"><h1 className="ease-in-out duration-700 hover:text-hot-pink text-[72px]">*</h1></Link></div>
        <div className="justify-self-end grid grid-flow-col items-center space-x-4 mx-[40px]">
          <NavLink link="/work" linkName="work"/>
          <NavLink link="/about" linkName="About"/>
          <NavLink link="/contact" linkName="contact"/>
        </div>
    </div>
  )}

  const NarrowMenu = () => {

    const WorkLink = ({slug, name}) => {
      return (
        <Link href={slug} onClick={()=> setShowMenu(false)}>
          <div className='border-b-solid border-b-[1px] ease-in-out duration-200 border-b-black w-full hover:bg-hot-pink hover:text-white '>
            <h1 className='ml-[20px] text-[24px] py-4 uppercase'>
              {name}
            </h1>
          </div>
          </Link>
      )
    }
  
    return (
    <>
    <div className="relative grid w-full h-[80px] grid-flow-col items-center bg-white z-20 ">
      <div className="space-x-4 mx-[20px]"><Link href="/" onClick={()=> setShowMenu(false)}><h1 className="ease-in-out duration-700 hover:text-hot-pink text-[72px]">*</h1></Link></div>
      <h1 className='justify-self-end text-[60px] mx-[20px] mb-[20px] hover:text-hot-pink hover:cursor-pointer' onClick={() => setShowMenu(!showMenu)}>{showMenu ? "–" : "="}</h1>
    </div>
    <animated.div className='absolute bg-white top-[80px] w-full z-10' style={menuSpring}>
    <div className='w-full'>
          <div className=' grid grid-flow-row border-t-[1px] border-t-black'>
            <WorkLink slug="/work" name="Work"/>
            <WorkLink slug="/about" name="about"/>
            <WorkLink slug="/contact" name="contact"/>
          </div>
      </div>
    </animated.div>
    </>
  )}


  return (
    <animated.div className='absolute w-full grid' style={springs} >
      {windowWidth < 600 ? <NarrowMenu/> : <WideMenu/>} 
    </animated.div>
  )
}
