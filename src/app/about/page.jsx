import Image from "next/image"


export default function About() {
  return (
    <div className="mx-[20px] md:mx-[40px] grid grid-cols-1 lg:grid-cols-2">
      
      <div className="mt-[100px] text-[24px] md:text-[32px] max-w-[800px]">
        <p>
        With degrees in both computer science and graphic design, my work investigates how code can be used to generate better visual communication. Using code to automate aesthetic processes and condensing substantial data sets into information humans can understand.
        </p>
        <br/>
        <p>
        The web is my medium of choice but my knowledge extends various programming languages including, Javascript, Python, C/C++, and Java. With skills in common web tools and web frameworks and libraries like React, Wordpress, p5 and d3. 
        </p>
      </div>
      <Image className="max-w-[400px] w-full my-[20px] lg:mt-[100px] justify-self-center rounded-md"
      src='/headshot.webp' height={1080} width={1400}/>
    </div>
  )
}
