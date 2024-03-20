"use client"

import Link from "next/link"
import NameLogo from "../assets/images/svgs/nameLogo.svg"
import Menu from "../assets/images/svgs/menu.svg"
import NavLink from "./NavLink"
import { useState, useEffect } from "react"


export default function Header() {
  const [hideMenu, setHideMenu] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    windowWidth < 600 ? setHideMenu(true) : setHideMenu(false)
  }, [windowWidth]);


  const WideMenu = () => {return (<div className="grid w-full h-[80px] grid-flow-col items-center absolute top-0">
  <div className="space-x-4 mx-[40px]"><Link href="/"><h1 className="ease-in-out duration-700 hover:text-hot-pink text-[72px]">*</h1></Link></div>
  <div className="justify-self-end grid grid-flow-col items-center space-x-4 mx-[40px]">
  <NavLink link="/work" linkName="work"/>
    <NavLink link="/about" linkName="About"/>
    <NavLink link="/contact" linkName="contact"/>
  </div>
</div>)}

  const NarrowMenu = () => {return (
  
  <div className="grid w-full h-[80px] grid-flow-col items-center absolute top-0 ">
  <div className="space-x-4 mx-[40px]"><Link href="/"><h1 className="ease-in-out duration-700 hover:text-hot-pink text-[72px]">*</h1></Link></div>
  <Menu className="w-[40px] h-[40px] mx-[40px] justify-self-end"/>
  </div>
  )}
  return (
    hideMenu ? <NarrowMenu/> : <WideMenu/>
  )
}
