import Image from "next/image";
import BouncingIn from "../components/bounceIn";
import Sketch from "../components/flowers";
import NavBar from "../components/navBar";

const largeHeader = (
  <div className='rounded-lg bg-white p-5 flex justify-center'>
    <h1 className='font-IBMPlex text-[9vw] sm:text-[11vw] xl:text-[9vw] tracking-tighter leading-[7vw] uppercase font-[400]'>
      The Lab
    </h1>
  </div>
);

const p5PlantSketch = (
  <div
    className='w-full bg-white rounded-lg p-5 overflow-hidden h-[600px] relative cursor-pointer'
    id='flower-sketch-container'>
    <h1 className='p-2 rounded-lg bg-light-gray absolute uppercase text-2xl'>
      Click to Grow!
    </h1>
    <Sketch frameRate={15} backgroundColor={"#FFFFFF"} />
  </div>
);

const teleDescription = (
  <div className='bg-white rounded-lg p-5 flex justify-center'>
    <p className='text-xl max-w-[700px]'>
      TELE is an application in progress. Its designed to make graphics
      programming more accessible and provide a platform to easily build custom
      graphical task for tool chains. Its great for creative coding and data
      visualization. Its built on top of Apples Metal graphics API and scripts
      are written in python.
    </p>
  </div>
);

const teleImg1 = (
  <div className='bg-white rounded-lg p-5'>
    <Image
      className='rounded-lg'
      src='/tele/Tele_tool_Test.webp'
      alt='An abstract artwork of digital data'
      width={1500}
      height={1000}
    />
  </div>
);

const teleImg2 = (
  <div className='bg-white rounded-lg p-5'>
    <Image
      className='rounded-lg'
      src='/tele/Tele_example.webp'
      alt='An abstract artwork of digital data'
      width={1500}
      height={1000}
    />
  </div>
);

const sevDescription = (
  <div className='bg-white rounded-lg p-5 flex justify-center'>
    <p className='text-xl max-w-[700px]'>
      The following is a project done in collaboration with the Sevilleta
      National Wildlife Refuge about the collection and transfer of digital
      ecological data.
    </p>
  </div>
);

const sevImg1 = (
  <div className='bg-white rounded-lg p-5'>
    <Image
      className='rounded-lg'
      src='/sev/SevProjectCorrected.webp'
      alt='An abstract artwork of digital data'
      width={1500}
      height={1000}
    />
  </div>
);

const sevImg2 = (
  <div className='bg-white rounded-lg p-5'>
    <Image
      className='rounded-lg'
      src='/sev/sevSketch1.webp'
      alt='An abstract artwork of digital data'
      width={1500}
      height={1000}
    />
  </div>
);

const sevImg3 = (
  <div className='bg-white rounded-lg p-5'>
    <Image
      className='rounded-lg'
      src='/sev/sevSketch2.webp'
      alt='An abstract artwork of digital data'
      width={1500}
      height={1000}
    />
  </div>
);

const sevImg4 = (
  <div className='bg-white rounded-lg p-5'>
    <Image
      className='rounded-lg'
      src='/sev/sevSketch3.webp'
      alt='An abstract artwork of digital data'
      width={1500}
      height={1000}
    />
  </div>
);

export default function Lab() {
  return (
    <div className='w-full max-w-[1500px] grid grid-cols-1'>
      <NavBar />
      <BouncingIn
        containerClass={"w-full flex flex-col space-y-5 mt-5"}
        items={[
          largeHeader,
          p5PlantSketch,
          teleDescription,
          teleImg1,
          teleImg2,
          sevDescription,
          sevImg1,
          sevImg2,
          sevImg3,
          sevImg4,
        ]}
      />
    </div>
  );
}
