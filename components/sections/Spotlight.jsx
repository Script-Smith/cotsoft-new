"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const products = [
  {
    name: 'Cotton Crew — Maroon',
    price: '₹399',
    image: 'https://images.squarespace-cdn.com/content/v1/5e1722e826484743f588e3c5/1696334540381-M40Q0I1IE32UM0UGF4IF/Day2_Shot9_021170170_84_7974copy.jpg?format=300w',
  },
  {
    name: 'Classic Ribbed — Noir',
    price: '₹349',
    image: 'https://images.squarespace-cdn.com/content/v1/5e1722e826484743f588e3c5/1696334550334-8SMJLTY7TUHMNKFNHZRJ/Day2_Shot1_021131755_42_145v2.jpg?format=300w',
  },
  {
    name: 'Everyday Ankle — Charcoal',
    price: '₹299',
    image: 'https://images.squarespace-cdn.com/content/v1/5e1722e826484743f588e3c5/1696334543915-C76OG5ZOKHJ9GGVKTXYC/Day2_Shot2_021160035_01_6070copy.jpg?format=300w',
  },
  {
    name: 'Velvet Touch — Crimson',
    price: '₹449',
    image: 'https://images.squarespace-cdn.com/content/v1/5e1722e826484743f588e3c5/1696334541784-VO0ZERFG7RESIRH8YGUE/Day2_Shot7_021140803_14_3809.jpg?format=300w',
  },
];

export default function EditorialSpotlight() {
  return (
    <section className="w-full bg-[#FAF9F6] py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
        
        {/* 1. Typographic Header Lockup */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-20 gap-8">
           <div className="overflow-hidden">
             <motion.h2 
               initial={{ y: "100%", opacity: 0 }}
               whileInView={{ y: "0%", opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
               className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-light tracking-tight text-[#0F1117]"
             >
               Everyday <br className="hidden sm:block" />
               <span className="italic font-serif text-[#0F1117]/80">Cotton Essentials.</span>
             </motion.h2>
           </div>
           
           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="max-w-xs flex flex-col gap-4 lg:text-right"
           >
             <span className="h-[1px] w-12 lg:w-full bg-[#0F1117]/20 lg:ml-auto"></span>
             <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#0F1117]/50 leading-relaxed font-medium">
               Fine cotton crafted for <br className="hidden lg:block" /> every day, every mood.
             </p>
           </motion.div>
        </div>

        {/* 2. The Asymmetrical Split Layout */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start relative">
          
          {/* Left: Sticky Editorial Image */}
          <div className="w-full lg:w-[45%] lg:sticky lg:top-10 xl:top-24 h-auto lg:h-[75vh] z-10 hidden md:block">
             <div className="relative w-full h-[60vh] lg:h-[75vh] overflow-hidden group rounded-sm shadow-xl shadow-black/5 bg-[#0F1117]/5">
               <Image
                 src="/images/min.png"
                 alt="Signature Editorial"
                 fill
                 className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-1000 ease-[0.16,1,0.3,1] grayscale-[10%]"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5 pointer-events-none mix-blend-multiply opacity-30" />
             </div>
             <p className="mt-4 text-[10px] sm:text-xs tracking-widest uppercase text-black/50 font-medium hidden lg:block">Fig 1. — The Cotton Signature</p>
          </div>

          {/* Right: Cascading Asymmetrical Product Grid */}
          <div className="w-full lg:w-[55%] grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-12 lg:gap-y-16">
             {products.map((item, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 0.8, delay: (idx % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                 className={`flex flex-col group cursor-pointer ${idx % 2 !== 0 ? 'sm:mt-16 xl:mt-24' : ''}`}
               >
                 <div className="relative aspect-[4/5] w-full overflow-hidden bg-white mb-4 p-4 md:p-6 flex items-center justify-center border border-black/5">
                   <Image
                     src={item.image}
                     alt={item.name}
                     fill
                     className="object-contain group-hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1] p-2 drop-shadow-md saturate-75 group-hover:saturate-100"
                   />
                 </div>
                 
                 <div className="flex flex-col border-t border-[#0F1117]/10 pt-3">
                   <div className="flex items-start justify-between gap-3">
                     <h3 className="text-xs sm:text-sm font-medium tracking-wide uppercase text-[#0F1117] transition-colors leading-snug">
                       {item.name}
                     </h3>
                     <p className="text-xs sm:text-sm font-mono tracking-tighter text-[#0F1117]/60">
                       {item.price}
                     </p>
                   </div>
                 </div>
               </motion.div>
             ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}