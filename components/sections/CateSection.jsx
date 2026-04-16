"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const categories = [
  { 
    label: 'Men', 
    src: '/images/p2.jpg', 
    span: "md:col-span-2 md:row-span-2",
    delay: 0.1
  },
  { 
    label: 'Women', 
    src: '/images/min.png', 
    span: "md:col-span-2 md:row-span-1",
    delay: 0.2
  },
  { 
    label: 'Kids', 
    src: '/images/pink.png', 
    span: "md:col-span-1 md:row-span-1",
    delay: 0.3
  },
  { 
    label: 'Accessories', 
    src: '/images/side3.png', 
    span: "md:col-span-1 md:row-span-1",
    delay: 0.4
  },
];

export default function CategoryShowcase() {
  return (
    <section className="w-full bg-[#FAF9F6] py-20 px-4 md:px-8 border-t border-[#0F1117]/5 overflow-hidden">
      <div className="container mx-auto max-w-[1600px]">
        
        {/* Typographic Header Lockup */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-8">
           <div className="overflow-hidden">
             <motion.h2 
               initial={{ y: "100%", opacity: 0 }}
               whileInView={{ y: "0%", opacity: 1 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
               className="text-5xl md:text-6xl lg:text-7xl leading-[1.05] font-light tracking-tight text-[#0F1117]"
             >
               Shop by <br className="hidden sm:block" />
               <span className="italic font-serif text-[#0F1117]/80">Category.</span>
             </motion.h2>
           </div>
           
           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="max-w-xs flex flex-col gap-4 lg:text-right"
           >
             <span className="hidden md:block h-[1px] w-12 bg-[#0F1117]/20 lg:ml-auto"></span>
             <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#0F1117]/50 leading-relaxed font-medium">
               Cotton comfort for <br className="hidden lg:block" /> every person, every occasion.
             </p>
           </motion.div>
        </div>

        {/* Avant-Garde Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-6 h-[180vh] md:h-[90vh]">
          {categories.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: item.delay, ease: [0.16, 1, 0.3, 1] }}
              className={`relative overflow-hidden group w-full h-full min-h-[40vh] md:min-h-0 bg-white border border-[#0F1117]/5 ${item.span}`}
            >
              <Link href={`/category?filter=${item.label.toLowerCase()}`} className="block w-full h-full relative cursor-pointer outline-none">
                
                {/* Background Image Image */}
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] opacity-90 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Gradient Vignette Overlay to enhance text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none opacity-80 group-hover:opacity-60 transition-opacity duration-700" />

                {/* Typography Overlay */}
                <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end items-start pointer-events-none">
                  <div className="overflow-hidden">
                    <span className="block text-[10px] sm:text-xs font-medium tracking-[0.3em] uppercase text-white/70 mb-2 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out">
                      Department
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-widest uppercase transform group-hover:-translate-y-2 transition-transform duration-700 ease-out">
                    {item.label}
                  </h3>
                </div>

              </Link>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
