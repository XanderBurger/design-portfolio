import React from 'react'
import {getWorkInfo} from "../getWorkInfo"
import { notFound } from 'next/navigation'
import Carousel from '@/app/components/carousel'
import dynamic from 'next/dynamic'


export default function Work({params}) {
  

  const info = getWorkInfo(params.slug)
  if(!info) notFound()

  return (
    <div className='mt-[100px]'>
    <h1 className='uppercase pb-4 text-hot-pink text-[42px] mx-[40px]'>{info.title}</h1>
    <div>
    <Carousel images={info.images}/>
    </div>
      <div className='my-[40px]'>
        <p className='text-[24px] max-w-[800px] mx-[40px]'>
          {info.description}
        </p>
      </div>
    </div>
  )
}
