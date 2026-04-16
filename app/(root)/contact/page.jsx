"use client"

import { motion } from "framer-motion"
import { MapPin, Mail, Phone, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-[#0F1117] selection:bg-[#0F1117] selection:text-white">
      
      {/* 1. Hero Header Area */}
      <div className="w-full bg-[#FAF9F6] pt-32 pb-16 md:pt-48 md:pb-24 px-4 sm:px-6 lg:px-8 border-b border-[#0F1117]/5 relative z-0">
        <div className="container mx-auto max-w-[1400px]">
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-[1.05]"
            >
              Get in <span className="italic font-serif text-[#0F1117]/80">Touch.</span>
            </motion.h1>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 md:mt-10 flex items-center gap-4 text-xs sm:text-sm uppercase tracking-[0.3em] text-[#0F1117]/50 font-medium"
          >
            <span className="w-8 h-[1px] bg-[#0F1117]/20"></span>
            Reach our luxury concierge
          </motion.div>
        </div>
      </div>

      {/* 2. Main Content Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Minimalist Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col"
          >
            <h2 className="text-3xl font-light leading-tight mb-12">
              For general inquiries, editorial requests, or client services.
            </h2>
            
            <form className="flex flex-col gap-12" onSubmit={(e) => e.preventDefault()}>
              
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Full Name / Designation" 
                  className="w-full bg-transparent border-0 border-b border-[#0F1117]/20 pb-4 text-sm focus:ring-0 focus:border-[#0F1117] transition-colors outline-none placeholder:uppercase placeholder:tracking-widest placeholder:text-[10px] placeholder:md:text-xs placeholder:text-[#0F1117]/40" 
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full bg-transparent border-0 border-b border-[#0F1117]/20 pb-4 text-sm focus:ring-0 focus:border-[#0F1117] transition-colors outline-none placeholder:uppercase placeholder:tracking-widest placeholder:text-[10px] placeholder:md:text-xs placeholder:text-[#0F1117]/40" 
                  />
                </div>
                <div className="relative">
                  <input 
                    type="tel" 
                    placeholder="Phone Number (Optional)" 
                    className="w-full bg-transparent border-0 border-b border-[#0F1117]/20 pb-4 text-sm focus:ring-0 focus:border-[#0F1117] transition-colors outline-none placeholder:uppercase placeholder:tracking-widest placeholder:text-[10px] placeholder:md:text-xs placeholder:text-[#0F1117]/40" 
                  />
                </div>
              </div>
              
              <div className="relative">
                <textarea 
                  placeholder="Your Custom Inquiry" 
                  rows="4" 
                  className="w-full bg-transparent border-0 border-b border-[#0F1117]/20 pb-4 text-sm focus:ring-0 focus:border-[#0F1117] transition-colors outline-none placeholder:uppercase placeholder:tracking-widest placeholder:text-[10px] placeholder:md:text-xs placeholder:text-[#0F1117]/40 resize-none" 
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full md:w-max mt-4 border border-[#0F1117]/20 px-10 py-4 text-xs tracking-[0.2em] uppercase hover:bg-[#0F1117] hover:text-white hover:border-[#0F1117] transition-all duration-500 ease-[0.16,1,0.3,1]"
              >
                Submit Request
              </button>
            </form>
          </motion.div>

          {/* Right Column: Information & Google Map */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col gap-12"
          >
            
            {/* Information Infrastructure */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 border-b border-[#0F1117]/10 pb-12">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-[#0F1117]/40 mb-2">
                  <MapPin className="w-4 h-4" />
                  <h3 className="uppercase tracking-widest text-[10px] font-medium">Headquarters</h3>
                </div>
                <p className="text-sm leading-relaxed text-[#0F1117]/80">
                  Cotsoft Industries Private Limited<br/>
                  Plot No 69, Sector A, Industrial Area<br/>
                  Bagroda, Bhopal<br/>
                  Madhya Pradesh — 462026, India
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-[#0F1117]/40 mb-2">
                  <Phone className="w-4 h-4" />
                  <h3 className="uppercase tracking-widest text-[10px] font-medium">Contact</h3>
                </div>
                <div className="text-sm leading-relaxed text-[#0F1117]/80 flex flex-col gap-1">
                  <a href="mailto:info@cotsoft.in" className="hover:text-[#0F1117] transition-colors">info@cotsoft.in</a>
                </div>
              </div>
            </div>

            {/* Google Map Cinematic Embed — Real Cotsoft Location */}
            <div className="w-full aspect-square sm:aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] overflow-hidden bg-[#FAF9F6] border border-[#0F1117]/5 relative group">
              <div className="absolute inset-0 bg-[#0F1117]/5 mix-blend-multiply pointer-events-none z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-1000" />
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d603.334871832342!2d77.54875164014759!3d23.140013795111013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c470008a098bb%3A0x22ce5646aa90b973!2sCotsoft%20Industries%20Private%20Limited!5e1!3m2!1sen!2sin!4v1776319346882!5m2!1sen!2sin"
                className="w-full h-full border-0 filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-[0.16,1,0.3,1] scale-105"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  )
}