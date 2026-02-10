import Image from 'next/image';

export default function LookbookHighlight() {
  return (
    <section className="w-full h-[80vh] flex flex-col md:flex-row">
      {/* Left Image */}
      <div className="relative w-full md:w-1/2 h-64 md:h-full">
        <Image
          src="/images/min2.png"
          alt="Lookbook"
          layout="fill"
          className='object-cover'
        />
      </div>

      {/* Right Text */}
      <div className="w-full md:w-1/2 bg-[#f7f7f7] flex items-center justify-center p-8">
        <div className="text-center space-y-4">
          <div className="text-4xl font-light italic">L</div>
          <h2 className="text-xl md:text-2xl font-serif">
            Orvane Lookbook:<br />
            <span className="italic">Statement Pieces, Defined</span>
          </h2>
          <button className="mt-4 px-6 py-2 border border-black text-sm font-medium uppercase tracking-wider hover:bg-black hover:text-white transition">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
}
