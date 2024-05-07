import React from 'react'
import {getWorkInfo} from "../getWorkInfo"
import { notFound } from 'next/navigation'
import Carousel from '@/app/components/carousel'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import ImageGrid from '@/app/components/imageGrid'


export default function Work({params}) {

  const info = getWorkInfo(params.slug)
  if(!info) notFound()

  return (
    <div className='mt-20'>
    <h1 className='uppercase text-black text-[60px] leading-[65px] lg:leading-[110px] lg:text-[100px] mx-[20px] md:mx-[40px] font-[500]'>{info.title}</h1>
    <div className='grid pb-4 grid-cols-2 md:grid-cols-4 mx-[20px] md:mx-[40px] gap-2 mb-10'>
      {info.tags.map(t => <p className='border-hot-pink border text-center text-hot-pink rounded-full px-2 group-hover:border-white group-hover:text-white ease-in-out duration-200' key={t}>{t}</p>)}
    </div>
    
    <div>
    <div className='text-[24px] mx-[20px] md:mx-[40px] mb-10 grid md:grid-cols-2 grid-cols-1 gap-2'>
      <p className='text-[40px] leading-[43px] lg:leading-[65px] lg:text-[60px] self-center text-center mb-4 md:mb-0 text-hot-pink mx-0 md:mx-4'>{info.sentence}</p>
      <div>{info.description}</div>
    </div>

    {/* <Carousel images={info.images} videos={info.videos}/> */}
    <ImageGrid images={info.images} videos={info.videos}/>
    </div>
      <div className='my-[40px]'>
        
        
        <div className='grid grid-flow-col mx-[20px] md:mx-[40px] my-[40px]'> 
        <Link className="uppercase hover:text-hot-pink font-medium text-[24px]" href={`/work/${info.prevPage}`}>Previous</Link>
        <Link className="justify-self-end uppercase hover:text-hot-pink font-medium text-[24px]" href={`/work/${info.nextPage}`}>Next</Link>
        </div>
      </div>
      
    </div>
  )
}
