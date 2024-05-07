import Image from "next/image"


export default function About() {
  return (
    <div className="mx-[20px] md:mx-[40px] grid grid-cols-1 lg:grid-cols-2 gap-2">
      
      <div className="mt-[100px] lg:mb-[100px] mb-0 text-[20px] md:text-[30px]">
        <p>
        With degrees in both <span className="text-hot-pink">Computer Science </span>and <span className="text-hot-pink">Graphic Design</span>, my work investigates how code can be used to generate better visual communication. Using code to automate aesthetic processes and condense substantial data sets into information humans can understand.
        </p>
        <br/>
        <p>
        The web is my medium of choice but my knowledge extends various programming languages including, <span className="text-hot-pink">Javascript, Python, C/C++, and Java</span>. With skills in common web tools, frameworks and libraries like <span className="text-hot-pink">React, Wordpress, p5</span> and <span className="text-hot-pink">d3</span>. 
        </p>
      </div>
      <div className="bg-black flex items-center justify-center p-2 md:p-10 lg:mt-[100px] my-10 md:my-20">

      <Image className="w-full"
      src='/headshot.webp' height={1080} width={1400}/>
      </div>

    </div>
  )
}
