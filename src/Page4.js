import React from 'react';
const Page4 = () => {
  return (
    <div class='px-8 py-12 flex flex-col items-center justify-center bg-orange-100'>
      <div class='flex flex-col text-center justify-center items-center font-serif font-semibold text-2xl md:text-3xl lg:text-4xl'>
        Processes
        <hr class='w-[130%] mb-8 mt-2 border-gray-300 border border-mg' />
      </div>
      <div class='grid sm:grid-cols-2 md:grid-cols-2 grid-cols lg:grid-cols-4 gap-5 text-center'>
        <div class='p-5 rounded-sm border flex flex-col py-12 bg-white transition-transform duration-300 hover:scale-105 hover:cursor-pointer hover:shadow-2xl space-y-4  lg:space-y-8 lg:py-10 shadow-md'>
          <div class='flex flex-col md:flex-row lg:flex-col xl:flex-row items-center justify-center gap-3 p-4'>
            <div class=''>
              <img
                class='h-[60px] md:h-[70px] lg:h-[80px] w-[60px] md:w-[70px] lg:w-[80px]'
                src='https://img.icons8.com/external-goofy-solid-kerismaker/70/FF5525/external-Processing-office-goofy-solid-kerismaker.png'
                alt='shop'
              />
            </div>
          </div>
          <div class='h-14 flex items-center justify-center'>
            <h5 class='text-wrap text-lg sm:text-lg md:text-xl lg:text-2xl font-serif font-bold'>
              Processing &amp; Mixing
            </h5>
          </div>
        </div>

        <div class='p-5 rounded-sm border flex flex-col py-12 bg-white transition-transform duration-300 hover:scale-105 hover:cursor-pointer hover:shadow-2xl space-y-4  lg:space-y-8 lg:py-10 shadow-md'>
          <div class='flex flex-col md:flex-row lg:flex-col xl:flex-row items-center justify-center gap-3 p-4'>
            <div class=''>
              <img
                class='h-[60px] md:h-[70px] lg:h-[80px] w-[60px] md:w-[70px] lg:w-[80px]'
                src='https://img.icons8.com/external-soleicons-line-amoghdesign/70/FF5525/external-aggregate-soleicons-line-vol-1-soleicons-line-amoghdesign.png'
                alt='move-by-trolley'
              />
            </div>
          </div>
          <div class='h-14 flex items-center justify-center'>
            <h5 class='text-wrap text-lg sm:text-lg md:text-xl lg:text-2xl font-serif font-bold'>
              Aggregation &amp; Compression
            </h5>
          </div>
        </div>

        <div class='p-5 rounded-sm border flex flex-col py-12 bg-white transition-transform duration-300 hover:scale-105 hover:cursor-pointer hover:shadow-2xl space-y-4  lg:space-y-8 lg:py-10 shadow-md'>
          <div class='flex flex-col md:flex-row lg:flex-col xl:flex-row items-center justify-center gap-3 p-4'>
            <div class=''>
              <img
                class='h-[60px] md:h-[70px] lg:h-[80px] w-[60px] md:w-[70px] lg:w-[80px]'
                src='https://img.icons8.com/external-others-pike-picture/75/FF5525/external-Water-Purification-water-others-pike-picture-3.png'
                alt='express-delivery--v1'
              />
            </div>
          </div>
          <div class='h-14 flex items-center justify-center'>
            <h5 class='text-wrap text-lg sm:text-lg md:text-xl lg:text-2xl font-serif font-bold'>
              Distillation
            </h5>
          </div>
        </div>

        <div class='p-5 rounded-sm border flex flex-col py-12 bg-white transition-transform duration-300 hover:scale-105 hover:cursor-pointer hover:shadow-2xl space-y-4  lg:space-y-8 lg:py-10 shadow-md'>
          <div class='flex flex-col md:flex-row lg:flex-col xl:flex-row items-center justify-center gap-3 p-4'>
            <div class=''>
              <img
                class='h-[50px] md:h-[60px] lg:h-[70px] w-[50px] md:w-[60px] lg:w-[70px]'
                src='https://img.icons8.com/ios/60/FF5525/import.png'
                alt='gears'
              />
            </div>
          </div>
          <div class='h-14 flex items-center justify-center'>
            <h5 class='text-wrap text-lg sm:text-lg md:text-xl lg:text-2xl font-serif font-bold'>
              Imports
            </h5>
          </div>
        </div>
      </div>
      {/* <hr class='w-1/2 md:w-1/4 my-8 border border-mg' />
      <div class='grid sm:grid-cols-2 md:grid-cols-2 grid-cols lg:grid-cols-4 gap-5 text-center'>
        <div class='border flex flex-col items-center justify-center gap-3 p-4 py-12 space-y-6 bg-white shadow-lg rounded-sm'>
          <div class='h-16 flex items-center justify-center'>
            <img
              class='w-[50px] md:w-[70px] h-[50px] md:h-[70px]'
              src='https://img.icons8.com/external-goofy-solid-kerismaker/70/FF5525/external-Processing-office-goofy-solid-kerismaker.png'
              alt='external-Processing-office-goofy-solid-kerismaker'
            />
          </div>
          <div class='h-14 md:h-12 lg:h-10 xl:h-8 flex items-center justify-center'>
            <h5 class='text-sm md:text-lg lg:text-xl font-serif font-semibold'>
              Processing &amp; Mixing
            </h5>
          </div>
        </div>

        <div class='border flex flex-col items-center justify-center gap-3 p-4 py-12 space-y-6 bg-white shadow-lg rounded-sm'>
          <div class='h-16 flex items-center justify-center'>
            <img
              class='w-[50px] md:w-[70px] h-[50px] md:h-[70px]'
              src='https://img.icons8.com/external-soleicons-line-amoghdesign/70/FF5525/external-aggregate-soleicons-line-vol-1-soleicons-line-amoghdesign.png'
              alt='external-aggregate-soleicons-line-vol-1-soleicons-line-amoghdesign'
            />
          </div>
          <div class='h-14 md:h-12 lg:h-10 xl:h-8 flex items-center justify-center'>
            <h5 class='text-sm md:text-lg lg:text-xl font-serif font-semibold'>
              Aggregation &amp; Compression
            </h5>
          </div>
        </div>

        <div class='border flex flex-col items-center justify-center gap-3 p-4 py-12 space-y-6 bg-white shadow-lg rounded-sm'>
          <div class='h-16 flex items-center justify-center'>
            <img
              width='75'
              height='75'
              src='https://img.icons8.com/external-others-pike-picture/75/FF5525/external-Water-Purification-water-others-pike-picture-3.png'
              alt='external-Water-Purification-water-others-pike-picture-3'
            />
          </div>
          <div class='h-14 md:h-12 lg:h-10 xl:h-8 flex items-center justify-center'>
            <h5 class='text-sm md:text-lg lg:text-xl font-serif font-semibold'>Distillation</h5>
          </div>
        </div>

        <div class='border flex flex-col items-center justify-center gap-3 p-4 py-12 space-y-6 bg-white shadow-lg rounded-sm'>
          <div class='h-16 flex items-center justify-center'>
            <img
              width='60'
              height='60'
              src='https://img.icons8.com/ios/60/FF5525/import.png'
              alt='import'
            />
          </div>
          <div class='h-14 md:h-12 lg:h-10 xl:h-8 flex items-center justify-center'>
            <h5 class='text-sm md:text-lg lg:text-xl font-serif font-semibold'>Imports</h5>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Page4;
