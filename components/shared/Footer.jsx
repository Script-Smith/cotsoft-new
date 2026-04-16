"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Collection", href: "/category" },
  { label: "Contact", href: "/contact" },
];

const collectionLinks = [
  { label: "Men's Socks", href: "/category?filter=men" },
  { label: "Women's Socks", href: "/category?filter=women" },
  { label: "Kids' Socks", href: "/category?filter=kids" },
  { label: "Accessories", href: "/category?filter=accessories" },
  { label: "New Arrivals", href: "/category" },
];

const policyLinks = [
  { label: "Shipping Policy", href: "/shipping" },
  { label: "Return Policy", href: "/returns" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

const socials = [
  { icon: Instagram, href: "https://instagram.com/cotsoft", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com/cotsoft", label: "Twitter" },
  { icon: Facebook, href: "https://facebook.com/cotsoft", label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#0F1117] text-white selection:bg-white selection:text-black overflow-hidden">
      

      {/* Middle: Links Grid */}
      <div className="container mx-auto max-w-[1400px] px-4 sm:px-8 py-16 md:py-24 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 border-b border-white/10">
        
        {/* Col 1: Brand */}
        <div className="col-span-2 md:col-span-1 flex flex-col gap-8">
          <Link href="/">
            <Image
              src="/images/logob.png"
              alt="Cotsoft Logo"
              width={90}
              height={90}
              className="invert opacity-90"
            />
          </Link>
          <p className="text-xs text-white/40 leading-relaxed font-light max-w-[200px]">
            Pure cotton products, crafted for comfort. Based in Bhopal, India.
          </p>
          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center border border-white/10 text-white/50 hover:text-white hover:border-white transition-colors rounded-full"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Col 2: Navigation */}
        <div className="flex flex-col gap-6">
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-medium">Navigate</h4>
          <ul className="flex flex-col gap-4">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <Link 
                  href={href}
                  className="text-sm text-white/60 font-light hover:text-white transition-colors group flex items-center gap-2"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Collections */}
        <div className="flex flex-col gap-6">
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-medium">Collections</h4>
          <ul className="flex flex-col gap-4">
            {collectionLinks.map(({ label, href }) => (
              <li key={label}>
                <Link 
                  href={href}
                  className="text-sm text-white/60 font-light hover:text-white transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Policies + Contact */}
        <div className="flex flex-col gap-6">
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-medium">Legal</h4>
          <ul className="flex flex-col gap-4">
            {policyLinks.map(({ label, href }) => (
              <li key={label}>
                <Link 
                  href={href}
                  className="text-sm text-white/60 font-light hover:text-white transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-2 pt-4 border-t border-white/10">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-medium mb-2">Contact</h4>
            <a href="mailto:info@cotsoft.in" className="text-sm text-white/60 hover:text-white transition-colors font-light">info@cotsoft.in</a>
            <address className="text-xs text-white/30 not-italic leading-relaxed mt-1">
              Plot No 69, Sector A, Industrial Area<br />
              Bagroda, Bhopal — 462026<br />
              Madhya Pradesh, India
            </address>
          </div>
        </div>

      </div>

      {/* Bottom: Copyright Bar */}
      <div className="container mx-auto max-w-[1400px] px-4 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[10px] text-white/25 tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Cotsoft Industries. All Rights Reserved.
        </p>
        <p className="text-[10px] text-white/25 tracking-widest uppercase">
          Pure Cotton. Every Thread.
        </p>
      </div>

    </footer>
  );
}