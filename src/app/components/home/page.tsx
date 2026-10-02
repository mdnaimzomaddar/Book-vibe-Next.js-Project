import Image from 'next/image';
import React from 'react';
import BannerImage from '@/assets/pngwing 1.png';

const HomePage = () => {
  return (
    <div className='my-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center bg-[#1313130D] rounded-3xl p-8 md:p-20 gap-8'>
        {/* Left side */}
        <div className='flex flex-col gap-8 text-center md:text-left items-center md:items-start'>
          <h1 className='text-3xl sm:text-4xl lg:text-[50px] font-bold text-[#131313] leading-tight sm:leading-snug lg:leading-[60px]'>
            Books to freshen up <br/> your bookshelf
          </h1>
          <button className='btn btn-success text-white font-bold text-lg px-7 py-3 h-auto min-h-0 rounded-xl bg-[#23BE0A] border-none hover:bg-[#1fa108] transition-all'>
            View The List
          </button>
        </div>

        {/* Right side */}
        <div className='flex justify-center md:justify-end items-center'>
          <Image
            src={BannerImage}
            alt='banner'
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;