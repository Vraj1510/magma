import React, { useState } from 'react';
import { FaBars, FaCaretDown } from 'react-icons/fa'; // Import React icons
import navbg from '/Users/vrajshah1510/Documents/magma/src/Images/navbar_background.png';
import logo from '/Users/vrajshah1510/Documents/magma/src/Images/logo.png';
import page1 from '/Users/vrajshah1510/Documents/magma/src/Images/laptop_banner_2.png';
import phone_banner from '/Users/vrajshah1510/Documents/magma/src/Images/phone_banner.jpg';

const Page2 = () => {
  const [display, setDisplay] = useState(false);
  const [displayTech, setDisplayTech] = useState(false);
  const [displayAbout, setDisplayAbout] = useState(false);
  return (
    <div className='h-auto w-screen'>
      <div
        className='bg-center bg-cover w-screen'
        style={{
          backgroundImage: `url(${navbg})`, // Use the imported image
          backgroundRepeat: 'no-onClick',
          backgroundSize: 'cover',
        }}
      >
        <header className='w-screen'>
          <nav className='flex w-screen py-3 items-center lg:mx-24'>
            <div className={`flex flex-wrap items-center justify-between px-5  w-screen lg:px-16 `}>
              <a href='https://magmagroup.in/' className='flex items-center' previewlistener='true'>
                <img src={logo} className='h-10 mr-3 md:h-14' alt='Magma Logo' />
              </a>
              <div className='flex items-center lg:order-2'>
                <button
                  data-collapse-toggle='mobile-menu-2'
                  type='button'
                  className={`inline-flex ${
                    display == false ? '' : ''
                  } items-center px-2 py-4 text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 outline-none focus:ring-2 focus:ring-orange9`}
                  aria-controls='mobile-menu-2'
                  aria-expanded='false'
                  // onMouseEnter={() => setDisplay(true)}
                  // onMouseLeave={() => setDisplay(false)}
                  onClick={() => {
                    setDisplay(!display);
                  }}
                >
                  <FaBars className='fa-xl' /> {/* Use React icons */}
                </button>
              </div>
              <div
                className={`items-center justify-between ${
                  display == false ? ' hidden' : ''
                } w-full lg:flex lg:w-auto lg:order-1'
                id='mobile-menu-2`}
              >
                <ul className='flex flex-col mt-4 font-serif text-lg font-semibold tracking-wider lg:flex-row lg:space-x-8 lg:mt-0'>
                  <li>
                    <a
                      href='/index#who-we-are'
                      className='block py-2 pl-3 pr-4 text-black rounded lg:p-0'
                      aria-current='page'
                    >
                      Us
                    </a>
                  </li>
                  <li>
                    <a
                      href='/index#mpf'
                      className='block py-2 pl-3 pr-4 text-black rounded lg:p-0'
                      aria-current='page'
                    >
                      MPF
                    </a>
                  </li>
                  <li>
                    <a
                      href='/index#mps'
                      className='block py-2 pl-3 pr-4 text-black rounded l lg:p-0'
                    >
                      MPS
                    </a>
                  </li>
                  <li className='flex flex-col '>
                    <button
                      id='dropdownHoverButton'
                      data-dropdown-toggle='dropdownHover'
                      data-dropdown-trigger='hover'
                      class='inline-flex items-center py-2 pl-3 pr-4 text-black rounded l lg:p-0'
                      type='button'
                    >
                      Tech Platforms{' '}
                      <FaCaretDown
                        // onMouseEnter={() => setDisplayTech(true)}
                        // onMouseLeave={() => setDisplayTech(false)}
                        onClick={() => {
                          setDisplayTech(!displayTech);
                        }}
                      ></FaCaretDown>
                    </button>
                    <div
                      id='dropdownHover'
                      className={`z-10 divide-y absolue lg:top-[-65px] top-[110px] lg:left-auto left-[220px] divide-gray-100 rounded-lg shadow w-40 bg-orange-50 ${
                        displayTech ? '' : 'hidden'
                      } `}
                      style={{
                        position: 'absolute',
                        '@media (min-width: 992px)': {
                          inset: '-65px 445px auto auto', // Adjust this value for large screens
                        },
                        '@media (max-width: 991px)': {
                          inset: '0px 0px auto auto', // Adjust this value for medium screens
                        },
                        margin: '0px',
                        transform: 'translateY(100%)', // Updated position to be below the header
                      }}
                      data-popper-placement='bottom'
                    >
                      <ul class='py-2 text-sm text-gray-700' aria-labelledby='dropdownHoverButton'>
                        <li>
                          <a
                            href='https://factory.magmagroup.in/'
                            target='blank'
                            class='block px-4 py-2 hover:bg-mg hover:text-white'
                            previewlistener='true'
                          >
                            Magma Factory
                          </a>
                        </li>
                        <li>
                          <a
                            href='https://magport.magmagroup.in/'
                            target='blank'
                            class='block px-4 py-2 hover:bg-mg hover:text-white'
                            previewlistener='true'
                          >
                            MagPort
                          </a>
                        </li>
                        <li>
                          <a
                            href='https://green.magmagroup.in/'
                            target='blank'
                            class='block px-4 py-2 hover:bg-mg hover:text-white'
                            previewlistener='true'
                          >
                            Magma Green
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a
                      href='/magfix'
                      className='block py-2 pl-3 pr-4 text-black rounded lg:p-0'
                      previewlistener='true'
                    >
                      Magfix
                    </a>
                  </li>
                  <li>
                    <button
                      id='dropdownHoverButton'
                      data-dropdown-toggle='dropdownHover2'
                      data-dropdown-trigger='hover'
                      className='inline-flex items-center py-2 pl-3 pr-4 text-black rounded l lg:p-0'
                      type='button'
                    >
                      About{' '}
                      <FaCaretDown
                        // onMouseEnter={() => setDisplayAbout(true)}
                        // onMouseLeave={() => setDisplayAbout(false)}
                        onClick={() => {
                          setDisplayAbout(!displayAbout);
                        }}
                      />
                    </button>
                    <div
                      id='dropdownHover2'
                      className={`z-10 divide-y divide-gray-100 absolute lg:top-[-4px] top-[250px] lg:left-[200px] left-[-820px] rounded-lg shadow w-32 bg-orange-50 ${
                        displayAbout ? '' : 'hidden'
                      }`}
                      style={{
                        position: 'absolute',
                        margin: '0px',
                        transform: 'translate3d(940.5px, 64px, 0px)',
                      }}
                      data-popper-placement='bottom'
                    >
                      <ul
                        className='py-2 text-sm text-gray-700'
                        aria-labelledby='dropdownHoverButton2'
                      >
                        <li>
                          <a
                            href='#'
                            target='blank'
                            className='block px-4 py-2 hover:bg-mg hover:text-white'
                          >
                            Team
                          </a>
                        </li>
                        <li>
                          <a
                            href='/about_us#investors'
                            target='blank'
                            className='block px-4 py-2 hover:bg-mg hover:text-white'
                          >
                            Investors
                          </a>
                        </li>
                        <li>
                          <a
                            href='/about_us#contact_us'
                            target='blank'
                            className='block px-4 py-2 hover:bg-mg hover:text-white'
                          >
                            Contact Us
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
      <img className='mx-auto lg:hidden w-screen' src={phone_banner} />
      <img className='mx-auto md:hidden sm:hidden lg:flex' src={page1} />
    </div>
  );
};
export default Page2;
