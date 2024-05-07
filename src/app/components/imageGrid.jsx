'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import Video from "next-video"

export default function ImageGrid({images, videos}) {

    const [fullScreen, setFullScreen] = useState(false)
    const [fullScreenV, setFullScreenV] = useState(false)
    const [fullScreenVideo, setFullScreenVideo] = useState("")
    const [fullScreenImage , setFullScreenImage] = useState("")

    console.log(fullScreenV)

    const handleSetFullScreenImage = ( image ) => {
        setFullScreen(true)
        setFullScreenImage(image)
    } 

    const handleSetFullScreenVideo = ( video ) => {
        setFullScreenV(true)
        setFullScreenVideo(video)
    } 

    const FullScreenView = () => {
        return(
            <div className='w-screen h-screen bg-black fixed top-0 left-0 p-2 md:p-6 pt-0 flex items-center justify-center flex-col z-50'>
                <div className='absolute text-[80px] self-end hover:cursor-pointer hover:text-white text-hot-pink right-10 top-0 z-20' onClick={() => setFullScreen(false)}><p className='rotate-45'>+</p></div>
                <Image className=''
                src={fullScreenImage}
                width={1200}
                height={1000}
                />
            </div>
        )
    }

    const FullScreenVideoView = () => {
        return(
            <div className='w-screen h-screen bg-black fixed top-0 left-0 p-2 md:p-6 pt-0 flex items-center justify-center flex-col z-50'>
                <div className='text-[80px] self-end hover:cursor-pointer hover:text-white text-hot-pink absolute right-10 top-0 z-20' onClick={() => setFullScreenV(false)}><p className='rotate-45'>+</p></div>
                <Video className='rounded-md'
                src={fullScreenVideo}
                autoPlay={true}
                loop={true}
                />
            </div>
        )
    }

    return (
    <div className='grid grid-cols-1 md:grid-cols-2 mx-[20px] md:mx-[40px] gap-2'>

        {fullScreen ? <FullScreenView/> : ""}
        {fullScreenV ? <FullScreenVideoView/> : ""}

        {videos.map(v => <div key={v} className='bg-black p-6 flex items-center justify-center hover:cursor-pointer'  onClick={ () => handleSetFullScreenVideo(v) }>
            <Video className='rounded-md'
            src={v}
            autoPlay={true}
            loop={true}
            />
        </div>)}

        {images.map(i => <div key={i} className='bg-black p-6 flex items-center justify-center hover:cursor-pointer' onClick={ () => handleSetFullScreenImage(i) }> 
            <Image className=''
            src={i}
            width={800}
            height={600}
            />
        </div>)}

       
    </div>
  )
}
