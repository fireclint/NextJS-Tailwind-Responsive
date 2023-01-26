import Image from 'next/image';
import React from 'react';
import { data } from './portfolioData';

const Portfolio = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
      <h1 className='font-bold text-2xl p-4'>Travel Photos</h1>
      <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
        {data.map((work, i) =>(
          <div className='w-full h-full first:col-span-2 first:md:col-span-3 first:row-span-2' key={i}>
          <Image
            src={work.source}
            alt='/'
            layout='responsive'
            width='677'
            height='451'
          />
        </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
