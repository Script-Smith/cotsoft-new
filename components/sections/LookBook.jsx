"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LookbookHighlight() {
  return (
    <section className="w-full bg-white py-0 border-t border-[#0F1117]/5 overflow-hidden">
      <div className="flex flex-col md:flex-row min-h-[70vh]">
        
        {/* Left: Full-Bleed Cinematic Image */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full md:w-1/2 min-h-[50vh] md:min-h-[70vh] overflow-hidden bg-[#FAF9F6] group"
        >
          <Image
            src="/images/min2.png"
            alt="Cotsoft Lookbook – Cotton Essentials"
            fill
            className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-1000 ease-[0.16,1,0.3,1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          <span className="absolute bottom-6 left-6 text-[10px] text-white/60 uppercase tracking-widest font-medium hidden md:block">
            Fig 3. — Cotsoft Cotton Edit
          </span>
        </motion.div>

        {/* Right: Editorial Text Block */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-1/2 bg-[#FAF9F6] flex items-center justify-center p-10 md:p-16 lg:p-24"
        >
          <div className="flex flex-col items-start gap-8 max-w-md">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#0F1117]/50 font-medium">
              Cotsoft — The Loom Edit
            </span>
            
            <div className="overflow-hidden">
              <motion.h2 
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-5xl font-light text-[#0F1117] leading-tight tracking-tight"
              >
                Born from <br />
                <span className="italic font-serif text-[#0F1117]/80">Pure Cotton.</span>
              </motion.h2>
            </div>
            
            <p className="text-sm text-[#0F1117]/60 font-light leading-relaxed">
              At Cotsoft, every thread is purposeful. Founded on a deep belief in the comfort of natural cotton, we craft socks — and soon, much more — that feel as good as they look. Rooted in Bhopal. Built for everyone.
            </p>

            <div className="flex items-center gap-8">
              <Link
                href="/about"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-[10px] tracking-[0.2em] uppercase overflow-hidden bg-[#0F1117] text-white"
              >
                <span className="relative z-10 group-hover:text-[#0F1117] transition-colors duration-500">
                  Our Story
                </span>
                <div className="absolute inset-0 bg-[#FAF9F6] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
              </Link>
              
              <Link 
                href="/category" 
                className="text-[10px] uppercase tracking-widest text-[#0F1117]/50 hover:text-[#0F1117] transition-colors border-b border-transparent hover:border-[#0F1117] pb-1"
              >
                Browse Collection
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
