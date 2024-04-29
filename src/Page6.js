import React from 'react';
import factory1 from '/Users/vrajshah1510/Documents/magma/src/Images/factory1.jpeg';

const Page6 = () => {
  return (
    <div class='px-8 pt-16 pb-10 bg-orange-100' id='mps'>
      <div class='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        <div class='flex flex-col justify-center items-center order-last lg:order-first'>
          <div class='flex flex-col text-center justify-center items-center font-serif font-semibold text-2xl md:text-3xl lg:text-4xl'>
            Magma Powered Supplier
            <hr class='w-[115%] mb-8 mt-2 border-gray-300 border border-mg' />
          </div>
          <div class='max-w-xl font-medium font-poppins md:text-lg text-gray-800'>
            <p class='mb-8'>
              Magma powered Supplier program offers distillation units, reprocessing facilities,
              repackaging centers, compressing units, and aggregation facilities a unique
              opportunity to partner with Magma for their growth and success.
            </p>

            <ul class='space-y-5'>
              <li class='flex space-x-3'>
                <img
                  class='w-8 h-8'
                  src='https://img.icons8.com/glyph-neue/28/FF5525/checked.png'
                  alt='checked'
                />
                <div class='flex items-center justify-center'>
                  <span class='font-medium font-poppins md:text-lg text-gray-800'>
                    Increased
                    <span class='font-semibold'>Take-home earnings</span>
                  </span>
                </div>
              </li>
              <li class='flex space-x-3'>
                <img
                  class='w-8 h-8'
                  src='https://img.icons8.com/glyph-neue/28/FF5525/checked.png'
                  alt='checked'
                />
                <div class='flex items-center justify-center'>
                  <span class='font-medium font-poppins md:text-lg text-gray-800'>
                    Collaborative <span class='font-semibold'>Growth</span>
                  </span>
                </div>
              </li>
              <li class='flex space-x-3'>
                <img
                  class='w-8 h-8'
                  src='https://img.icons8.com/glyph-neue/28/FF5525/checked.png'
                  alt='checked'
                />
                <div class='flex items-center justify-center'>
                  <span class='font-medium font-poppins md:text-lg text-gray-800'>
                    Stable <span class='font-semibold'>Demand</span>
                  </span>
                </div>
              </li>
              <li class='flex space-x-3'>
                <img
                  class='w-8 h-8'
                  src='https://img.icons8.com/glyph-neue/28/FF5525/checked.png'
                  alt='checked'
                />
                <div class='flex items-center justify-center'>
                  <span class='font-medium font-poppins md:text-lg text-gray-800'>
                    Reduced <span class='font-semibold'>Working Capital </span>
                    requirements
                  </span>
                </div>
              </li>
              <li class='flex space-x-3'>
                <img
                  class='w-8 h-8'
                  src='https://img.icons8.com/glyph-neue/28/FF5525/checked.png'
                  alt='checked'
                />
                <div class='flex items-center justify-center'>
                  <span class='font-medium font-poppins md:text-lg text-gray-800'>
                    Strengthening <span class='font-semibold'>Core Competencies</span>
                  </span>
                </div>
              </li>
              <li class='flex space-x-3'>
                <img
                  class='w-8 h-8'
                  src='https://img.icons8.com/glyph-neue/28/FF5525/checked.png'
                  alt='checked'
                />
                <div class='flex items-center justify-center'>
                  <span class='font-medium font-poppins md:text-lg text-gray-800'>
                    Streamlined <span class='font-semibold'>Processes</span>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class='flex items-center justify-center order-first lg:order-last'>
          <img src={factory1} class='border border-black' alt='MPS' />
        </div>
      </div>
    </div>
  );
};

export default Page6;
