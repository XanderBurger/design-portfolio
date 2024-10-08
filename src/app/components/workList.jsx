import React from 'react'
import Link from 'next/link';

export default function WorkList({work}) {

    const WorkLink = ({slug, name, tags}) => {
        return (
            <Link href={`work/${slug}`}>
            <div className='group border-b-solid border-b-[1px] ease-in-out duration-200 border-b-black w-full hover:bg-hot-pink hover:text-white px-[20px] md:px-[40px]'>
                <h1 className='text-[24px] md:text-[32px] pt-4 font-[500] mb-2'>
                {name}
                </h1>
                <div className='grid pb-4 grid-cols-2 md:grid-cols-4 gap-2'>
                    {tags.map(t => <p className='border-hot-pink border text-center text-hot-pink rounded-full px-2 group-hover:border-white group-hover:text-white ease-in-out duration-200' key={t}>{t}</p>)}
                </div>
            </div>
            </Link>
        )
        }

  const workInfo = Object.entries(work)

  return (
    <>
    <h1 className='uppercase ml-[20px] md:ml-[40px] py-4 text-hot-pink text-[32px] md:text-[42px]'>WORK</h1>
    <div className='border-t-solid border-t-[1px] border-t-black grid grid-flow-row bg-white'>
        {workInfo.map(([key, value]) => {
            return (<WorkLink key={value.title} slug={key} name={value.title} tags={value.tags}/>)
        })}
    </div>
    </>
  )
}
