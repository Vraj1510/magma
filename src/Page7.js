import React from 'react';
import magma_factory from '/Users/vrajshah1510/Documents/magma/src/Images/magma_factory.png';
import magport from '/Users/vrajshah1510/Documents/magma/src/Images/magport.png';
import magma_green from '/Users/vrajshah1510/Documents/magma/src/Images/magma_green.png';
const Page7 = () => {
  return (
    <div
      class='px-8 py-12 flex flex-col items-center justify-center bg-gray-100'
      id='tech-platforms'
    >
      <div class='flex flex-col text-center justify-center items-center font-serif font-semibold text-2xl md:text-3xl lg:text-4xl'>
        Tech Platforms
        <hr class='w-[115%] mb-8 mt-2 border-gray-300 border border-mg' />
      </div>
      <div class='flex flex-col lg:flex-row items-center justify-center lg:space-x-20 lg:space-y-0 space-y-10 text-center'>
        <div class='p-5 border shadow-lg hover:scale-105 transition-transform duration-300 hover:cursor-pointer lg:w-[27%] lg:h-[500px]  w-[80%] bg-gray-50'>
          <div class='flex flex-col gap-5 items-center justify-center'>
            <div class='w-1/2'>
              <img src={magma_factory} class='w-full h-auto' alt='Magma Factory' />
            </div>
            <div class='sm:h-28 md:h-32 lg:h-32 flex justify-center'>
              <p class='text-gray-700 text-sm lg:text-lg text-center font-poppins'>
                Powered by Input and Liquid Marketplaces, the platform facilitates multiple
                touchpoints addressing the diverse requirements of the ecosystem
              </p>
            </div>
            <a class='w-full lg:-mt-0 -mt-10' href='https://factory.magmagroup.in'>
              <button class='w-11/12 lg:w-4/5 lg:mt-0 mt-12 text-xs md:text-sm lg:text-base text-white bg-mg hover:bg-orange-600 bg-orange-600  font-semibold rounded-sm font-lexend uppercase px-4 py-2.5'>
                Visit Magma Factory
              </button>
            </a>
          </div>
        </div>

        <div class='p-5 border shadow-lg hover:scale-105 transition-transform duration-300 hover:cursor-pointer lg:w-[27%] lg:h-[500px] w-[80%] bg-gray-50'>
          <div class='flex flex-col gap-5  items-center justify-center'>
            <div class='w-1/2'>
              <img src={magport} class='w-full h-auto' alt='Magma Green' />
            </div>
            <div class='sm:h-28 md:h-32 lg:h-32 flex justify-center'>
              <p class='text-gray-700 text-sm lg:text-lg text-center font-poppins'>
                Delivers efficient logistics management, ensuring a seamless digital experience with
                hassle-free operations, and real-time updates
              </p>
            </div>
            <a class='w-full lg:-mt-0 -mt-10' href='https://magport.magmagroup.in'>
              <button class='w-11/12 lg:w-4/5 lg:mt-0 mt-12 text-xs md:text-sm lg:text-base text-white bg-mg hover:bg-orange-600 bg-orange-600  font-semibold rounded-sm font-lexend uppercase px-4 py-2.5'>
                Visit MagPort
              </button>
            </a>
          </div>
        </div>

        <div class='p-5 border shadow-lg hover:scale-105 transition-transform duration-300 hover:cursor-pointer lg:w-[27%] lg:h-[500px] w-[80%] bg-gray-50'>
          <div class='flex flex-col gap-5 items-center justify-center'>
            <div class='w-1/2'>
              <img src={magma_green} class='w-full h-auto' alt='Magma Green' />
            </div>
            <div class='sm:h-28 md:h-32 lg:h-32 flex justify-center'>
              <p class='text-gray-700 text-sm lg:text-lg text-center font-poppins'>
                SaaS tool that enables factories to generate interactive ESG reports based on
                material consumption data
              </p>
            </div>
            <a class='w-full lg:-mt-0 -mt-10' href='https://green.magmagroup.in'>
              <button class='w-11/12 lg:w-4/5 lg:mt-0 mt-12 text-xs md:text-sm lg:text-base text-white bg-mg hover:bg-orange-600 bg-orange-600  font-semibold rounded-sm font-lexend uppercase px-4 py-2.5'>
                Visit Magma Green
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page7;
