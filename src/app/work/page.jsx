"use client"

import Video from 'next-video';
import acrmVid from "../../../videos/acrm.mp4"
import triVid from "../../../videos/tri-vid.mov"
import markupVid from "../../../videos/markup-vid.mov"
import WorkVid from '../components/workVid';
import { useState } from 'react';
import { redirect } from 'next/navigation'
import Link from 'next/link';


export default function Work() {
  const [currVid, setCurrVid] = useState("markup")

  const VidButton = ({name}) => {
    const selectedStyle = "bg-hot-pink text-white"

    return(
      <Link href="/about">
      <div className={`border-r-[1px] border-solid border-black py-4 pl-[40px] ease-in-out duration-300 ${name === currVid ? selectedStyle: ""}`} onMouseEnter={() => setCurrVid(name)}>
        <p className='uppercase'>
          {name}
        </p>
      </div>
    </Link>
    )
  }

  return (
    <div className='overflow-hidden'>
    <div className='mx-[40px] border-[1px] border-solid border-b-0 border-t-0 border-black'>
    <WorkVid video={markupVid} link="/about" curr={currVid} name={"markup"}/>
    <WorkVid video={triVid} link="/about" curr={currVid} name={"tri"}/>
    <WorkVid video={acrmVid} link="/about" curr={currVid} name={"acrm"}/>
    </div>
    <div className="w-screen border-t-[1px] border-solid border-black h-[60px] fixed bottom-[-4px] bg-white z-10 grid grid-flow-col">
      <VidButton name={"markup"}/>
      <VidButton name={"tri"}/>
      <VidButton name={"acrm"}/>
    </div> 
    </div>
  )
}
