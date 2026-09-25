import Image from 'next/image';
import React from 'react';
import bannerImage from '@/assets/hero_img.jpg';

const Banner = () => {
  return (
    <section className="py-12 container mx-auto ">
      <div className="bg-linear-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-16 shadow-xl ring-1 ring-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Content Left */}
          <div className="space-y-14 text-center md:text-left order-2 md:order-1">
            <h1 className="font-extrabold text-3xl md:text-[30px] lg:text-[44px] text-white tracking-tight leading-tight">
              Books to freshen up <br className="hidden lg:inline" /> your bookshelf
            </h1>
            <div className="pt-2">
              <button className="px-8 py-3.5 bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/20 transition-all duration-200 ease-in-out">
                View The List
              </button>
            </div>
          </div>

          {/* Image Right */}
          <div className="flex justify-center order-1 md:order-2">
            <div className="relative max-w-sm md:max-w-md w-full aspect-4/3 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
              <Image 
                src={bannerImage} 
                alt="Featured books curated for your collection"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
