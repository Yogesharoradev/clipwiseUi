import React from 'react';

const Banner = () => {
  return (
    <div className="flex items-center justify-between p-8 relative">
          <div className="absolute inset-0">
            <svg
              viewBox="0 0 1440 400"
              preserveAspectRatio="none"
              className="absolute top-0 right-0 h-full w-full"
            >
              <path
                d="M1440,0 C1200,300 900,350 700,400 L1440,400 Z"
                className="fill-cyan-300 "
              />
            </svg>
         </div>

      <div className="flex flex-col items-end w-full ml-16 h-[400px]">
        <h1 className="text-5xl font-normal mb-3 text-[#335368]">Best Price</h1>
        <h2 className="text-6xl font-semibold text-[#2b556a]">AGATE PHONE GRIP</h2>
        <div className="flex gap-5 justify-between items-center">
          <del className="text-2xl mt-10 font-normal text-blue-400">44.50$</del>
          <p className="mt-8 text-6xl font-bold text-red-500">19.50$</p>
        </div>
        <p className="mt-6 text-gray-600 w-[400px] text-end font-normal">
          These Pop Rock Crystal grip tops can be swapped with other tops depending on your mood, outfit, nails,
          phone case, holiday etc.! just gently squeeze the sides to remove and swap out with another color of design!
        </p>
        <button className="mt-4 px-9 py-3 rounded-2xl font-semibold bg-gradient-to-r from-blue-400 to-blue-500 text-white">
          BUY NOW
        </button>
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="flex justify-center items-center h-[650px] w-[650px] bg-[#ffffff] rounded-full relative">
          <div className="flex justify-center items-center h-[500px] w-[500px] bg-white drop-shadow-2xl rounded-full relative">
            <div className="flex justify-center items-center h-[350px] w-[350px] bg-white drop-shadow-2xl rounded-full overflow-hidden">
              <img src="/ring.jpg" alt="Description" className="h-42 w-42 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
