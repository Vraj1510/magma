import React from 'react';
import agl_2 from '../src/Images/agl_2.png';
import adani from '../src/Images/adani.png';
import adicon from '../src/Images/adicon.png';
import anchor from '../src/Images/anchor.png';
import confidence_2 from '../src/Images/confidence_2.png';
import externalfactory from '../src/Images/externalfactory.png';
import varmora_2 from '../src/Images/varmora_2.png';
import kajaria_2 from '../src/Images/kajaria_2.png';
import simpolo_2 from '../src/Images/simpolo_2.png';
import jsw_2 from '../src/Images/jsw_2.png';
import moglix from '../src/Images/moglix.png';
import zetwerk_2 from '../src/Images/zetwerk_2.png';
import { useEffect } from 'react';
const Page8 = () => {
  return (
    <div className='px-8 py-12 bg-orange-100 overflow-hidden'>
      <div className='flex flex-col max-w-screen-xl mx-auto items-center'>
        <div className='flex flex-col text-center justify-center items-center font-serif font-semibold text-2xl md:text-3xl lg:text-4xl'>
          Notable Clients &amp; Suppliers
          <hr className='w-[110%] mb-8 mt-2 border-gray-300 border border-mg' />
        </div>
        <div
          data-direction='right'
          data-speed='slow'
          className='-mb-12 -mt-10 w-screen scroller flex flex-nowrap overflow-x-hidden animate-none'
          style={{
            overflow: 'hidden',
            padding: '60px 0',
            whiteSpace: 'nowrap',
            position: 'relative',
          }}
        >
          <ul
            className='flex items-center justify-center md:justify-start [&amp;_li]:mx-8 [&amp;_img]:max-w-none'
            style={{ display: 'inline-flex', animation: '20s slide infinite linear' }}
          >
            <li className='mx-4 w-32'>
              <img src={agl_2} className='h-14 w-auto' alt='agl' />
            </li>
            <li className='mx-4 w-32'>
              <img src={varmora_2} className='h-12 w-auto' alt='varmora' />
            </li>
            <li className='mx-4 w-32'>
              <img src={kajaria_2} className='h-10 w-auto' alt='kajaria' />
            </li>
            <li className='mx-4 w-32'>
              <img src={simpolo_2} className='h-12 w-auto' alt='simpolo' />
            </li>
            <li className='mx-4 w-32'>
              <img src={adicon} className='h-12 w-auto' alt='adicon' />
            </li>
            <li className='mx-4 w-32'>
              <img src={adani} className='h-12 w-auto' alt='adani' />
            </li>
            <li className='mx-4 w-32'>
              <img src={confidence_2} className='h-16 w-auto' alt='confidence' />
            </li>
            <li className='mx-4 w-32'>
              <img src={jsw_2} className='h-12 w-auto' alt='jsw' />
            </li>
            <li className='mx-4 w-32'>
              <img src={moglix} className='h-14 w-auto' alt='moglix' />
            </li>
            <li className='mx-4 w-32'>
              <img src={zetwerk_2} className='h-14 w-auto' alt='zetwerk' />
            </li>
          </ul>
          <ul
            className='flex items-center justify-center md:justify-start [&amp;_li]:mx-8 [&amp;_img]:max-w-none'
            // aria-hidden='true'
            style={{ display: 'inline-flex', animation: '20s slide infinite linear' }}
          >
            <li className='mx-4 w-32'>
              <img src={agl_2} className='h-14 w-auto' alt='agl' />
            </li>
            <li className='mx-4 w-32'>
              <img src={varmora_2} className='h-12 w-auto' alt='varmora' />
            </li>
            <li className='mx-4 w-32'>
              <img src={kajaria_2} className='h-10 w-auto' alt='kajaria' />
            </li>
            <li className='mx-4 w-32'>
              <img src={simpolo_2} className='h-12 w-auto' alt='simpolo' />
            </li>
            <li className='mx-4 w-32'>
              <img src={adicon} className='h-12 w-auto' alt='adicon' />
            </li>
            <li className='mx-4 w-32'>
              <img src={adani} className='h-12 w-auto' alt='adani' />
            </li>
            <li className='mx-4 w-32'>
              <img src={confidence_2} className='h-16 w-auto' alt='confidence' />
            </li>
            <li className='mx-4 w-32'>
              <img src={jsw_2} className='h-12 w-auto' alt='jsw' />
            </li>
            <li className='mx-4 w-32'>
              <img src={moglix} className='h-14 w-auto' alt='moglix' />
            </li>
            <li className='mx-4 w-32'>
              <img src={zetwerk_2} className='h-14 w-auto' alt='zetwerk' />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page8;
