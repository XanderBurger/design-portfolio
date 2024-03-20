"use client"

import Video from 'next-video';
import Link from 'next/link';

export default function WorkVid({curr, link, video, name}) {
  return (
    curr === name ? 
    <Link href={link}>
    <div className='overflow-hidden grid h-[86vh]'> 
      <Video className="w-screen absolute top-[-10px] min-h-[90vh]" src={video} loop autoplay controls={false}/>
    </div>
    </Link>: ""
    
  )
}
