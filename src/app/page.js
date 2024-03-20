import { redirect } from 'next/navigation'
import Sketch from './components/flowers';

export default function Home() {
  return (
    <main>
      <div className='absolute h-screen w-full top-0 left-0 z-[-1] overflow-hidden ' >
        <Sketch backgroundColor={"#FFF"} frameRate={15}/>
      </div>
      <div className='h-screen w-full grid items-center justify-center cursor-none'>
        <h1 className='text-[52px] lg:text-[92px] sm:text-[52px] font-[400]'>
          Xander Burger
        </h1>
      </div>
      <div className='border-t-solid border-t-[1px] border-t-black h-[600px] grid grid-cols-12'>
        <h1 className='text-[32px] col-start-2 col-span-2 py-4 uppercase text-hot-pink'>
          About me
        </h1>
      </div>
      
    </main>
  );
}
