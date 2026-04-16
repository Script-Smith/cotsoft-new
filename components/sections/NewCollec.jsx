"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function NewCollectionBanner() {
  const containerRef = useRef(null)
  
  // Parallax mapping for the image and the background text
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])
  const textX = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"])

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-[70vh] lg:h-[90vh] bg-[#e6e6e4] overflow-hidden"
    >
      
      {/* 1. Deep Parallax Background Typography */}
      <motion.div 
        style={{ x: textX }} 
        className="absolute top-[15%] md:top-[10%] left-[5%] whitespace-nowrap opacity-[0.03] pointer-events-none z-0"
      >
         <span className="text-[25vw] font-serif italic tracking-tighter text-[#0F1117] leading-none">
           Archive
         </span>
      </motion.div>

      <div className="container mx-auto max-w-[1500px] h-full flex flex-col-reverse md:flex-row items-center justify-between relative z-10 px-6 sm:px-10 lg:px-12">
        
        {/* 2. Editorial Text Block (Left) */}
        <div className="w-full md:w-1/2 flex flex-col justify-center h-[50%] md:h-full pb-10 md:pb-0 relative z-20">
          
          <div className="overflow-hidden mb-2">
            <motion.h2 
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[7vw] font-light leading-[1.05] text-[#0F1117] tracking-tight"
            >
              New Season, <br />
              <span className="italic font-serif text-[#0F1117]/80">Pure Cotton.</span>
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10"
          >
            {/* Cinematic Hover Button */}
            <Link
              href="/category"
              className="group relative inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 text-[10px] md:text-xs tracking-[0.2em] uppercase overflow-hidden bg-[#0F1117] text-white"
            >
              <span className="relative z-10 group-hover:text-[#0F1117] transition-colors duration-500 ease-[0.16,1,0.3,1]">
                Explore Now
              </span>
              <div className="absolute inset-0 bg-[#FAF9F6] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            </Link>
            
            <div className="hidden sm:block w-[1px] h-10 bg-[#0F1117]/10"></div>
            
            <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#0F1117]/50 max-w-[200px] leading-relaxed">
              Our finest cotton socks — woven for comfort that lasts all day.
            </p>
          </motion.div>
          
        </div>

        {/* 3. Floating Parallax Image (Right) */}
        <div className="w-full md:w-1/2 h-[50%] md:h-full relative flex items-center justify-center md:justify-end pointer-events-none">
           <motion.div 
             style={{ y: imgY }} 
             className="relative w-full h-[120%] lg:h-[135%] right-0 lg:right-[-5%]"
           >
             <Image
               src="/images/purp.png"
               alt="New Collection Signature Model"
               fill
               className="object-contain md:object-right-bottom mix-blend-multiply opacity-90 md:scale-105"
               priority
             />
           </motion.div>
        </div>
        
      </div>
    </section>
  )
}