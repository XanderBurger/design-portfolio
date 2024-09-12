import React from "react";
import { getWorkInfo } from "../getWorkInfo";
import { notFound } from "next/navigation";
import NavBar from "@/app/components/navBar";
import BouncingIn from "@/app/components/bounceIn";
import Image from "next/image";

export default function Work({ params }) {
  const info = getWorkInfo(params.slug);
  if (!info) notFound();

  const headerInfo = (
    <div className=' bg-white rounded-lg p-5 grid h-full'>
      <h1 className='text-2xl bg-light-gray p-2 rounded-lg uppercase w-fit h-fit'>
        {info.title}
      </h1>
      <h1 className='text-center text-[40px] text-hot-pink py-10 leading-tight justify-self-center max-w-[600px]'>
        {info.sentence}
      </h1>
      <div className=' w-fit flex space-x-2 self-end'>
        {info.tags.map((t) => (
          <p
            className='uppercase font-IBMPlexMono bg-light-gray p-2 py-1 rounded-lg'
            key={t}>
            {t}
          </p>
        ))}
      </div>
    </div>
  );

  const description = (
    <div className=' p-5 bg-white rounded-lg text-lg'>{info.description}</div>
  );

  const images = [];
  info.images.forEach((i) => {
    images.push(
      <div className='w-full bg-white p-5 rounded-lg'>
        <Image
          src={i}
          width={1500}
          height={1000}
          alt={i}
          className='rounded-lg'
        />
      </div>
    );
  });

  return (
    <>
      <section className='max-w-[1500px] w-full space-y-5'>
        <NavBar />
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-5'>
          <BouncingIn
            items={[headerInfo, description]}
            containerClass='col-span-1 lg:col-span-12 grid lg:grid-cols-2 grid-cols-1 gap-5'
          />
          {/* <BouncingIn
            items={[description]}
            containerClass='col-span-1 lg:col-span-6 sm:col-span'
          /> */}
          <BouncingIn
            items={images}
            containerClass='col-span-1 lg:col-span-12 flex flex-col space-y-5'
          />
        </div>
        {/* <h1 className='text-3xl'>{info.title}</h1>
        <div className='grid pb-4 grid-cols-2 md:grid-cols-4 mx-[20px] md:mx-[40px] gap-2 mb-10'>
          {info.tags.map((t) => (
            <p
              className='border-hot-pink border text-center text-hot-pink rounded-full px-2 group-hover:border-white group-hover:text-white ease-in-out duration-200'
              key={t}>
              {t}
            </p>
          ))}
        </div>

        <div>
          <div className='text-[24px] mx-[20px] md:mx-[40px] mb-10 grid md:grid-cols-2 grid-cols-1 gap-2'>
            <p className='text-[40px] leading-[43px] lg:leading-[65px] lg:text-[60px] self-center text-center mb-4 md:mb-0 text-hot-pink mx-0 md:mx-4'>
              {info.sentence}
            </p>
            <div>{info.description}</div>
          </div>

          <ImageGrid images={info.images} videos={info.videos} />
        </div>
        <div className='my-[40px]'>
          <div className='grid grid-flow-col mx-[20px] md:mx-[40px] my-[40px]'>
            <Link
              className='uppercase hover:text-hot-pink font-medium text-[24px]'
              href={`/work/${info.prevPage}`}>
              Previous
            </Link>
            <Link
              className='justify-self-end uppercase hover:text-hot-pink font-medium text-[24px]'
              href={`/work/${info.nextPage}`}>
              Next
            </Link>
          </div>
        </div> */}
      </section>
    </>
  );
}
