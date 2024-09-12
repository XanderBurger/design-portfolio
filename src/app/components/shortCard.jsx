import Link from "next/link";
import Arrow from "./arrow";

export default function ShortCard({
  title,
  arrowDirection,
  description,
  destination,
}) {
  return (
    <Link
      className='w-full rounded-lg bg-white p-5 group flex flex-col hover:cursor-pointer'
      href={destination}>
      <div className='flex w-full items-center'>
        <h1 className='text-2xl uppercase font-IBMPlex group-hover:text-hot-pink mr-2 duration-300'>
          {title}
        </h1>
        <Arrow direction={arrowDirection} />
      </div>
      <div className='flex items-center group-hover:text-hot-pink duration-300'>
        {description ? (
          <p className='font-IBMPlex font-[200] max-w-[75%] leading-5'>
            {description}
          </p>
        ) : (
          ""
        )}
      </div>
    </Link>
  );
}
