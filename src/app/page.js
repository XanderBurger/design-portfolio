import { redirect } from 'next/navigation'
import Sketch from './components/flowers';
import Link from 'next/link';

export default function Home() {

  const WorkLink = ({slug, name}) => {
    return (
      <Link href={slug}>
        <div className='border-b-solid border-b-[1px] border-b-black w-full hover:bg-hot-pink hover:text-white'>
          <h1 className='ml-[40px] text-[32px] py-4'>
            {name}
          </h1>
        </div>
        </Link>
    )
  }

  return (
    <main>
      <div className='absolute h-screen w-full top-0 left-0 z-[-1] overflow-hidden ' >
        <Sketch backgroundColor={"#FFF"} frameRate={15}/>
      </div>
      <div className='h-screen w-full grid items-center justify-center cursor-none'>
        <h1 className='text-[52px] lg:text-[72px] sm:text-[52px] font-[500] italic'>
          Xander Burger
        </h1>
      </div>
      <h1 className='uppercase ml-[40px] py-4 text-hot-pink text-[42px]'>WORK</h1>
      <div className='border-t-solid border-t-[1px] border-t-black grid grid-flow-row'>
        <WorkLink slug="/work/sev" name="Sevileta NWR"/>
        <WorkLink slug="/work/sev" name="Markup"/>
        <WorkLink slug="/work/sev" name="Toxic Release Inventory"/>
        <WorkLink slug="/work/sev" name="American Computer & Robotics Museums"/>
      </div>
      
    </main>
  );
}
