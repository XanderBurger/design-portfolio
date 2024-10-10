import NavBar from "../components/navBar";
import BouncingIn from "../components/bounceIn";
import Arrow from "../components/arrow";

const largeHeader = (
  <div className='rounded-lg bg-white p-5 flex justify-center'>
    <h1 className='font-IBMPlex text-[9vw] sm:text-[11vw] xl:text-[9vw] tracking-tighter leading-[7vw] uppercase font-[400]'>
      RESUME
    </h1>
  </div>
);

const programming = (
  <div className='bg-white rounded-lg p-5 h-full'>
    <h1 className='text-2xl uppercase'>Programming</h1>
    <div className='grid grid-flow-col font-IBMPlexMono'>
      <div className='pr-4'>
        <h2 className='text-lg mt-2'>Languages</h2>
        <ul className=' font-[200]'>
          <li>Python</li>
          <li>Javascript</li>
          <li>Java</li>
          <li>C</li>
          <li>SQL</li>
        </ul>
      </div>
      <div className='pr-4'>
        <h2 className='text-lg mt-2'>Frameworks & Libraries</h2>
        <ul className=' font-[200] '>
          <li>React</li>
          <li>Nextjs</li>
          <li>D3js</li>
          <li>P5js</li>
          <li>HTMX</li>
          <li>AlpineJS</li>
          <li>Tailwind Css</li>
          <li>Pandas</li>
          <li>Numpy</li>
        </ul>
      </div>
      <div>
        <h2 className='text-lg mt-2'>Other</h2>
        <ul className=' font-[200]'>
          <li>Git/Github</li>
          <li>Node</li>
          <li>Bash</li>
          <li>Lucidchart</li>
        </ul>
      </div>
    </div>
  </div>
);

const design = (
  <div className='bg-white rounded-lg p-5 h-full'>
    <h1 className='text-2xl uppercase'>Design</h1>
    <div className='grid grid-flow-col font-IBMPlexMono'>
      <div className='pr-2'>
        <h2 className='text-lg mt-2'>Software</h2>
        <ul className=' font-[200]'>
          <li>Figma</li>
          <li>Adobe Illustrator</li>
        <li>Adobe Indesign</li>
          <li>Adobe Photoshop</li>
        </ul>
      </div>
      <div>
        <h2 className='text-lg mt-2'>Skills</h2>
        <ul className=' font-[200]'>
          <li>Typography</li>
          <li>Grid Structures</li>
          <li>Responsive Design</li>
          <li>Interactive Design</li>
        </ul>
      </div>
    </div>
  </div>
);

const education = (
  <div className='bg-white rounded-lg p-5 h-full'>
    <h1 className='text-2xl uppercase'>Education</h1>
    <div className='flex flex-col space-y-5 mt-2 font-IBMPlexMono'>
      <div className='grid grid-cols-3 gap-2 w-full'>
        <h2 className='text-lg font-[600]'>BFA Graphic Design</h2>
        <h2 className='text-lg'>Montana Sate University</h2>
        <h2 className='font-[200]'>2019—2024</h2>
      </div>
      <div className='grid grid-cols-3'>
        <h2 className='text-lg font-[600]'>BA Computer Science</h2>
        <h2 className='text-lg'>Montana Sate University</h2>
        <h2 className='font-[200]'>2021—2024</h2>
      </div>
    </div>
  </div>
);

const interest = (
  <div className='bg-white rounded-lg p-5 h-full'>
    <h1 className='text-2xl uppercase'>Main—Interest</h1>
    <div className='flex flex-col space-y-5 mt-2 font-IBMPlexMono '>
      <div className='grid grid-cols-2 gap-2 w-full'>
        <h2 className='text-lg pr-4'>Interactive Design</h2>
        <p className='font-[200]'>
          Using code to create interesting and visually appealing interaction on
          the web.
        </p>
      </div>
      <div className='grid grid-cols-2'>
        <h2 className='text-lg pr-4'>Data Visualization</h2>
        <p className='font-[200]'>
          Condensing substantial data sets into something humans can understand.
        </p>
      </div>
    </div>
  </div>
);

const emailMe = (
  <a
    href='mailto:xanderbdesign@gmail.com'
    className='flex items-center justify-end p-5 w-full hover:cursor-pointer rounded-lg bg-white group'>
    <h1 className='uppercase group-hover:text-hot-pink text-2xl mr-auto'>
      Email—Me
    </h1>
    <Arrow direction='right' />
  </a>
);

export default function About() {
  return (
    <div className='w-full space-y-5 max-w-[1500px]'>
      <NavBar />
      <BouncingIn items={[largeHeader]} containerClass='w-full' />
      <BouncingIn
        items={[education, interest, programming, design]}
        containerClass='w-full grid grid-cols-1  lg:grid-cols-2 gap-5'
      />
      <BouncingIn items={[emailMe]} containerClass='w-full' />
    </div>
  );
}
