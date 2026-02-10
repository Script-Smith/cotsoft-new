import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] container mx-auto flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Image */}
      <Image
        src="/images/hero.jpg"
        alt="Socks Collection Banner"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black z-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-light italic">Collection</h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-wide mt-2">
          Spring/Summer <br /> 2025
        </h1>
        <Link
          href="/collections/spring-summer-2025"
          className="mt-6 px-6 py-2 border border-black text-xs tracking-widest uppercase hover:bg-black hover:text-white transition"
        >
          Explore
        </Link>
      </div>
    </section>
  )
}
