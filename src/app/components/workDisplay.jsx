import Image from "next/image";
export default function WorkDisplay({ imageUrl, alt, title }) {
  return (
    <div className='p-2 rounded-lg bg-white w-fit h-min'>
      <div className='w-full mb-2 flex space-x-2 items-center justify-start'>
        <div className='size-[15px] rounded-full bg-light-gray'></div>
        <div className='size-[15px] rounded-full bg-light-gray'></div>
        <div className='size-[15px] rounded-full bg-light-gray'></div>
        <div className='bg-light-gray w-full rounded-lg mx-auto flex justify-center py-1'>
          {title}
        </div>
      </div>
      <Image
        src={imageUrl}
        alt={alt}
        width='1000'
        height='800'
        className='rounded-lg'
      />
    </div>
  );
}
