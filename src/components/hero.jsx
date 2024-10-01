import React from 'react';

const Hero = () => {
  return (
    <div className="min-h-screen gap-12 bg-gradient-to-r from-cyan-300 via-pink-300 via-25% to-cyan-500 p-8 flex items-center relative z-90">

      <div className="absolute inset-0 overflow-hidden z-0">
        <svg
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full"
        >
          <path
            d="M0,350 C600,200 120,600 1500,0 L1440,400 L0,400 Z" 
            className="fill-white"
          />
        </svg>
      </div>

      <div className="flex flex-col justify-center ml-8 z-10 relative">
        <h2 className="text-3xl font-semibold text-white">Welcome To</h2>
        <h1 className='text-white text-6xl font-bold'>Pop Rock Crystal Shop!</h1>
        <p className="text-start w-[400px] text-black mt-12">
          Here you will find unique phone accessories, crystals jewelry, and more. Free shipping inside the US and
          our phone grips come with a limited warranty. Enjoy!
        </p>
        <div className="mt-12 flex space-x-14">
          <button className="bg-white rounded-2xl text-blue-900 text-xl font-semibold py-3 px-9 shadow hover:bg-gray-200 transition duration-200">
            Shop Now
          </button>
          <button className="text-black">
            About Us
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center z-10 relative drop-shadow-2xl">
        <div className="bg-white h-[500px] w-[500px] flex justify-center items-center relative rounded-3xl shadow-lg overflow-hidden">
          <h1 className='bg-[#8994e5] text-white px-5 py-2 rounded-r-xl absolute top-24 left-0'>New Lot</h1>
          
          <img 
            src="/ring.jpg" 
            alt="Ring"
            className="absolute h-64 w-64 object-cover shadow-transparent text-center" 
          />

          <h1 className='text-xl absolute bottom-11 font-semibold text-gray-400'>CRYSTAL AGATE PHONE GRIP<span className='text-blue-900 font-semibold'> - 18.99$</span></h1>
        </div>

        <div className="flex items-center space-x-10 justify-center w-full mt-8 z-10 relative">
      
          <button className="py-1 px-2 bg-[#8994e5] shadow-md text-white">
            &larr;
          </button>

          <div className="flex space-x-4">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="h-3 w-3 rounded-full hover:bg-[#8994e5] bg-gray-300 transition duration-200"
              ></div>
            ))}
          </div>

          <button className="py-1 px-2 bg-[#8994e5] shadow-md text-white">
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
