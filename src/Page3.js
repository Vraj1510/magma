import React from 'react';

const Page3 = () => {
  return (
    <div class='px-8 py-12 flex flex-col items-center justify-center bg-gray-100'>
      <div class='flex flex-col text-center justify-center items-center font-serif font-semibold text-2xl md:text-3xl lg:text-4xl'>
        Solutions
        <hr class='w-[130%] mb-8 mt-2 border-gray-300 border border-mg' />
      </div>
      <div class='grid sm:grid-cols-2 md:grid-cols-2 grid-cols lg:grid-cols-4 gap-5 text-center'>
        <div class='p-5 rounded-sm border flex flex-col py-12 bg-white transition-transform duration-300 hover:scale-105 hover:cursor-pointer hover:shadow-2xl space-y-4  lg:space-y-8 lg:py-10 shadow-md'>
          <div class='flex flex-col md:flex-row lg:flex-col xl:flex-row items-center justify-center gap-3 p-4'>
            <div class=''>
              <img
                class='h-[50px] md:h-[60px] lg:h-[70px] w-[50px] md:w-[60px] lg:w-[70px]'
                src='https://img.icons8.com/ios-filled/70/FF5525/shop.png'
                alt='shop'
              />
            </div>
            <div class='h-14 flex items-center justify-center'>
              <h5 class='text-wrap text-lg sm:text-lg md:text-xl lg:text-2xl font-serif font-bold'>
                Input Marketplace
              </h5>
            </div>
          </div>
          <div class='flex items-center justify-center'>
            <p class='text-gray-700 text-lg md:text-lg font-poppins'>
              Connects factories and suppliers with high-quality raw material requirements.
            </p>
          </div>
        </div>

        <div class='p-5 rounded-sm border flex flex-col py-12 bg-white transition-transform duration-300 hover:scale-105 hover:cursor-pointer hover:shadow-2xl space-y-4  lg:space-y-8 lg:py-10 shadow-md'>
          <div class='flex flex-col md:flex-row lg:flex-col xl:flex-row items-center justify-center gap-3 p-4'>
            <div class=''>
              <img
                class='h-[50px] md:h-[60px] lg:h-[70px] w-[50px] md:w-[60px] lg:w-[70px]'
                src='https://img.icons8.com/ios-filled/70/FF5525/move-by-trolley.png'
                alt='move-by-trolley'
              />
            </div>
            <div class='h-14 flex items-center justify-center'>
              <h5 class='text-wrap text-lg sm:text-lg md:text-xl lg:text-2xl font-serif font-bold'>
                Liquid Marketplace
              </h5>
            </div>
          </div>
          <div class='flex items-center justify-center'>
            <p class='text-gray-700 text-lg md:text-lg font-poppins'>
              Enables factories to monetize excess inventory and industrial waste
            </p>
          </div>
        </div>

        <div class='p-5 rounded-sm border flex flex-col py-12 bg-white transition-transform duration-300 hover:scale-105 hover:cursor-pointer hover:shadow-2xl space-y-4  lg:space-y-8 lg:py-10 shadow-md'>
          <div class='flex flex-col md:flex-row lg:flex-col xl:flex-row items-center justify-center gap-3 p-4'>
            <div class=''>
              <img
                class='h-[50px] md:h-[60px] lg:h-[70px] w-[50px] md:w-[60px] lg:w-[70px]'
                src='https://img.icons8.com/pastel-glyph/70/FF5525/express-delivery--v1.png'
                alt='express-delivery--v1'
              />
            </div>
            <div class='h-14 flex items-center justify-center'>
              <h5 class='text-wrap text-lg sm:text-lg md:text-xl lg:text-2xl font-serif font-bold'>
                Energy &amp; Logistics
              </h5>
            </div>
          </div>
          <div class='flex items-center justify-center'>
            <p class='text-gray-700 text-lg md:text-lg font-poppins'>
              Ensures suppliers against timely and hassle-free delivery
            </p>
          </div>
        </div>

        <div class='p-5 rounded-sm border flex flex-col py-12 bg-white transition-transform duration-300 hover:scale-105 hover:cursor-pointer hover:shadow-2xl space-y-4  lg:space-y-8 lg:py-10 shadow-md'>
          <div class='flex flex-col md:flex-row lg:flex-col xl:flex-row items-center justify-center gap-3 p-4'>
            <div class=''>
              <img
                class='h-[50px] md:h-[60px] lg:h-[70px] w-[50px] md:w-[60px] lg:w-[70px]'
                src='https://img.icons8.com/ios-filled/70/FF5525/gears.png'
                alt='gears'
              />
            </div>
            <div class='h-14 flex items-center justify-center'>
              <h5 class='text-wrap text-lg sm:text-lg md:text-xl lg:text-2xl font-serif font-bold'>
                Magma Solutions
              </h5>
            </div>
          </div>
          <div class='flex items-center justify-center'>
            <p class='text-gray-700 text-lg md:text-lg font-poppins'>
              Suite of solutions on a monthly subscription
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
