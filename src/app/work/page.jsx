import Link from 'next/link';

export default function Work() {

  const WorkLink = ({slug, name}) => {
    return (
      <Link href={slug}>
        <div className='border-b-solid border-b-[1px] ease-in-out duration-200 border-b-black w-full hover:bg-hot-pink hover:text-white'>
          <h1 className='ml-[40px] text-[32px] py-4'>
            {name}
          </h1>
        </div>
        </Link>
    )
  }

  return (
    <div className='absolute bottom-0 w-full'>
       <h1 className='uppercase ml-[40px] py-4 text-hot-pink text-[42px]'>WORK</h1>
        <div className='border-t-solid border-t-[1px] border-t-black grid grid-flow-row'>
        <WorkLink slug="/work/sev" name="Sevileta NWR"/>
        <WorkLink slug="/work/markup" name="Markup"/>
        <WorkLink slug="/work/tri" name="Toxic Release Inventory"/>
        <WorkLink slug="/work/acrm" name="American Computer & Robotics Museums"/>
      </div>
    </div>
  )
}
