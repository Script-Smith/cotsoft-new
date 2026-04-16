"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

// Upgraded realistic luxury e-commerce data
const products = [
  {
    title: 'Breathe Easy Crew',
    price: '₹399',
    category: 'Cotton Core',
    image: '/images/test/1.png',
  },
  {
    title: 'Daily Comfort Ankle',
    price: '₹299',
    category: 'Everyday Essential',
    image: '/images/test/2.png',
  },
  {
    title: 'Softknit Ribbed',
    price: '₹349',
    category: 'Premium Blend',
    image: '/images/test/3.png',
  },
  {
    title: 'Pure Cotton No-Show',
    price: '₹249',
    category: 'Low Profile',
    image: '/images/test/1.png',
  },
]

// Stagger animation rules for the grid
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  }
}

export default function SocksCollection() {
  return (
    <section className="w-full bg-white text-[#0F1117] py-20 md:py-32 overflow-hidden border-b border-[#0F1117]/5 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        
        {/* 1. High-End Typographic Header Lockup */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
           <div className="overflow-hidden">
             <motion.h2 
               initial={{ y: "100%", opacity: 0 }}
               whileInView={{ y: "0%", opacity: 1 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
               className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.05]"
             >
               Socks <span className="italic font-serif text-[#0F1117]/80">by Cotsoft.</span>
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
             <Link 
                href="/category" 
                className="group flex items-center justify-start lg:justify-end gap-3 text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-[#0F1117]/60 hover:text-[#0F1117] transition-colors"
             >
                <span>Browse All Socks</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
             </Link>
           </motion.div>
        </div>

        {/* 2. Seamless Editorial Grid layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-x-3 sm:gap-x-6 gap-y-12 sm:gap-y-16"
        >
          {products.map((product, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group flex flex-col cursor-pointer outline-none"
            >
              {/* Product Frame */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#FAF9F6] border border-black/5 mb-4 sm:mb-6 flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain p-6 md:p-10 object-center group-hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1] mix-blend-multiply opacity-90 group-hover:opacity-100"
                />
                
                {/* Elevated Micro-interaction (Hover Quick Add) */}
                <div className="hidden lg:block absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-20">
                   <button className="w-full bg-white/90 backdrop-blur-md border border-[#0F1117]/10 text-[10px] tracking-widest uppercase py-2.5 font-medium hover:bg-[#0F1117] hover:text-white transition-colors">
                     Quick Add +
                   </button>
                </div>
              </div>

              {/* Minimal Text Details */}
              <div className="flex flex-col border-t border-transparent group-hover:border-[#0F1117]/10 pt-2 transition-colors duration-300">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-[8px] sm:text-[10px] uppercase tracking-widest text-[#0F1117]/40 font-medium whitespace-nowrap">
                      {product.category}
                    </p>
                    <h3 className="text-[10px] sm:text-sm font-medium tracking-wide uppercase text-[#0F1117] leading-snug group-hover:text-[#7D9A75] transition-colors">
                      {product.title}
                    </h3>
                  </div>
                  <p className="text-[10px] sm:text-xs font-mono tracking-tighter text-[#0F1117] shrink-0 mt-[2px]">
                    {product.price}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  )
}
