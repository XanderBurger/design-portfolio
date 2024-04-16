import Image from "next/image"


export default function About() {
  return (
    <div className="mx-[20px] md:mx-[40px] grid grid-cols-1 lg:grid-cols-2">
      
      <div className="mt-[100px] lg:mb-[100px] mb-0 text-[20px] md:text-[30px] max-w-[800px]">
        <p>
        With degrees in both <span className="text-hot-pink">Computer Science </span>and <span className="text-hot-pink">Graphic Design</span>, my work investigates how code can be used to generate better visual communication. Using code to automate aesthetic processes and condense substantial data sets into information humans can understand.
        </p>
        <br/>
        <p>
        The web is my medium of choice but my knowledge extends various programming languages including, <span className="text-hot-pink">Javascript, Python, C/C++, and Java</span>. With skills in common web tools, frameworks and libraries like <span className="text-hot-pink">React, Wordpress, p5</span> and <span className="text-hot-pink">d3</span>. 
        </p>
      </div>
      <Image className="max-w-[400px] w-full my-[20px] lg:mt-[100px] justify-self-center rounded-md"
      src='/headshot.webp' height={1080} width={1400}/>
    </div>
  )
}
