import Video from "next-video"
import Sketch from "../components/flowers"

export default function Contact() {
  return (
    <>
     <div className='absolute h-screen w-full top-0 left-0 z-[-1] overflow-hidden ' >
        <Sketch backgroundColor={"#FFF"} frameRate={15}/>
      </div>
    
    <div className="grid h-screen w-full items-center justify-center cursor-none">
        <div>
        <h1 className="text-[52px] lg:text-[72px] sm:text-[52px] font-[500] italic text-center md:leading-[72px] leading-[52px]">Send me an <a href="mailto: xanderbdesign@gmail.com" className="underline hover:text-hot-pink">email</a></h1>
        <div className="flex space-x-[10px] justify-center md:justify-start pt-2">
        <a className="text-hot-pink underline hover:text-black" href="https://github.com/XanderBurger">GitHub</a>
        <a className="text-hot-pink underline hover:text-black" href="https://www.linkedin.com/in/xander-burger-25673b28a">LinkedIn</a>
        </div>
        </div>
        
    </div>
    </>
)
}
