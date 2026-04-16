"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: "/images/hero.jpg",
    eyebrow: "Pure Cotton Comfort",
    title: "Crafted for Everyday Living",
    link: "/category"
  },
  {
    id: 2,
    image: "/images/side3.png",
    eyebrow: "The Socks Edit — SS 2025",
    title: "Where Comfort Meets Craft",
    link: "/category"
  },
  {
    id: 3,
    image: "/images/hero2.jpg",
    eyebrow: "Cotsoft Industries",
    title: "Cotton Redefined",
    link: "/about"
  }
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);
  
  // To determine direction for potential slide animations, though a simple crossfade is usually smoother
  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setIsAutoPlaying(false);
  };

  // Auto-play interval
  useEffect(() => {
    if (!isAutoPlaying) return;
    autoPlayRef.current = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlaying]);

  return (
    <section className="relative w-full h-[100dvh] overflow-hidden bg-black flex items-center justify-center">
      
      {/* 1. IMAGE CROSSFADE CANVAS */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 z-0 origin-center"
        >
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Gradients directly applied over images to ensure readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* 2. TEXT AND CONTROLS OVERLAY */}
      <div className="absolute inset-x-0 bottom-0 top-0 z-10 flex flex-col justify-end pb-8 sm:pb-12 md:pb-16 px-4 sm:px-8 md:px-16 container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 lg:gap-0 w-full mb-10 md:mb-0">
          
          {/* Main Title & Action Wrapper */}
          <div className="flex flex-col items-start gap-4 md:gap-6 mt-auto">
            {/* Eyebrow */}
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={`eyebrow-${current}`}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="text-xs sm:text-sm font-medium tracking-[0.3em] uppercase text-white/90"
                >
                  {slides[current].eyebrow}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Huge Title Typography */}
            <div className="overflow-hidden pb-2 pr-4">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={`title-${current}`}
                  initial={{ y: "120%", opacity: 0, rotate: 2 }}
                  animate={{ y: "0%", opacity: 1, rotate: 0 }}
                  exit={{ y: "-120%", opacity: 0, rotate: -2 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  className="text-4xl sm:text-6xl md:text-7xl lg:text-[7vw] font-light text-white leading-[1.05] tracking-tight max-w-[90vw] lg:max-w-5xl"
                >
                  {slides[current].title.split(" ").map((word, wordIndex) => (
                    <span key={wordIndex} className={wordIndex > 0 ? "italic font-serif block sm:inline" : "block sm:inline"}>
                      {word}{" "}
                    </span>
                  ))}
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <div className="overflow-hidden mt-4 md:mt-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`link-${current}`}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                >
                  <Link
                    href={slides[current].link}
                    className="group relative inline-flex items-center gap-4 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white text-[10px] sm:text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500 rounded-full w-max"
                  >
                    <span className="font-semibold">Explore</span>
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Pagination and Arrows Bottom Right */}
          <div className="flex flex-col items-start lg:items-end gap-6 shrink-0 z-20 pointer-events-auto">
            {/* Progress Bars */}
            <div className="flex items-center gap-3 w-full lg:w-auto">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrent(idx);
                    setIsAutoPlaying(false);
                  }}
                  className="flex-1 lg:flex-none relative h-10 flex items-center justify-center group"
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <div className="h-[2px] w-full lg:w-16 bg-white/30 relative overflow-hidden transition-all group-hover:bg-white/50">
                    <motion.div 
                      initial={false}
                      animate={{ width: current === idx ? "100%" : "0%" }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="absolute top-0 left-0 h-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                    />
                  </div>
                </button>
              ))}
              <div className="text-white text-xs font-medium tracking-widest ml-4 font-mono hidden sm:block">
                 0{current + 1} / 0{slides.length}
              </div>
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="w-12 h-12 md:w-[60px] md:h-[60px] flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-white hover:text-black hover:scale-110 active:scale-95 transition-all duration-300 backdrop-blur-sm"
              >
                <ArrowLeft className="w-5 h-5 pointer-events-none" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 md:w-[60px] md:h-[60px] flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-white hover:text-black hover:scale-110 active:scale-95 transition-all duration-300 backdrop-blur-sm"
              >
                <ArrowRight className="w-5 h-5 pointer-events-none" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
