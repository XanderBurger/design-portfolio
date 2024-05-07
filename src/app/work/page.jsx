import Link from 'next/link';
import Sketch from '../components/flowers';
import WorkList from '../components/workList';
import { info } from './getWorkInfo';

export default function Work() {

  return (
    <>
    <div className='h-[300px] cursor-none'></div>
      <div className='absolute h-screen w-full top-0 left-0 z-[-1] overflow-hidden cursor-none' >
        <Sketch backgroundColor={"#FFF"} frameRate={15}/>
      </div>
    <div className='w-full'>
       <WorkList work={info}/>
    </div>
    </>
  )
}
