import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';
import bs2 from '../src/Images/bs2.jpg';
import et from '../src/Images/et.png';
import ls from '../src/Images/ls.png';
import ROCE from '../src/Images/ROCE.jpeg';
import liquid from '../src/Images/liquid.jpeg';
import img1 from '../src/Images/img1.jpeg';
import img2 from '../src/Images/img2.jpeg';
import img3 from '../src/Images/img3.jpeg';
import comprehensive_sourcing from '../src/Images/comprehensive_sourcing.jpeg';
const Page10 = () => {
  const [activeTab, setActiveTab] = useState('news');
  const arr = [img1, img2, img3];
  const [index, setIndex] = useState(0);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const prevImage = () => {
    if (index === 0) {
      setIndex(2);
    } else if (index > 0) {
      setIndex(index - 1);
    }
  };
  const nextImage = () => {
    setIndex((index + 1) % 3);
  };
  return (
    <div class='px-8 py-12 bg-orange-100'>
      <div className='flex items-center justify-center mb-4 rounded-md font-lexend uppercase'>
        <ul
          className='flex flex-row justify-center items-center text-lg md:text-xl font-medium text-center'
          id='default-tab'
          role='tablist'
        >
          <li className='me-2' role='presentation'>
            <button
              className={`inline-block px-2 md:px-4 py-4 rounded-md bg-transparent  ${
                activeTab === 'news' ? 'bg-white rounded-md border shadow-lg opacity-90' : ''
              }`}
              onClick={() => handleTabClick('news')}
              role='tab'
              aria-controls='news'
              aria-selected={activeTab === 'news'}
            >
              News
            </button>
          </li>
          <li className='me-2' role='presentation'>
            <button
              className={`inline-block px-2 md:px-4 py-4 rounded-md bg-transparent  ${
                activeTab === 'blogs' ? 'bg-white rounded-md border shadow-lg opacity-90' : ''
              }`}
              onClick={() => handleTabClick('blogs')}
              role='tab'
              aria-controls='blogs'
              aria-selected={activeTab === 'blogs'}
            >
              Blogs
            </button>
          </li>
          <li className='me-2' role='presentation'>
            <button
              className={`inline-block px-2 md:px-4 py-4 rounded-md bg-transparent  ${
                activeTab === 'team' ? 'bg-white rounded-md border shadow-lg opacity-90' : ''
              }`}
              onClick={() => handleTabClick('team')}
              role='tab'
              aria-controls='team'
              aria-selected={activeTab === 'team'}
            >
              In Action
            </button>
          </li>
        </ul>
      </div>

      <div id='default-tab-content'>
        <div
          className={`p-2 ${activeTab === 'news' ? '' : 'hidden'}`}
          id='news'
          role='tabpanel'
          aria-labelledby='news-tab'
        >
          <div class='py-5 text-center'>
            <div class='items-center justify-center flex flex-col lg:flex-row gap-5'>
              <div class='bg-white border shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer p-4 sm:h-[550px] h-[450px] md:h-[550px] lg:h-[500px] w-[80%] md:p-4 flex flex-col items-center justify-center gap-4'>
                <div class='flex items-center justify-center'>
                  <img
                    class='h-[260px] sm:h-[400px] md:h-[400px] md:w-[800px] lg:h-72 md:mt-2 sm:-mt-2 -mt-2 lg:-mt-1'
                    src={bs2}
                    alt=''
                  />
                </div>
                <div className='flex flex-col mt-5 lg:mt-4 md:mt-4 md:-space-y-20 space-y-2 sm:-space-y-4 lg:-space-y-3'>
                  <div class='h-14 md:h-32 lg:h-28 xl:h-20 text-md md:text-md lg:text-lg font-poppins'>
                    " Magma strengthens its geographical dominance with entry at APM Terminals,
                    Pipavav Port "
                  </div>
                  <div className=''>
                    <a
                      href='https://www.business-standard.com/amp/content/press-releases-ani/magma-strengthens-its-geographical-dominance-with-entry-at-apm-terminals-pipavav-port-124041900782_1.html'
                      data-te-ripple-init=''
                      data-te-ripple-color='light'
                      class='inline-flex items-center gap-1 text-left text-mg px-4 py-2 text-base font-poppins font-semibold leading-normal ease-in-out focus:outline-none focus:ring-0 '
                    >
                      Read More <FaArrowRight />
                    </a>
                  </div>
                </div>
              </div>

              <div class='bg-white border shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer p-4 sm:h-[550px] h-[450px] md:h-[550px] lg:h-[500px] w-[80%] md:p-4 flex flex-col items-center justify-center gap-4'>
                <div class='flex items-center justify-center'>
                  <img
                    class='h-[260px] sm:h-[400px] md:h-[400px] md:w-[800px] lg:h-72 md:mt-2 sm:-mt-2 -mt-2 lg:-mt-1'
                    src={et}
                    alt=''
                  />
                </div>
                <div className='flex flex-col mt-5 lg:mt-4 md:mt-4 md:-space-y-20 space-y-2 sm:-space-y-4 lg:-space-y-3'>
                  <div class='h-14 md:h-32 lg:h-28 xl:h-20 text-md md:text-md lg:text-lg font-poppins'>
                    " Magma raises $3.3 million in funding led by General Catalyst "
                  </div>
                  <div className=''>
                    <a
                      href='https://economictimes.indiatimes.com/tech/funding/b2b-manufacturing-startup-magma-raises-3-3-million-in-funding-led-by-general-catalyst/articleshow/97731621.cms'
                      data-te-ripple-init=''
                      data-te-ripple-color='light'
                      class='inline-flex items-center gap-1 text-left text-mg px-4 py-2 text-base font-poppins font-semibold leading-normal ease-in-out focus:outline-none focus:ring-0 '
                    >
                      Read More <FaArrowRight />
                    </a>
                  </div>
                </div>
              </div>
              <div class='bg-white border shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer p-4 sm:h-[550px] h-[450px] md:h-[550px] lg:h-[500px] w-[80%] md:p-4 flex flex-col items-center justify-center gap-4'>
                <div class='flex items-center justify-center'>
                  <img
                    class='h-[260px] sm:h-[400px] md:h-[400px] md:w-[800px] lg:h-72 md:mt-2 sm:-mt-2 -mt-2 lg:-mt-1'
                    src={ls}
                    alt=''
                  />
                </div>
                <div className='flex flex-col mt-5 lg:mt-4 md:mt-4 md:-space-y-20 space-y-2 sm:-space-y-4 lg:-space-y-3'>
                  <div class='h-14 md:h-32 lg:h-28 xl:h-20 text-md md:text-md lg:text-lg font-poppins'>
                    " Magma expands into adhesive market with launch of MagFix "
                  </div>
                  <div className=''>
                    <a
                      href='https://www.logisticsandscm.com/supply-chain/magma-expands-into-adhesive-market-with-launch-of-magfix'
                      data-te-ripple-init=''
                      data-te-ripple-color='light'
                      class='inline-flex items-center gap-1 text-left text-mg px-4 py-2 text-base font-poppins font-semibold leading-normal ease-in-out focus:outline-none focus:ring-0 '
                    >
                      Read More <FaArrowRight />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`p-2 ${activeTab === 'blogs' ? '' : 'hidden'}`}
          id='news'
          role='tabpanel'
          aria-labelledby='news-tab'
        >
          <div class='py-5 text-center'>
            <div class='items-center justify-center flex flex-col lg:flex-row gap-5'>
              <div class='bg-white border shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer p-4 sm:h-[550px] h-[450px] md:h-[550px] lg:h-[500px] w-[80%] md:p-4 flex flex-col items-center justify-center gap-4'>
                <div class='flex items-center justify-center'>
                  <img
                    class='h-[260px] sm:h-[400px] md:h-[400px] md:w-[800px] lg:h-72 md:mt-2 sm:-mt-2 -mt-2 lg:-mt-1'
                    src={ROCE}
                    alt=''
                  />
                </div>
                <div className='flex flex-col mt-5 lg:mt-4 md:mt-4 md:-space-y-20 space-y-2 sm:-space-y-4 lg:-space-y-3'>
                  <div class='h-14 md:h-32 lg:h-28 xl:h-20 text-md md:text-md lg:text-lg font-poppins'>
                    Monitoring Working Capital and ROCE: Essential Metrics for Factory Success
                  </div>
                  <div className=''>
                    <a
                      href='https://www.linkedin.com/pulse/monitoring-working-capital-roce-essential-metrics-factory-success-koz1f/?trackingId=EDwhIMjpRACkUSZlw90NRQ%3D%3D'
                      data-te-ripple-init=''
                      data-te-ripple-color='light'
                      class='inline-flex items-center gap-1 text-left text-mg px-4 py-2 text-base font-poppins font-semibold leading-normal ease-in-out focus:outline-none focus:ring-0 '
                    >
                      Read More <FaArrowRight />
                    </a>
                  </div>
                </div>
              </div>

              <div class='bg-white border shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer p-4 sm:h-[550px] h-[450px] md:h-[550px] lg:h-[500px] w-[80%] md:p-4 flex flex-col items-center justify-center gap-4'>
                <div class='flex items-center justify-center'>
                  <img
                    class='h-[260px] sm:h-[400px] md:h-[400px] md:w-[800px] lg:h-72 md:mt-2 sm:-mt-2 -mt-2 lg:-mt-1'
                    src={comprehensive_sourcing}
                    alt=''
                  />
                </div>
                <div className='flex flex-col mt-5 lg:mt-4 md:mt-4 md:-space-y-20 space-y-2 sm:-space-y-4 lg:-space-y-3'>
                  <div class='h-14 md:h-32 lg:h-28 xl:h-20 text-md md:text-md lg:text-lg font-poppins'>
                    A Comprehensive Sourcing Guide for Factories
                  </div>
                  <div className=''>
                    <a
                      href='https://www.linkedin.com/pulse/comprehensive-sourcing-guide-factories-magma-asia-wuhwf/?trackingId=vr5lHV%2BuRzi7p24gAOjTJA%3D%3D'
                      data-te-ripple-init=''
                      data-te-ripple-color='light'
                      class='inline-flex items-center gap-1 text-left text-mg px-4 py-2 text-base font-poppins font-semibold leading-normal ease-in-out focus:outline-none focus:ring-0 '
                    >
                      Read More <FaArrowRight />
                    </a>
                  </div>
                </div>
              </div>

              <div class='bg-white border shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer p-4 sm:h-[550px] h-[450px] md:h-[550px] lg:h-[500px] w-[80%] md:p-4 flex flex-col items-center justify-center gap-4'>
                <div class='flex items-center justify-center'>
                  <img
                    class='h-[260px] sm:h-[400px] md:h-[400px] md:w-[800px] lg:h-72 md:mt-2 sm:-mt-2 -mt-2 lg:-mt-1'
                    src={liquid}
                    alt=''
                  />
                </div>
                <div className='flex flex-col mt-5 lg:mt-4 md:mt-4 md:-space-y-20 space-y-2 sm:-space-y-4 lg:-space-y-3'>
                  <div class='h-14 md:h-32 lg:h-28 xl:h-20 text-md md:text-md lg:text-lg font-poppins'>
                    Magma Invests $150K in a recyling facility
                  </div>
                  <div className=''>
                    <a
                      href='https://www.linkedin.com/pulse/magma-invests-150k-recyling-facility-magma-asia-242mf/?trackingId=uzypwaXnTB6%2BvXu1GpIuew%3D%3D'
                      data-te-ripple-init=''
                      data-te-ripple-color='light'
                      class='inline-flex items-center gap-1 text-left text-mg px-4 py-2 text-base font-poppins font-semibold leading-normal ease-in-out focus:outline-none focus:ring-0 '
                    >
                      Read More <FaArrowRight />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div
          className={`p-2 ${activeTab === 'blogs' ? '' : 'hidden'}`}
          id='blogs'
          role='tabpanel'
          aria-labelledby='blogs-tab'
        >
          <div class='py-5  text-center'>
            <div class='items-center justify-center flex flex-col lg:flex-row gap-5'>
              <div class='bg-white border shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer p-4 h-[500px] w-[80%] md:p-4 flex flex-col items-center justify-center gap-4'>
                <div class='flex items-center justify-center'>
                  <img class='h-84 lg:h-72 mb-5 -mt-2 w-full' src={ROCE} alt='' />
                </div>
                <div class='h-10 md:h-20 lg:h-24 xl:h-12 text-md md:text-md lg:text-lg font-poppins'>
                  Monitoring Working Capital and ROCE: Essential Metrics for Factory Success
                </div>
                <div>
                  <a
                    href='https://www.linkedin.com/pulse/monitoring-working-capital-roce-essential-metrics-factory-success-koz1f/?trackingId=EDwhIMjpRACkUSZlw90NRQ%3D%3D'
                    data-te-ripple-init=''
                    data-te-ripple-color='light'
                    class='inline-flex -mt-4 items-center gap-1 text-left text-mg px-4 py-2 text-base font-poppins font-semibold leading-normal ease-in-out focus:outline-none focus:ring-0 '
                  >
                    Read More <FaArrowRight />
                  </a>
                </div>
              </div>

              <div class='bg-white border shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer p-4 h-[500px] w-[80%] md:p-4 flex flex-col items-center justify-center gap-4'>
                <div class='flex items-center justify-center'>
                  <img class='h-84 lg:h-72 mb-5 -mt-2 w-full' src={comprehensive_sourcing} alt='' />
                </div>
                <div class='h-10 md:h-20 lg:h-24 xl:h-12 text-md md:text-md lg:text-lg font-poppins'>
                  A Comprehensive Sourcing Guide for Factories
                </div>
                <div>
                  <a
                    href='https://www.linkedin.com/pulse/comprehensive-sourcing-guide-factories-magma-asia-wuhwf/?trackingId=vr5lHV%2BuRzi7p24gAOjTJA%3D%3D'
                    data-te-ripple-init=''
                    data-te-ripple-color='light'
                    class='inline-flex -mt-4 items-center gap-1 text-left text-mg px-4 py-2 text-base font-poppins font-semibold leading-normal ease-in-out focus:outline-none focus:ring-0 '
                  >
                    Read More <FaArrowRight />
                  </a>
                </div>
              </div>
              <div class='bg-white border shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer p-4 h-[500px] w-[80%] md:p-4 flex flex-col items-center justify-center gap-4'>
                <div class='flex items-center justify-center'>
                  <img class='h-84 lg:h-72 mb-5 -mt-2 w-full' src={liquid} alt='' />
                </div>
                <div class='h-10 md:h-20 lg:h-24 xl:h-12 text-md md:text-md lg:text-lg font-poppins'>
                  Magma Invests $150K in a recyling facility
                </div>
                <div>
                  <a
                    href='https://www.linkedin.com/pulse/magma-invests-150k-recyling-facility-magma-asia-242mf/?trackingId=uzypwaXnTB6%2BvXu1GpIuew%3D%3D'
                    data-te-ripple-init=''
                    data-te-ripple-color='light'
                    class='inline-flex -mt-4 items-center gap-1 text-left text-mg px-4 py-2 text-base font-poppins font-semibold leading-normal ease-in-out focus:outline-none focus:ring-0 '
                  >
                    Read More <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div
          className={`p-2 ${activeTab === 'team' ? '' : 'hidden'}`}
          id='team'
          role='tabpanel'
          aria-labelledby='team-tab'
        >
          <div id='indicators-carousel' class='relative' data-carousel='static'>
            <div class='relative overflow-hidden rounded-lg h-96 md:h-96 lg:h-[80vh]'>
              <div
                class='absolute inset-0 transition-transform transform translate-x-0 z-30'
                data-carousel-item='active'
              >
                <img
                  src={arr[index]}
                  class='absolute block w-[96%] h-[800px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                  alt='...'
                />
              </div>
            </div>
            <div class='absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2'>
              <button
                type='button'
                onClick={() => {
                  setIndex(0);
                }}
                class={`w-3 h-3 rounded-full ${
                  index === 0 ? 'bg-white' : 'bg-white/50 dark:bg-gray-800/50'
                } hover:bg-white dark:hover:bg-gray-800`}
                aria-current='true'
                aria-label='Slide 1'
                data-carousel-slide-to='0'
              ></button>
              <button
                type='button'
                onClick={() => {
                  setIndex(1);
                }}
                class={`w-3 h-3 rounded-full ${
                  index === 1 ? 'bg-white' : 'bg-white/50 dark:bg-gray-800/50'
                } hover:bg-white dark:hover:bg-gray-800`}
                aria-current='false'
                aria-label='Slide 2'
                data-carousel-slide-to='1'
              ></button>
              <button
                type='button'
                onClick={() => {
                  setIndex(2);
                }}
                class={`w-3 h-3 rounded-full ${
                  index === 2 ? 'bg-white' : 'bg-white/50 dark:bg-gray-800/50'
                } hover:bg-white dark:hover:bg-gray-800`}
                aria-current='false'
                aria-label='Slide 3'
                data-carousel-slide-to='2'
              ></button>
            </div>
            <button
              type='button'
              onClick={() => {
                prevImage();
              }}
              class='absolute top-0 left-4 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
              data-carousel-prev=''
            >
              <span class='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30  hover:bg-white/80  group-focus:outline-none'>
                <svg
                  class='w-4 h-4 text-white rtl:rotate-180'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 6 10'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M5 1 1 5l4 4'
                  ></path>
                </svg>
                <span class='sr-only'>Previous</span>
              </span>
            </button>
            <button
              type='button'
              onClick={() => {
                nextImage();
              }}
              class='absolute top-0 end-4 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
              data-carousel-next=''
            >
              <span class='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30  hover:bg-white/80  group-focus:outline-none'>
                <svg
                  class='w-4 h-4 text-white rtl:rotate-180'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 6 10'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='m1 9 4-4-4-4'
                  ></path>
                </svg>
                <span class='sr-only'>Next</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page10;
