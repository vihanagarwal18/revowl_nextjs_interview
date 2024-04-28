import React from 'react';
import styles from './main.module.css';
// import './styles.css'; // Ensure the CSS path is correct

const Page = () => {
  return (
    <div className="text-gray-600 font-serif">
      <nav>
        <h1 className="font-bold uppercase p-4 border-b border-gray-400"><a href="/">Food Ninja</a></h1>
        <ul>
          <li className="text-gray-800 font-bold"><a href="#"><span>Home</span></a></li>
          <li><a href="#"><span>About</span></a></li>
          <li><a href="#"><span>Contact</span></a></li>
        </ul>
      </nav>

      <main className='px-16 py-6'>
        <div className='flex justify-end'>
          <a href="#" className='text-primary'>Log in</a>
          <a href="#" className='text-primary ml-2'>Sign up</a>
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
          <div className='mt-8'>
             {/* cards go here */}
            <div>
                <img src="img/stew.jpg" alt="stew" />
                <div>
                <span>5 Bean Chili Stew</span>
                <span>Recipe by Mario</span>
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

        <div className='flex'>
          <div className='bg-gray-100 text-gray-300'>Load more</div>
        </div>
      </main>
    </div>
  );
};

export default Page;
