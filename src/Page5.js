import React from 'react';
import factory from '/Users/vrajshah1510/Documents/magma/src/Images/factory.jpeg';
const Page5 = () => {
  return (
    <div class='px-8 pt-16 pb-10 bg-gray-100' id='mpf'>
      <div class='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        <div class='flex items-center justify-center'>
          <img src={factory} class='border border-black' alt='MPF' />
        </div>
        <div class='flex flex-col justify-center items-center'>
          <div class='flex flex-col text-center justify-center items-center font-serif font-semibold text-2xl md:text-3xl lg:text-4xl'>
            Magma Powered Factory
            <hr class='w-[115%] mb-8 mt-2 border-gray-300 border border-mg' />
          </div>
          <div class='max-w-xl font-medium font-poppins md:text-lg text-gray-800'>
            <p class='mb-8'>
              Improve your operations, competitiveness and profitability by becoming a Magma powered
              Factory!
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
                    Access to
                    <span class='font-semibold'>Quality Raw Materials</span>
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
                    Better <span class='font-semibold'>Cost Optimization</span>
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
                    Increased <span class='font-semibold'>Capacity Utilization</span>
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
                    Reduction in <span class='font-semibold'>Manufacturing Lead Time</span>
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
                    Reduction in <span class='font-semibold'>Unplanned Downtime</span>
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
                    Better <span class='font-semibold'>Operational Efficiency</span>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5;
