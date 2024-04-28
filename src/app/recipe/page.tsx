import React from 'react';
import styles from './main.module.css';
import './style.css'; // Ensure the CSS path is correct

const Page = () => {
  return (
    <div className="text-gray-600 font-body">
      <div className='grid md:grid-cols-3'>
        <div className='md:col-span-1 md:flex md:justify-end'>
          <nav className='text-right'>
            <div className='flex justify-between items-center'>
              <h1 className="font-bold uppercase p-4 border-b border-gray-400">
                {/* <a href="/" className='text-green-500 sm:text-red-500 lg:text-blue-500'>Food Ninja</a> */}
                <a href="/" className='hover:text-gray-800'>Food Ninja</a>
              </h1>
              <div className='px-4 cursor-pointer md:hidden' id="burger">
                <svg className="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </div>
            </div>
            <ul className='text-sm mt-6 hidden md:block' id="menu" >
              <li className="text-gray-800 font-bold py-1">
                <a href="#" className='px-4 flex justify-end border-r-4 border-primary'>
                  <span>Home</span>
                  <svg className="w-5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                </a>
              </li>
              <li className='py-1'>
                <a href="#" className='px-4 flex justify-end border-r-4 border-white'>
                  <span>About</span>
                  <svg className="w-5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                  </svg>

                </a>
              </li>
              <li className='py-1'>
                <a href="#" className='px-4 flex justify-end border-r-4 border-white'>
                  <span>Contact</span>
                  <svg className="w-5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <main className='px-16 py-6 bg-gray-100 md:col-span-2'>
          <div className='flex justify-center md:justify-end'>
            <a href="#" className='button text-primary border-primary md:border-2 hover:bg-primary hover:text-white'>Log in</a>
            <a href="#" className='button text-primary ml-2 border-primary md:border-2 hover:bg-primary hover:text-white'>Sign up</a>
          </div>

          {/* <div className='flex item-center justigy-center'>
              <div className='bg-red-500 h-4 w-6'></div>
              <div className='bg-blue-500 h-8 w-6'></div>
              <div className='bg-green-500 h-12 w-6'></div>
          </div> */}

          <header >
            <h2 className="text-gray-800 text-mammoth font-semibold">Recipes</h2>
            <h3 className="text-2xl font-semibold">For Ninjas</h3>
          </header>

          <div>
            <h4 className="font-bold mt-12 pb-2 border-b border-gray-400">Latest Recipes</h4>
            <div className='mt-8 grid lg:grid-cols-3  gap-10'>
              {/* cards go here */}
              <div className='card hover:shadow-lg'>
                  <img src="img/stew.jpg" alt="stew" className='w-full h-32 sm:h-48 object-cover'/>
                  <div className='m-4'>
                    <span className='font-bold '>5 Bean Chili Stew</span>
                    {/* block level element make it go in next line */}
                    <span className='block text-gray-500 text-sm'>Recipe by Mario</span> 
                  </div>
                  <div className='badge'>
                    <svg className="w-5 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span>25 mins</span>
                  </div>
              </div>
              <div className='card hover:shadow-lg'>
                  <img src="img/noodles.jpeg" alt="noodles" className='w-full h-32 sm:h-48 object-cover'/>
                  <div className='m-4'>
                    <span className='font-bold '>Veg Noodles</span>
                    {/* block level element make it go in next line */}
                    <span className='block text-gray-500 text-sm'>Recipe by Mario</span> 
                  </div>
                  <div className='badge'>
                    <svg className="w-5 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span>25 mins</span>
                  </div>
              </div>
              <div className='card hover:shadow-lg'>
                  <img src="img/curry.jpeg" alt="curry" className='w-full h-32 sm:h-48 object-cover'/>
                  <div className='m-4'>
                    <span className='font-bold '>Tofu Curry</span>
                    {/* block level element make it go in next line */}
                    <span className='block text-gray-500 text-sm'>Recipe by Mario</span> 
                  </div>
                  <div className='badge'>
                    <svg className="w-5 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span>25 mins</span>
                  </div>
              </div>
            </div>
            
          </div>

          <section>
            <h4 className="font-bold mt-12 pb-2 border-b border-gray-400">Most Popular</h4>
            <div className='mt-8'>
              {/* cards go here */}
            </div>
          </section>

          <div className='flex justify-center'>
            <div className='button bg-secondary-100 text-secondary-200 hover:shadow-inner'>Load more</div>
          </div>
        </main>
      </div> 
    </div>
    
  );
};

export default Page;
