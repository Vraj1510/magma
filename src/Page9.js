import React from 'react';
import gcnew from '../src/Images/gcnew.png';
import allinone from '../src/Images/allinone.svg';
import titancapital from '../src/Images/titancapital.png';
import invert from '../src/Images/wehventureinvert.png';
import accion from '../src/Images/accion.png';
const Page9 = () => {
  return (
    <div class='flex flex-col items-center justify-center py-12 text-center bg-gray-100'>
      <div class='flex flex-col text-center justify-center items-center font-serif font-semibold text-2xl md:text-3xl lg:text-4xl'>
        Investors
        <hr class='w-[130%] mb-8 mt-2 border-gray-300 border border-mg' />
      </div>
      <div class='px-4 w-full flex flex-wrap gap-8'>
        <div class='flex items-center justify-center mx-auto'>
          <img src={gcnew} class='w-auto h-10' />
        </div>

        <div class='flex items-center justify-center mx-auto'>
          <img src={allinone} class='w-auto h-16' />
        </div>

        <div class='flex items-center justify-center mx-auto'>
          <img src={invert} class='w-auto h-14' />
        </div>

        <div class='flex items-center justify-center mx-auto'>
          <img src={titancapital} class='w-auto h-10 md:h-12' />
        </div>
        <div class='flex items-center justify-center mx-auto'>
          <img src={accion} class='w-auto h-8 md:h-10' />
        </div>
      </div>
    </div>
  );
};

export default Page9;
