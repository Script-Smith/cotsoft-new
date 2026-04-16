"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { SlidersHorizontal, X, Check } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "Classic Noir Crew",
    image: "/images/test/1.png",
    demographic: "Men",
    length: "Crew",
    price: "₹399.00",
  },
  {
    id: 2,
    name: "Essential Ankle Knit",
    image: "/images/test/2.png",
    demographic: "Women",
    length: "Ankle",
    price: "₹349.00",
  },
  {
    id: 3,
    name: "Playtime No-Show",
    image: "/images/test/3.png",
    demographic: "Kids",
    length: "No-Show",
    price: "₹299.00",
  },
  {
    id: 4,
    name: "Ribbed Knee-High",
    image: "/images/test/1.png",
    demographic: "Women",
    length: "Knee-High",
    price: "₹499.00",
  },
  {
    id: 5,
    name: "Charcoal Athletic Crew",
    image: "/images/test/2.png",
    demographic: "Men",
    length: "Crew",
    price: "₹449.00",
  },
  {
    id: 6,
    name: "Everyday Low-Cut",
    image: "/images/test/3.png",
    demographic: "Men",
    length: "Ankle",
    price: "₹399.00",
  },
  {
    id: 7,
    name: "Junior Striped Crew",
    image: "/images/test/1.png",
    demographic: "Kids",
    length: "Crew",
    price: "₹349.00",
  },
  {
    id: 8,
    name: "Crimson Velvet Mid",
    image: "/images/test/2.png",
    demographic: "Women",
    length: "Crew",
    price: "₹449.00",
  },
]

const DEMOGRAPHICS = ["All", "Men", "Women", "Kids"]
const LENGTHS = ["Ankle", "Crew", "No-Show", "Knee-High", "Over-Calf"]

