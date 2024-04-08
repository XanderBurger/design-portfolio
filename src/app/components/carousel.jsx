'use client'
import React from 'react'
import { useSpring, useSpringRef, animated, useSpringValue } from '@react-spring/web'
import { useEffect, useState, useRef, forwardRef, useCallback, useTransition} from 'react'
import Image from 'next/image'
import Video from "next-video"


export default function Carousel({images, videos}) {
    const imageCount = images.length + videos.length
    let currentIndex = 0
    
    const api = useSpringRef()
    const [stateTest, setStateTest] = useState()
    
    const spring = useSpring({
        ref: api,
        from: {transform: `translateX(${(currentIndex * 100)}%)`}
    })


    const clamp = (n, min, max) => Math.min(Math.max(n, min), max)
   
    const handleLeft = () => {
       currentIndex = clamp(currentIndex + 1, -imageCount,0 )
       api.start({
        to: {
            transform: `translateX(${(currentIndex * 100)}%)`
        }
       })
    }

    const handleRight = () => {
        currentIndex = clamp(currentIndex - 1, -imageCount + 1,0 )
        api.start({
            to: {
                transform: `translateX(${(currentIndex * 100)}%)`
            }
        })
     }

    

    const CarouselImage = ({image, spring}) => {

        return (
            <animated.div className='w-[100vw] px-[20px] md:px-[40px] grid justify-center items-center relative ' style={spring} >
                <Image className='max-w-[1250px] w-full max-h-[650px] bg-black border-black border-[1px] rounded-md object-contain'
                    src={image}
                    width={3000}
                    height={1200}
                    priority={true}
                    alt='Image of Work'
                />
            </animated.div>
        )
    }
    
    const CarouselVideo = ({video, spring}) => {
        return (
            <animated.div className='w-[100vw] px-[20px] md:px-[40px] h-min grid justify-center items-center' style={spring} >
                <div className='rounded-md border-black border-[1px] overflow-hidden w-full'>
                <Video className='max-w-[1250px] overflow-hidden' style={{width: "93vw"}}
                    src={video}
                    autoPlay={true}
                    loop={true}
                />
                </div>
            </animated.div>
        )
    }  

  return (
    <div className='w-full overflow-x-hidden'>
        <div className='w-max h-fit flex items-center'>
        
        
        {videos.map( (e, i) => {
            return(
                <CarouselVideo video={e} spring={spring} key={i}/>
            )
         })}
        
        
        {images.map( (e, i) => {
            return(
                <CarouselImage image={e} spring={spring} key={i}/>
            )
        })}
        </div>
        <div className='grid grid-flow-col w-full px-[20px] md:px-[40px] items-center'>
            <button className='text-[40px] hover:text-hot-pink text-start' onClick={handleLeft}>{'<'}</button>
            <button className='text-[40px] self-end hover:text-hot-pink text-end' onClick={handleRight}>{'>'}</button>
        </div>
    </div>
   
  )
}


