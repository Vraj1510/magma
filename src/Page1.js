import React from 'react';
import navbg from '/Users/vrajshah1510/Documents/magma/src/Images/navbar_background.png';
import logo from '/Users/vrajshah1510/Documents/magma/src/Images/logo.png';
import page1 from '/Users/vrajshah1510/Documents/magma/src/Images/laptop_banner_2.png';

const Page1 = () => {
  return (
    <div className='flex flex-col h-screen w-screen overflow-y-scroll'>
      <div
        className='flex w-full items-center justify-center p-4 space-x-32'
        style={{
          backgroundImage: `url(${navbg})`, // Use the imported image
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <img src={logo} className='w-52 h-16'></img>
        <ul class='flex flex-col mt-4 font-serif text-xl font-semibold tracking-wider lg:flex-row lg:space-x-8 lg:mt-1.5'>
          <li>
            <a
              href='/index#who-we-are'
              class='block py-2 pl-3 pr-4 text-black rounded lg:p-0'
              aria-current='page'
            >
              Us
            </a>
          </li>
          <li>
            <a
              href='/index#mpf'
              class='block py-2 pl-3 pr-4 text-black rounded lg:p-0'
              aria-current='page'
            >
              MPF
            </a>
          </li>
          <li>
            <a href='/index#mps' class='block py-2 pl-3 pr-4 text-black rounded l lg:p-0'>
              MPS
            </a>
          </li>
          <li>
            <button
              id='dropdownHoverButton'
              data-dropdown-toggle='dropdownHover'
              data-dropdown-trigger='hover'
              class='block py-2 pl-3 pr-4 text-black rounded l lg:p-0'
              type='button'
            >
              Tech Platforms <i class='fa-solid fa-caret-down'></i>
            </button>

            <div
              id='dropdownHover'
              className='absolute top-0 left-0 z-10 divide-y divide-gray-100 rounded-lg shadow w-44 bg-orange-50 hidden'
              style={{
                inset: '0px auto auto 0px',
                margin: '0px',
                transform: 'translateX(676.5px) translateY(64px)',
              }}
              data-popper-placement='bottom'
            >
              <ul class='py-2 text-sm text-gray-700' aria-labelledby='dropdownHoverButton'>
                <li>
                  <a
                    href='https://factory.magmagroup.in/'
                    target='blank'
                    class='block px-4 py-2 hover:bg-mg hover:text-white'
                  >
                    Magma Factory
                  </a>
                </li>
                <li>
                  <a
                    href='https://magport.magmagroup.in/'
                    target='blank'
                    class='block px-4 py-2 hover:bg-mg hover:text-white'
                  >
                    MagPort
                  </a>
                </li>
                <li>
                  <a
                    href='https://green.magmagroup.in/'
                    target='blank'
                    class='block px-4 py-2 hover:bg-mg hover:text-white'
                  >
                    Magma Green
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a class='block py-2 pl-3 pr-4 text-black rounded lg:p-0'>Magfix</a>
          </li>
          <li>
            <button
              id='dropdownHoverButton'
              data-dropdown-toggle='dropdownHover2'
              data-dropdown-trigger='hover'
              class='block py-2 pl-3 pr-4 text-black rounded l lg:p-0'
              type='button'
            >
              About<i class='fa-solid fa-caret-down'></i>
            </button>

            <div
              id='dropdownHover2'
              className='absolute top-0 left-0 z-10 divide-y divide-gray-100 rounded-lg shadow w-44 bg-orange-50 hidden'
              style={{
                // inset: '0px auto auto 0px',
                margin: '0px',
                transform: 'translateX(938px) translateY(64px)',
              }}
              data-popper-placement='bottom'
            >
              <ul class='py-2 text-sm text-gray-700' aria-labelledby='dropdownHoverButton2'>
                <li>
                  <a target='blank' class='block px-4 py-2 hover:bg-mg hover:text-white'>
                    Team
                  </a>
                </li>
                <li>
                  <a target='blank' class='block px-4 py-2 hover:bg-mg hover:text-white'>
                    Investors
                  </a>
                </li>
                <li>
                  <a target='blank' class='block px-4 py-2 hover:bg-mg hover:text-white'>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <img src={page1} className='w-screen h-screen'></img>
    </div>
  );
};

export default Page1;
