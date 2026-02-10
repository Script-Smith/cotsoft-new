import Image from 'next/image'
import Link from 'next/link'

export default function NewCollectionBanner() {
  return (
    <section className="w-full h-[50dvh] xl:h-[90dvh] container flex flex-col md:flex-row items-center justify-between bg-[#dedede] overflow-hidden px-6">
      {/* Text Block */}
      <div className="md:w-1/2 flex flex-col max-sm:items-center justify-center h-full text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-light italic leading-snug">
          Unveiling the <br />
          <span className="font-normal not-italic">New Collection</span>
        </h2>
        <Link
          href="/collections/new"
          className="mt-6 inline-block w-fit text-xs uppercase tracking-widest border border-black px-5 py-2 hover:bg-black hover:text-white transition"
        >
          Explore
        </Link>
      </div>

      {/* Image Block */}
      <div className=" relative h-full w-full">
        <Image
          src="/images/col2.png"
          alt="Model - New Collection"
          fill
          className="object-contain object-right"
          priority
        />
      </div>
    </section>
  )
};