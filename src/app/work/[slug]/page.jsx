import React from 'react'
import {getWorkInfo} from "../getWorkInfo"
import { notFound } from 'next/navigation'
import Carousel from '@/app/components/carousel'
import dynamic from 'next/dynamic'
import Link from 'next/link'


export default function Work({params}) {

  const tagColors = {
    "Public Art": "#f25e17",
    "Data Viz": "#1ee387",
    "UI/UX": "#835EB4",
    "Web Design": "#f5e90c",
    "Creative Code": "#21d6ff"
  }

  const info = getWorkInfo(params.slug)
  if(!info) notFound()

  return (
    <div className='mt-[100px]'>
    <h1 className='uppercase pb-4 text-hot-pink text-[32px] leading-[35px] md:leading-[45px] md:text-[42px] mx-[20px] md:mx-[40px]'>{info.title}</h1>
    <div>
    <Carousel images={info.images} videos={info.videos}/>
    </div>
      <div className='my-[40px]'>
        
        <div className='text-[24px] max-w-[800px] mx-[20px] md:mx-[40px]'>
          {info.description}
        </div>

        <div className='grid grid-flow-col mx-[20px] md:mx-[40px] my-[40px]'> 
        <Link className="uppercase hover:text-hot-pink font-medium text-[24px]" href={`/work/${info.prevPage}`}>Previous</Link>
        <Link className="justify-self-end uppercase hover:text-hot-pink font-medium text-[24px]" href={`/work/${info.nextPage}`}>Next</Link>
        </div>
      </div>
      
    </div>
  )
}
