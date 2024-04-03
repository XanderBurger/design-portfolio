'use client'

import React from 'react'
import { useSpring, useSpringRef, animated, useSpringValue } from '@react-spring/web'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

export default function Carousel({images}) {
    const imageCount = images.length
    let currentIndex = 0
    
    const api = useSpringRef()

    const spring = useSpring({
        ref: api,
        from: {transform: `translateX(${(currentIndex * 100)}%)`}
    })
    
    const clamp = (n, min, max) => Math.min(Math.max(n, min), max)
   
    const handleLeft = () => {
       currentIndex = clamp(currentIndex + 1, -imageCount + 1 ,0 )
       console.log(currentIndex)
       api.start({
        to: {
            transform: `translateX(${(currentIndex * 100)}%)`
        }
       })
    }

    const handleRight = () => {
        currentIndex = clamp(currentIndex - 1, -imageCount + 1 ,0 )
        console.log(currentIndex)
        api.start({
            to: {
                transform: `translateX(${(currentIndex * 100)}%)`
            }
        })
     }

    const CarouselImage = ({image, spring}) => {

        return (
            <animated.div className='w-[100vw] px-[40px] h-min grid justify-center items-center' style={spring} >
                <Image className='max-w-[1250px] h-min w-full'
                    width={1400}
                    height={1000}
                    src={image}
                    alt='Image of Work'
                />
            </animated.div>
        )
    }

    const Indicator = ({index, currentIndex}) => {
        let size = 10 

        const api = useSpringRef()
        const sizeStyle = useSpring({
            ref: api,
            from: {
                height: size,
                width: size,
            }
        })

        api.apply({
            to : {
                height: index === -currentIndex ? size = 13: size = 10,
                width: index === -currentIndex ? size = 13: size = 10
            }
        })
        
        const currStyle = 'rounded-[20px] mx-[10px] bg-hot-pink'
        const style = 'rounded-[20px] mx-[10px] bg-gray-300'

        return (
            <div className='w-[20px] h-[20px] grid items-center content-center'>
            <animated.div className={index === -currentIndex ? currStyle : style} style={sizeStyle}>
            </animated.div>
            </div>
        )

    } 

  return (
    <div className='w-full overflow-x-hidden'>
        <div className='w-max h-fit flex items-center'>
        {images.map( (e, i) => {
            return(
                <CarouselImage image={e} spring={spring} key={i}/>
            )
        })}
        </div>
        <div className='grid grid-flow-col w-full px-[40px] items-center'>
            <button className='text-[40px] hover:text-hot-pink text-start' onClick={handleLeft}>{'<'}</button>
            <div className='flex justify-center self-center'>
                {
                    images.map((e, i) => {
                        return <Indicator index={i} currentIndex={currentIndex} key={i}/> 
                    })
                }
            </div>
            <button className='text-[40px] self-end hover:text-hot-pink text-end' onClick={handleRight}>{'>'}</button>
        </div>
    </div>
   
    
  )
}
