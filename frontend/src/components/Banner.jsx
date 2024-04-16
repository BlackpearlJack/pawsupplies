import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

const Banner = () => {
  const [currentPromotion, setCurrentPromotion] = useState(0);
  const promotions = [
    {
      title: "🐾 Welcome to our Pet Paradise!",
      description: "Find purr-fect deals on all your pet essentials! From premium food to cozy beds, we've got everything your furry friend needs to thrive.",
    },
    {
      title: "🎉 Exclusive Sale - Up to 50% off!",
      description: "Don't miss out on our exclusive sale - Up to 50% off on select items! Shop now and give your pet the love they deserve while saving big! 🐶🐱",
    },
    // Add more promotions as needed
  ];

  const nextPromotion = () => {
    setCurrentPromotion((currentPromotion + 1) % promotions.length);
    console.log(currentPromotion);
  };

  const prevPromotion = () => {
    setCurrentPromotion((currentPromotion - 1 + promotions.length) % promotions.length);
  };

  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
       <button type="button" onClick={prevPromotion} className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <ChevronLeftIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />
        </button>
      <div className="absolute left-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl">
        <div className="aspect-</div>[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30" style={{ clipPath: 'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)' }} />
      </div>
      <div className="absolute right-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl">
        <div className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30" style={{ clipPath: 'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)' }} />
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 justify-center">
        <h2 className="text-sm leading-6 text-gray-900 font-semibold">{promotions[currentPromotion].title}</h2>
        <p className="text-sm leading-6 text-gray-900">{promotions[currentPromotion].description}</p>
      </div>
      <button type="button" onClick={nextPromotion} className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <ChevronRightIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />
        </button>
      <div className="flex flex-1 justify-end">
        <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          
        </button> 
      </div>
    </div>
  );
}

export default Banner;
