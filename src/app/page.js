import Sketch from './components/flowers';
import WorkList from './components/workList';
import { info } from './work/getWorkInfo';
import { Analytics } from '@vercel/analytics/react'

export default function Home() {

  
  return (
    <main>
      <div className='absolute h-screen w-full top-0 left-0 z-[-1] overflow-hidden' >
        <Sketch backgroundColor={"#FFF"} frameRate={15}/>
      </div>
      <div className='h-screen w-full flex items-center justify-center cursor-none'>
        <div className='w-fit'>
        <h1 className='text-[52px] lg:text-[72px] sm:text-[52px] font-[500] italic leading-[70px] text-center'>
          Xander Burger
        </h1>
        <p className='top-[60px] text-[20px] text-hot-pink'>*Click to Grow*</p>
        </div>
      </div>
      <WorkList work={info}/>
      <Analytics/>
    </main>
  );
}
