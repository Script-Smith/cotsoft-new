"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const products = [
  {
    name: 'Classic Rider Jacket',
    price: '₹2,499.00',
    image: '/images/p1.jpg',
  },
  {
    name: 'Scarlet Croc Trench',
    price: '₹3,999.00',
    image: '/images/p2.jpg',
  },
  {
    name: 'Vintage Noir Leather',
    price: '₹2,999.00',
    image: '/images/p1.jpg',
  },
  {
    name: 'Oxblood Moto Jacket',
    price: '₹3,499.00',
    image: '/images/p2.jpg',
  }
];

export default function LeatherCollection() {
  return (
    <section className="w-full bg-white py-20 md:py-32 border-b border-[#0F1117]/5">
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
        
        {/* 1. Typographic Header Lockup */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-20 gap-8">
           <div className="overflow-hidden">
             <motion.h2 
               initial={{ y: "100%", opacity: 0 }}
               whileInView={{ y: "0%", opacity: 1 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
               className="text-5xl md:text-6xl lg:text-7xl leading-[1.05] font-light tracking-tight text-[#0F1117]"
             >
               Iconic <br className="hidden sm:block" />
               <span className="italic font-serif text-[#0F1117]/80">Leather.</span>
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
             <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#0F1117]/50 leading-relaxed font-medium">
               From rebel silhouettes to <br className="hidden lg:block" /> classic foundational shapes.
             </p>
           </motion.div>
        </div>

        {/* 2. The Asymmetrical Target Split Layout */}
        <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-20 items-start relative">
          
          {/* Left: Cascading Asymmetrical Product Grid */}
          <div className="w-full lg:w-[55%] grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-12 lg:gap-y-16">
             {products.map((item, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ duration: 0.8, delay: (idx % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                 className={`flex flex-col group cursor-pointer outline-none ${idx % 2 !== 0 ? 'sm:mt-16 xl:mt-24' : ''}`}
               >
                 <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#FAF9F6] mb-4 p-4 md:p-6 flex items-center justify-center border border-[#0F1117]/5">
                   <Image
                     src={item.image}
                     alt={item.name}
                     fill
                     className="object-contain group-hover:scale-[1.03] transition-transform duration-700 ease-[0.16,1,0.3,1] p-4 sm:p-6 mix-blend-multiply opacity-90 group-hover:opacity-100"
                   />
                 </div>
                 
                 <div className="flex flex-col border-t border-transparent group-hover:border-[#0F1117]/10 pt-2 transition-colors duration-300">
                   <div className="flex justify-between items-start gap-4">
                     <h3 className="text-[10px] sm:text-sm font-medium tracking-widest uppercase text-[#0F1117] group-hover:text-[#7D9A75] transition-colors leading-snug">
                       {item.name}
                     </h3>
                     <p className="text-[10px] sm:text-sm font-mono tracking-tighter text-[#0F1117] shrink-0 mt-[2px]">
                       {item.price}
                     </p>
                   </div>
                 </div>
               </motion.div>
             ))}
          </div>

          {/* Right: Sticky Editorial Image */}
          <div className="w-full lg:w-[45%] lg:sticky lg:top-[120px] h-auto lg:h-[75vh] z-10">
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
               className="relative w-full aspect-[3/4] lg:aspect-auto lg:h-[75vh] overflow-hidden group border border-[#0F1117]/5 bg-[#FAF9F6]"
             >
               <Image
                 src="/images/side3.png"
                 alt="Model in Leather Jacket"
                 fill
                 className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-1000 ease-[0.16,1,0.3,1]"
                 priority
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none mix-blend-multiply opacity-30" />
             </motion.div>
             <p className="mt-4 text-[8px] sm:text-[10px] tracking-widest uppercase text-[#0F1117]/40 font-medium text-right">
               Fig 2. — The Iconic Leather Edit
             </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