export default function CategoryPage() {
  const [activeDemographic, setActiveDemographic] = useState("All")
  const [selectedLengths, setSelectedLengths] = useState([])
  const [sortBy, setSortBy] = useState("featured")
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  
  const [isNavHidden, setIsNavHidden] = useState(false)
  const { scrollY } = useScroll()

  // Track scroll direction for smart sticky header hiding
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    // If scrolled past the hero section (roughly 300px), begin applying the hides
    if (latest > 300 && latest > previous) {
      setIsNavHidden(true)
    } else {
      setIsNavHidden(false)
    }
  })

  // Filter Logic
  const filteredProducts = MOCK_PRODUCTS.filter((product) => {
    const matchesDemographic = activeDemographic === "All" || product.demographic === activeDemographic
    const matchesLength = selectedLengths.length === 0 || selectedLengths.includes(product.length)
    return matchesDemographic && matchesLength
  })

  // Sort Logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return parseFloat(a.price.replace('₹', '')) - parseFloat(b.price.replace('₹', ''))
      case "price-desc":
        return parseFloat(b.price.replace('₹', '')) - parseFloat(a.price.replace('₹', ''))
      default:
        return 0 
    }
  })

  const toggleLength = (length) => {
    setSelectedLengths(prev => 
      prev.includes(length) 
        ? prev.filter(l => l !== length)
        : [...prev, length]
    )
  }

  const clearFilters = () => {
    setSelectedLengths([])
    setActiveDemographic("All")
  }

  return (
    <div className="min-h-screen bg-white text-[#0F1117] selection:bg-[#0F1117] selection:text-white pb-24">
      
      {/* 1. Static Header Hero Area */}
      <div className="w-full bg-[#FAF9F6] pt-24 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#0F1117]/5 relative z-0">
        <div className="container mx-auto max-w-[1600px] flex flex-col items-center text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter leading-tight"
          >
            The <span className="italic font-serif text-[#0F1117]/80">Collection.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#0F1117]/50 font-medium max-w-lg mx-auto"
          >
            Explore our curated staples across all fits and sizes
          </motion.p>
        </div>
      </div>

      {/* 2. Smart Navigation & Filter Bar (Mobile Bottom App Bar / Desktop Sticky Top) */}
      <div 
        className={`z-40 bg-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          /* Mobile: Fixed App Bottom Bar */
          fixed bottom-0 left-0 right-0 border-t border-[#0F1117]/10 shadow-[0_-10px_40px_rgba(0,0,0,0.08)]
          ${isNavHidden ? 'translate-y-full' : 'translate-y-0'}
          
          /* Desktop: Sticky Top Bar below Main Navbar */
          md:sticky md:bottom-auto md:top-[92px] md:border-t-0 md:border-b md:shadow-sm
          ${isNavHidden ? 'md:-translate-y-full' : 'md:translate-y-0'}
        `}
      >
        <div className="container mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row items-center justify-between gap-4 md:gap-6 py-4 md:py-6">
            
            {/* Primary Demographic Tabs */}
            <div className="flex items-center gap-4 md:gap-8 overflow-x-auto no-scrollbar w-full sm:w-auto">
              {DEMOGRAPHICS.map((demo) => (
                <button
                  key={demo}
                  onClick={() => setActiveDemographic(demo)}
                  className={`text-xs md:text-sm font-medium tracking-wide uppercase whitespace-nowrap transition-colors relative pb-1 ${activeDemographic === demo ? 'text-[#0F1117]' : 'text-[#0F1117]/40 hover:text-[#0F1117]/80'}`}
                >
                  {demo}
                  {activeDemographic === demo && (
                    <motion.div 
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0F1117]"
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-end gap-4 md:gap-6 shrink-0">
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className={`flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-widest font-medium transition-colors ${isFilterOpen || selectedLengths.length > 0 ? 'text-[#0F1117]' : 'text-[#0F1117]/50 hover:text-[#0F1117]'}`}
              >
                <SlidersHorizontal className="w-3 h-3 md:w-4 md:h-4" />
                <span className="hidden sm:inline">Lengths</span> 
                {selectedLengths.length > 0 && <span>({selectedLengths.length})</span>}
              </button>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[110px] md:w-[160px] h-8 md:h-10 rounded-none border-0 border-l border-[#0F1117]/10 bg-transparent text-[10px] md:text-xs tracking-widest uppercase focus:ring-0 focus:border-[#0F1117] transition-colors pl-4 pr-0 cursor-pointer">
                  <SelectValue placeholder="Sort" />
                </SelectTrigger>
                <SelectContent className="rounded-none border-[#0F1117]/10">
                  <SelectItem value="featured" className="text-xs uppercase tracking-widest cursor-pointer">Featured</SelectItem>
                  <SelectItem value="price-asc" className="text-xs uppercase tracking-widest cursor-pointer">Lowest Price</SelectItem>
                  <SelectItem value="price-desc" className="text-xs uppercase tracking-widest cursor-pointer">Highest Price</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
          </div>

          <AnimatePresence>
            {isFilterOpen && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden border-t border-[#0F1117]/5"
              >
                <div className="py-6 bg-white flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                  <span className="text-[10px] md:text-xs uppercase tracking-widest font-medium text-[#0F1117]/50">Select Length:</span>
                  <div className="flex flex-wrap items-center gap-2 md:gap-3">
                    {LENGTHS.map((len) => {
                      const isSelected = selectedLengths.includes(len)
                      return (
                        <button
                          key={len}
                          onClick={() => toggleLength(len)}
                          className={`flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full border text-[10px] md:text-xs tracking-widest uppercase transition-all ${
                            isSelected 
                              ? 'border-[#0F1117] bg-[#0F1117] text-white' 
                              : 'border-[#0F1117]/20 text-[#0F1117]/70 hover:border-[#0F1117] bg-white'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 hidden sm:block" />}
                          {len}
                        </button>
                      )
                    })}
                  </div>
                  {selectedLengths.length > 0 && (
                    <button onClick={() => setSelectedLengths([])} className="text-[10px] md:text-xs uppercase tracking-widest text-[#0F1117]/50 hover:text-[#0F1117] underline underline-offset-4 ml-auto">
                      Clear Filters
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="container mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 mt-8 md:mt-12">
        
        <div className="flex items-center justify-between mb-8">
          <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#0F1117]/50">
            Showing {sortedProducts.length} Results {activeDemographic !== "All" && `for ${activeDemographic}`}
          </p>
          {(activeDemographic !== "All" || selectedLengths.length > 0) && (
            <button onClick={clearFilters} className="text-[10px] sm:text-xs uppercase tracking-widest text-[#0F1117]/40 hover:text-[#0F1117] transition-colors border-b border-transparent hover:border-[#0F1117]">
              Clear All Rules
            </button>
          )}
        </div>

        <AnimatePresence mode="popLayout">
          {sortedProducts.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 sm:gap-x-6 gap-y-10 sm:gap-y-16"
            >
              {sortedProducts.map((product) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={product.id}
                  className="group flex flex-col cursor-pointer outline-none"
                >
                  {/* Image Box */}
                  <div className="relative overflow-hidden bg-[#FAF9F6] border border-black/5 aspect-[4/5] w-full mb-3 sm:mb-5">
                    <Image
                      src={product.image || "/images/min.png"}
                      alt={product.name}
                      fill
                      className="object-contain p-4 sm:p-8 group-hover:scale-[1.05] transition-transform duration-700 ease-[0.16,1,0.3,1] opacity-95 group-hover:opacity-100 mix-blend-multiply"
                    />
                    
                    {/* Hover Quick Add overlay - hidden completely on small mobile to avoid layout crowding */}
                    <div className="hidden md:block absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]">
                       <button className="w-full bg-white/90 backdrop-blur-md border border-[#0F1117]/10 text-xs tracking-widest uppercase py-3 font-medium hover:bg-[#0F1117] hover:text-white transition-colors">
                         Quick View
                       </button>
                    </div>
                  </div>
                  
                  {/* Text Data */}
                  <div className="flex flex-col">
                    <div className="flex justify-between items-start gap-2 sm:gap-4">
                      <div className="flex flex-col gap-1">
                        <p className="text-[8px] sm:text-[10px] text-[#0F1117]/40 tracking-widest uppercase font-medium">
                          {product.demographic} • {product.length}
                        </p>
                        <h3 className="font-medium text-[10px] sm:text-sm tracking-widest uppercase text-[#0F1117] leading-snug break-words">
                          {product.name}
                        </h3>
                      </div>
                      <p className="text-[10px] sm:text-sm font-mono tracking-tighter shrink-0">{product.price}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* Empty State */
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="py-24 sm:py-32 flex flex-col items-center justify-center text-center space-y-6 border border-dashed border-[#0F1117]/20 bg-[#FAF9F6]/50"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center shadow-sm text-[#0F1117]/40 border border-[#0F1117]/5">
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-light text-[#0F1117]">No catalog items found</h3>
                <p className="text-[10px] sm:text-xs text-[#0F1117]/50 tracking-widest uppercase">Try removing length filters or changing demographic</p>
              </div>
              <button 
                onClick={clearFilters}
                className="px-6 sm:px-8 py-2 sm:py-3 text-[10px] sm:text-xs tracking-widest uppercase bg-[#0F1117] text-white hover:bg-black transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  )
}
