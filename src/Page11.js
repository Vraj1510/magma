import React from 'react';
import logo from '../src/Images/logo.png';
import { FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
const Page11 = () => {
  return (
    <footer id='footer' class=' py-5 bg-gray-800'>
      <div class='flex flex-col w-full gap-4 px-5 mt-6 md:px-10'>
        <div class='grid w-full grid-cols-2 gap-16 md:grid-cols-4'>
          <div class='md:mx-auto'>
            <div>
              <h1 class='mb-4 font-serif font-extrabold tracking-wide text-white uppercase md:text-lg lg:text-2xl'>
                Explore
              </h1>
              <ul class='text-sm text-white font-poppins md:text-base lg:text-lg'>
                <li class='mb-1.5'>
                  <a href='/index#mpf' class='hover:text-mg'>
                    Magma powered Factory
                  </a>
                </li>
                <li class='mb-1.5'>
                  <a href='/index#mps' class='hover:text-mg'>
                    Magma powered Supplier
                  </a>
                </li>
                <li class='mb-1.5'>
                  <a href='/magfix' class='hover:text-mg'>
                    Magfix
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class='md:mx-auto'>
            <div>
              <h2 class='mb-4 font-serif font-extrabold tracking-wide text-white uppercase md:text-lg lg:text-2xl'>
                Tech Platforms
              </h2>
              <ul class='text-sm text-white font-poppins md:text-base lg:text-lg'>
                <li class='mb-1.5'>
                  <a href='https://factory.magmagroup.in/' class='hover:text-mg'>
                    Magma Factory
                  </a>
                </li>
                <li class='mb-1.5'>
                  <a href='https://magport.magmagroup.in/' class='hover:text-mg'>
                    MagPort
                  </a>
                </li>
                <li class='mb-1.5'>
                  <a href='https://green.magmagroup.in/' class='hover:text-mg'>
                    Magma Green
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class='md:mx-auto'>
            <div>
              <h2 class='mb-4 font-serif font-extrabold tracking-wide text-white uppercase md:text-lg lg:text-2xl'>
                About Us
              </h2>
              <ul class='text-sm text-white font-poppins md:text-base lg:text-lg'>
                <li class='mb-1.5'>
                  <a href='#' class='hover:text-mg'>
                    Team
                  </a>
                </li>
                <li class='mb-1.5'>
                  <a href='/about_us#investors' class='hover:text-mg'>
                    Investors
                  </a>
                </li>
                <li class='mb-1.5'>
                  <a href='/about_us#contact_us' class='hover:text-mg'>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class='md:mx-auto'>
            <div class='flex flex-col'>
              <h2 class='mb-4 font-serif font-extrabold tracking-wide text-white uppercase md:text-lg lg:text-2xl md:items-center'>
                Connect With Us
              </h2>
              <div class='flex gap-3 md:gap-6 xl:mx-auto'>
                <a
                  href='https://www.linkedin.com/company/magma-asia/'
                  class='text-white hover:text-mg'
                >
                  {/* <i class="fa-brands fa-2x fa-linkedin"></i> */}
                  <FaLinkedin size={24}></FaLinkedin>
                </a>
                <a href='https://www.instagram.com/magma.india/' class='text-white hover:text-mg'>
                  {/* <i class="fa-brands fa-2x fa-instagram"></i> */}
                  <FaTwitter size={24}></FaTwitter>
                </a>
                <a href='https://twitter.com/MagmaAI' class='text-white hover:text-mg'>
                  {/* <i class="fa-brands fa-2x fa-x-twitter"></i> */}
                  <FaInstagram size={24}></FaInstagram>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class='w-full mx-auto lg:mt-12 lg:mb-20 my-10 md:w-1/2'>
          <h2 class='mb-4 font-serif text-lg font-medium tracking-wide text-center text-white md:text-xl'>
            Subscribe to our Newsletter,{' '}
            <a
              class='font-bold text-2xl hover:text-orange-300'
              href='https://www.linkedin.com/newsletters/magma-pulse-7134487657249652736/'
            >
              Magma Pulse
            </a>
          </h2>
          <form class='w-full' method='POST' name='newsletter_form'>
            <div class='flex flex-row w-full'>
              <div class='relative w-full'>
                <div class='absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3'>
                  {/* <i class='fa-solid fa-envelope fa-lg md:fa-xl text-mg'></i>
                   */}
                  <FaEnvelope size={24}></FaEnvelope>
                </div>
                <input
                  type='email'
                  id='newsletter_email'
                  name='email'
                  class='block w-full px-5 text-sm outline-none text-gray-900 border-2 rounded-sm bg-gray-50 border-mg focus:ring-mg focus:border-mg ps-11 h-11 md:text-base font-poppins'
                  placeholder='Enter Email Address'
                  required=''
                />
              </div>

              <button
                type='submit'
                class='px-5 text-sm font-semibold text-white bg-blue-500 rounded-sm md:px-5 md:text-base font-lexend h-11 ms-2 bg-mg hover:bg-blue-600 cursor-pointer focus:ring-4 focus:outline-none focus:ring-gray-300'
              >
                Subscribe
              </button>
            </div>
          </form>

          {/* <script>
                const script_url =
                    "https://script.google.com/macros/s/AKfycbw6-p0ITstrHDNRN4KkDXTwtH4ZKlquBA4vwiUYwQdGUfknpVNKL5wWpe48soD2IETq/exec";
                const form = document.forms["newsletter_form"];

                form.addEventListener("submit", (e) => {
                    e.preventDefault();
                    fetch(script_url, {
                        method: "POST",
                        body: new FormData(form),
                    })
                        .then((response) => {
                            alert("Thank you for subscribing Magma newsletter")
                        }
                        )
                        .then(() => {
                            window.location.reload();
                        })
                        .catch((error) => alert("Something went wrong, please try again !!"));
                });
            </script> */}
        </div>
      </div>

      <div class='lg:hidden'>
        <div class='inline-flex items-center justify-center w-full'>
          <hr class='w-full h-px my-8 border-0 bg-mg' />
          <div class='absolute -translate-x-1/2 left-1/2'>
            <div class='px-3 bg-gray-500'>
              <img src={logo} class='h-8' alt='Magma Logo' />
            </div>
          </div>
        </div>
        <div class='flex flex-col items-center justify-center gap-3'>
          <span class='text-sm text-white font-poppins sm:text-center'>
            2024 ©
            <a href='https://magmagroup.in' class='hover:underline'>
              Magma™
            </a>
            . All Rights Reserved.
          </span>
          <div class='flex flex-row gap-5 text-sm text-white font-poppins'>
            <a href='#' class='hover:underline'>
              Privacy Policy
            </a>
            <a href='#' class='hover:underline'>
              Terms of Use
            </a>
          </div>
        </div>
      </div>

      <div class='items-center justify-center hidden w-full lg:flex'>
        <hr class='w-full h-px my-8 border-0 bg-mg' />
        <div class='absolute w-full -translate-x-1/2 left-1/2'>
          <div class='w-full flex items-center justify-between px-16'>
            <div class='w-auto flex flex-row rounded-2xl px-5'>
              <div class='flex items-center gap-4 text-md px-2.5 py-1.5 rounded-md bg-gray-500'>
                <img src={logo} class='h-11' alt='Magma Logo' />
                <span class=' text-white font-poppins sm:text-center'>
                  2024 ©
                  <a href='https://magmagroup.in' class='hover:underline'>
                    Magma™
                  </a>
                  . All Rights Reserved.
                </span>
              </div>
            </div>
            <div class='flex w-68 h-10 justify-between gap-4 rounded-md flex-row items-center text-md text-white bg-gray-500 px-3'>
              <div class='px-1 font-poppins'>
                <a href='#' class='hover:underline'>
                  Privacy Policy
                </a>
              </div>
              <div class='flex items-center pr-1 font-poppins'>
                <a href='#' class='hover:underline'>
                  Terms of Use
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Page11;
