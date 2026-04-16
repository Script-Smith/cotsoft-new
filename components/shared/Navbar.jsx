"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { X, ArrowUpRight, Menu } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/category", label: "Collection" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setIsScrolled(latest > 40);
    if (latest > 150 && latest > previous + 5) {
      setIsHidden(true);
    } else if (latest < previous - 5) {
      setIsHidden(false);
    }
  });

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  const isLight = isScrolled || !isHome;

  return (
    <>
      {/* ─── Main Navbar ─────────────────────────────────────── */}
      <motion.nav
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={isHidden && !isMenuOpen ? "hidden" : "visible"}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 
          ${isLight
            ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(15,17,23,0.08)]"
            : "bg-transparent"
          }
        `}
      >
        <div className="container mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10 flex items-center justify-between h-[72px] md:h-[88px]">

          {/* Logo */}
          <Link href="/" className="relative z-10 flex-shrink-0" aria-label="Cotsoft Home">
            <Image
              src="/images/logob.png"
              alt="Cotsoft"
              width={68}
              height={68}
              className={`transition-all duration-500 ${!isLight ? "invert" : ""}`}
            />
          </Link>

          {/* Desktop Nav Links — centered */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12 absolute left-1/2 -translate-x-1/2">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative text-[11px] tracking-[0.2em] uppercase font-medium transition-colors duration-300 group py-1
                    ${isLight
                      ? isActive ? "text-[#0F1117]" : "text-[#0F1117]/50 hover:text-[#0F1117]"
                      : isActive ? "text-white" : "text-white/70 hover:text-white"
                    }
                  `}
                >
                  {label}
                  <span className={`absolute -bottom-0.5 left-0 h-[1.5px] bg-current transition-all duration-300
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Desktop CTA: Become a Distributor */}
            <Link
              href="/contact"
              className={`hidden md:inline-flex items-center gap-2 text-[10px] tracking-[0.15em] uppercase font-medium px-4 py-2 border transition-all duration-300 group
                ${isLight
                  ? "border-[#0F1117]/20 text-[#0F1117]/70 hover:bg-[#0F1117] hover:text-white hover:border-[#0F1117]"
                  : "border-white/25 text-white/80 hover:bg-white hover:text-[#0F1117]"
                }
              `}
            >
              <span>Become a Distributor</span>
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            {/* Mobile-only Hamburger */}
            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
              className={`md:hidden flex flex-col justify-center items-end w-10 h-10 gap-[5px] focus:outline-none`}
            >
              <span className={`block w-6 h-[1.5px] transition-colors ${!isLight ? "bg-white" : "bg-[#0F1117]"}`} />
              <span className={`block w-4 h-[1.5px] transition-colors ${!isLight ? "bg-white" : "bg-[#0F1117]"}`} />
              <span className={`block w-6 h-[1.5px] transition-colors ${!isLight ? "bg-white" : "bg-[#0F1117]"}`} />
            </button>

          </div>
        </div>
      </motion.nav>

      {/* ─── Full-Screen Mobile Menu Overlay ────────────────── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="overlay"
            initial={{ clipPath: "circle(0% at calc(100% - 48px) 52px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 48px) 52px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 48px) 52px)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-[#0F1117] flex flex-col overflow-hidden"
          >
            {/* Decorative BG text */}
            <div className="absolute bottom-[3%] left-[1%] pointer-events-none opacity-[0.03] select-none">
              <span className="text-[35vw] font-serif italic tracking-tighter text-white leading-none">
                CS
              </span>
            </div>

            {/* ── Top bar inside overlay: Logo + Prominent Close ── */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 relative z-10 shrink-0">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <Image src="/images/logob.png" alt="Cotsoft" width={56} height={56} className="invert opacity-80" />
              </Link>

              {/* Large, obvious close button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
                className="flex items-center gap-3 group"
              >
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/50 group-hover:text-white transition-colors hidden sm:block">
                  Close
                </span>
                <div className="w-11 h-11 flex items-center justify-center rounded-full border border-white/20 text-white group-hover:bg-white group-hover:text-[#0F1117] transition-all duration-300">
                  <X className="w-5 h-5" />
                </div>
              </button>
            </div>

            {/* ── Nav Links ── */}
            <nav className="flex-1 flex flex-col justify-center px-8 sm:px-12 py-8 relative z-10 overflow-y-auto">
              <div className="flex flex-col gap-1">
                {navLinks.map(({ href, label }, idx) => (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.45, delay: idx * 0.06 + 0.2, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={href}
                      onClick={() => setIsMenuOpen(false)}
                      className="group flex items-center justify-between py-5 border-b border-white/8"
                    >
                      <div className="flex items-baseline gap-4">
                        <span className="text-[9px] text-white/25 font-mono tabular-nums w-5 shrink-0">0{idx + 1}</span>
                        <span className={`text-4xl sm:text-5xl font-light tracking-tight transition-colors duration-200
                          ${pathname === href
                            ? "text-white italic font-serif"
                            : "text-white/70 group-hover:text-white"
                          }`}>
                          {label}
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-white/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Distributor CTA inside mobile menu */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.42 }}
                className="mt-10"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="group inline-flex items-center gap-3 border border-white/20 px-6 py-4 text-[10px] uppercase tracking-[0.2em] text-white/70 hover:bg-white hover:text-[#0F1117] transition-all duration-300"
                >
                  <span>Become a Distributor</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </motion.div>
            </nav>

            {/* ── Footer Info Row ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="px-8 sm:px-12 py-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10 shrink-0"
            >
              <a href="mailto:info@cotsoft.in" className="text-xs text-white/40 hover:text-white/70 transition-colors">
                info@cotsoft.in
              </a>
              <div className="flex items-center gap-5">
                {["Instagram", "Twitter", "Facebook"].map((s) => (
                  <a key={s} href="#" className="text-[9px] uppercase tracking-widest text-white/30 hover:text-white/70 transition-colors">
                    {s}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}