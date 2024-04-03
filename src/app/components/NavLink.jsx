"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLink({link, linkName}) {
    const path = usePathname()
    const currStyle = "hover:text-hot-pink"
    const selectStyle = "text-hot-pink"
    
  return (
    <Link className={`uppercase text-[18px] ease-in-out duration-700 ${path == link ? selectStyle : currStyle }`} href={link}>{linkName}</Link>
  )
}
