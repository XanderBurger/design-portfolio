import Video from "next-video"

export default function Contact() {
  return (
    <div className="grid h-screen w-full items-center justify-center">
        <div>
        <h1 className="text-[52px] lg:text-[72px] sm:text-[52px] font-[500] italic text-center md:leading-[72px] leading-[52px]">Send me an <a href="mailto: xanderbdesign@gmail.com" className="underline hover:text-hot-pink">email</a></h1>
        <div className="flex space-x-[10px] justify-center md:justify-start pt-4">
        <a className="text-hot-pink underline" href="https://github.com/XanderBurger">GitHub</a>
        <a className="text-hot-pink underline" href="https://www.linkedin.com/in/xander-burger-25673b28a">LinkedIn</a>
        </div>
        </div>
        
    </div>
)
}
