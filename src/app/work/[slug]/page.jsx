import React from 'react'
import {getWorkImages} from "../getImages"

import Image from 'next/image'

export default function Work({params}) {
   
      const images = getWorkImages(params.slug)

  return (
    <div className='mt-[100px] mx-[40px]'>
    <h1 className='uppercase pb-4 text-hot-pink text-[42px]'>sevileta nwr</h1>
    <div className='grid grid-flow-col overflow-y-scroll '>
    {images.map( (i, e) => {
        return(
        <div key={e}>
           <Image
           className='min-w-[500px]'
           width={500}
           height={400}
           src={i}
           />
           </div>
        )
    })
    }
    
    </div>
    <div className='my-[40px]'>
    <p className='text-[24px] max-w-[800px]'>
    A project done in collaboration with the Sevilleta National Wildlife Refuge about the collection and transfer of digital ecological data.
    </p>
    </div>
    </div>
  )
}
