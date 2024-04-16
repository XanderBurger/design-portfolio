import Link from 'next/link';
import Sketch from '../components/flowers';

export default function Work() {

  const WorkLink = ({slug, name}) => {
    return (
      <Link href={slug}>
        <div className='border-b-solid border-b-[1px] ease-in-out duration-200 border-b-black w-full hover:bg-hot-pink hover:text-white'>
          <h1 className='ml-[20px] md:ml-[40px] text-[24px] md:text-[32px] py-4'>
            {name}
          </h1>
        </div>
        </Link>
    )
  }

  return (
    <>
      <div className='absolute h-screen w-full top-0 left-0 z-[-1] overflow-hidden cursor-none' >
        <Sketch backgroundColor={"#FFF"} frameRate={15}/>
      </div>
    <div className='absolute bottom-0 w-full'>
       <h1 className='uppercase md:ml-[40px] ml-[20px] py-4 text-hot-pink text-[32px] md:text-[42px]'>WORK</h1>
        <div className='border-t-solid border-t-[1px] border-t-black grid grid-flow-row'>
          <WorkLink slug="/work/sev" name="Sevilleta Digitized Landscape"/>
          <WorkLink slug="/work/markup" name="Markup"/>
          <WorkLink slug="/work/tri" name="Interactive Dataset: the Toxic Release Inventory"/>
          <WorkLink slug="/work/acrm" name="History at the American Computer & Robotics Museums"/>
        </div>
    </div>
    </>
  )
}
