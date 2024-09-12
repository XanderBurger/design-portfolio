import Arrow from "./arrow";
import Link from "next/link";

export default function Card({
  arrowDirection,
  title,
  subtitle,
  description,
  info,
  icon,
  destination,
}) {
  return (
    <Link
      className='w-full rounded-lg bg-white p-5 group flex flex-col space-y-[65px] hover:cursor-pointer ease-out'
      href={destination}>
      <div className='flex w-full items-center'>
        <h1 className='text-2xl uppercase font-IBMPlex group-hover:text-hot-pink mr-2 duration-300'>
          {title}
        </h1>
        <Arrow direction={arrowDirection} />
      </div>
      <div className='flex items-center group-hover:text-hot-pink duration-300 border-dashed border-t border-almost-black group-hover:border-hot-pink pt-2'>
        <div className='flex flex-col mr-2'>
          <h3 className='text-lg font-IBMPlex'>{subtitle}</h3>
          <p className='font-IBMPlex font-[200] leading-5'>{description}</p>
          <i className='mt-2 group-hover:rotate-180 duration-300 w-min group-hover:fill-hot-pink'>
            {icon}
          </i>
        </div>
        <h3 className='ml-auto font-IBMPlexMono font-[300] text-center uppercase'>
          {info}
        </h3>
      </div>
    </Link>
  );
}
