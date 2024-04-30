import React from 'react'
import Link from 'next/link';

export default function WorkList({work}) {

    const tagColors = {
        "Public Art": '#f25e17',
        "Data Viz": '#1ee387',
        "UI/UX": '#835EB4',
        "Web Design": '#f5e90c',
        "Creative Code": '#21d6ff'
    }
    

    const WorkLink = ({slug, name, tags}) => {
        return (
            <Link href={`work/${slug}`}>
            <div className='group border-b-solid border-b-[1px] ease-in-out duration-200 border-b-black w-full hover:bg-hot-pink hover:text-white px-[20px] md:px-[40px]'>
                <h1 className='text-[24px] md:text-[32px] pt-4'>
                {name}
                </h1>
                <div className='grid grid-flow-col pb-4 grid-rows-2 sm:grid-rows-1'>
                    {tags.map(t => <p className='border-hot-pink border text-center text-hot-pink rounded-full px-2 mr-2 my-2 group-hover:border-white group-hover:text-white ease-in-out duration-200'>{t}</p>)}
                </div>
            </div>
            </Link>
        )
        }

  const workInfo = Object.entries(work)

  return (
    <>
    <h1 className='uppercase ml-[20px] md:ml-[40px] py-4 text-hot-pink text-[32px] md:text-[42px]'>WORK</h1>
    <div className='border-t-solid border-t-[1px] border-t-black grid grid-flow-row'>
        {workInfo.map(([key, value]) => {
            return (<WorkLink key={value.title} slug={key} name={value.title} tags={value.tags}/>)
        })}
    </div>
    </>
  )
}
