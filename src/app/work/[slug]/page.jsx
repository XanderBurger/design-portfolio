import React from 'react'
import {getWorkImages} from "../getImages"

import Image from 'next/image'

export default function Work({params}) {
   
   const images = getWorkImages(params.slug)
   console.log(images)
  
  return (
    <div className='mt-[100px] mx-[40px]'>
    <h1 className='uppercase pb-4 text-hot-pink text-[42px]'>sevileta nwr</h1>
    <div className='grid grid-flow-col overflow-y-scroll '>
    {images.map( i => {
        return(
        <div>
           <Image
           className='min-w-[500px]'
           width={500}
           height={400}
           key={i.src} 
           src={i.src}
           />
           </div>
        )
    })
    }
    
    </div>
    <div className='my-[40px]'>
    <p className='text-[24px]'>
    A project done in collaboration with the Sevilleta National Wildlife Refuge about the collection and transfer of digital ecological data.
    </p>
    </div>
    </div>
  )
}
