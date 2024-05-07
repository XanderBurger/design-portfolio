import Sketch from './components/flowers';
import WorkList from './components/workList';
import { info } from './work/getWorkInfo';
import { Analytics } from '@vercel/analytics/react'

export default function Home() {

  
  return (
    <main>
      <div className='absolute h-screen w-full top-0 left-0 z-[-20] overflow-hidden' >
        <Sketch backgroundColor={"FFF"} frameRate={15}/>
      </div>
      <div className='h-screen w-full flex items-center justify-center cursor-none'>
        <div className='w-fit px-[20px] md:px-[40px]'>
        <h1 className='text-[52px] sm:text-[72px] leading-[70px] font-[500] italic text-left'>
          Xander Burger
        </h1>
        <div className='grid grid-cols-2 mt-2'>
        <p className='top-[60px] text-[20px]'>Design <span className='text-hot-pink'>+</span> Code</p>
        <p className='top-[60px] text-[20px] text-hot-pink italic text-right'>*Click to Grow*</p>
        </div>
        </div>
      </div>
      <WorkList work={info}/>
      <Analytics/>
    </main>
  );
}
