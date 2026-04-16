import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <div className="bg-white selection:bg-black selection:text-white pb-20">
      
      {/* 1. Hero / Title Section */}
      <section className="container mx-auto px-4 sm:px-6 mt-10 md:mt-16 mb-16 md:mb-24">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
          <span className="text-xs uppercase tracking-widest text-gray-500">Established 2024</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight">
            The standard of <br />
            <span className="italic font-serif">comfortable fashion.</span>
          </h1>
        </div>
      </section>

      {/* 2. Hero Image - Full Bleed */}
      <section className="w-full h-[60vh] md:h-[80vh] relative mb-24 md:mb-32">
        <Image
          src="/images/side3.png"
          alt="Cotsoft Quality"
          fill
          className="object-cover object-[center_20%]"
          priority
        />
      </section>

      {/* 3. The Manifesto / Mission */}
      <section className="container mx-auto px-4 sm:px-6 mb-24 md:mb-32">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl leading-snug font-serif text-gray-900">
            "Our mission is to revolutionize the industry through advanced technology, unwavering commitment to innovation, and a deep-rooted focus on sustainability."
          </h2>
          <p className="text-sm md:text-base text-gray-500 uppercase tracking-widest font-light">
            — The Promoters
          </p>
        </div>
      </section>

      {/* 4. The Process - Alternating Asymmetrical Layout */}
      <section className="container mx-auto px-4 sm:px-6 space-y-24 md:space-y-40 mb-24 md:mb-40">
        
        {/* Block 1: Left Text, Right Image */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 md:pr-10">
            <span className="text-xs uppercase tracking-widest text-gray-400">01 / Technology</span>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight">
              Advanced <span className="italic font-serif">Knitting</span>
            </h2>
            <p className="text-gray-600 font-light leading-relaxed text-lg">
              We employ state-of-the-art, multi-feed computerized knitting machines. This superior technology ensures unmatched precision, allowing us to innovate rapidly and maintain the exacting quality standards our brand is known for.
            </p>
          </div>
          <div className="w-full md:w-1/2 aspect-[4/5] relative bg-gray-50">
            <Image
              src="/images/side2.png"
              alt="Advanced Knitting"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Block 2: Left Image, Right Text */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="w-full md:w-1/2 aspect-[4/5] relative bg-gray-50">
            <Image
              src="/images/p2.jpg"
              alt="Sustainable Practices"
              fill
              className="object-cover object-[center_top]"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 md:pl-10">
            <span className="text-xs uppercase tracking-widest text-gray-400">02 / Sustainability</span>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight">
              Ethical <span className="italic font-serif">Practices</span>
            </h2>
            <p className="text-gray-600 font-light leading-relaxed text-lg">
              Sustainability isn't just a word; it's integrated throughout our entire production process. We believe in empowering our workforce and community through ethical practices, fostering a culture of sustainable and responsible growth.
            </p>
          </div>
        </div>

        {/* Block 3: Left Text, Right Image */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 md:pr-10">
            <span className="text-xs uppercase tracking-widest text-gray-400">03 / Foundation</span>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight">
              Premium <span className="italic font-serif">Materials</span>
            </h2>
            <p className="text-gray-600 font-light leading-relaxed text-lg">
              Our commitment starts at the source. We utilize only the finest cotton yarns and synthetic filaments to create fabrics that are not only durable but architecturally designed for optimal air circulation.
            </p>
          </div>
          <div className="w-full md:w-1/2 aspect-[4/5] relative bg-gray-50">
            <Image
              src="/images/p1.jpg"
              alt="Premium Materials"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </section>

      {/* 5. Core Attributes - Minimal Grid */}
      <section className="bg-gray-50 py-20 md:py-32 mb-20 md:mb-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light italic text-gray-900">Signatures of the brand</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {[
              {
                title: "Breathable Comfort",
                desc: "Fabrics designed for optimal air circulation, preventing overheating."
              },
              {
                title: "Odor Resistance",
                desc: "Innovative materials engineered to keep feet fresh all day long."
              },
              {
                title: "Moisture-Wicking",
                desc: "Quick moisture absorption keeping your skin dry and comfortable."
              },
              {
                title: "Quick-Dry",
                desc: "Rapid drying technology built specifically for active, modern lifestyles."
              }
            ].map((trait, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-[1px] bg-gray-300 mb-2"></div>
                <h3 className="text-sm font-medium tracking-wide uppercase text-gray-900">{trait.title}</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{trait.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Leadership & Location - Clean Split text-driven layout */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Leadership List */}
          <div className="lg:col-span-7 pr-0 lg:pr-12 border-b lg:border-b-0 lg:border-r border-gray-200 pb-12 lg:pb-0">
            <h2 className="text-3xl font-light mb-10"><span className="italic font-serif">Leadership</span> Team</h2>
            <div className="flex flex-col w-full border-t border-gray-200">
              {[
                { name: "Sanjana Agrawal", role: "Biotech & Fashion Tech" },
                { name: "Amit Kumar Agrawal", role: "Strategic Expansion" },
                { name: "Sumit Kumar Agrawal", role: "Finance & Admin" },
                { name: "Richa Agarwal", role: "Design & Entrepreneurship" }
              ].map((leader, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-gray-200 gap-2 sm:gap-4">
                  <h3 className="text-xl md:text-2xl font-light text-gray-900">{leader.name}</h3>
                  <span className="text-xs uppercase tracking-widest text-gray-500">{leader.role}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Location Focus */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6">
              <h2 className="text-3xl font-light italic text-gray-900 mb-4">Rooted in Central India</h2>
              <p className="text-gray-600 font-light leading-relaxed text-lg">
                Based in Bhopal, Cotsoft Industries enjoys a strategic location that facilitates efficient market reach and export operations, while granting access to an incredible and skilled talent pool.
              </p>
              <Link
                href="/contact"
                className="inline-block mt-4 px-8 py-3 border border-black text-xs tracking-widest uppercase hover:bg-black hover:text-white transition duration-300"
              >
                Get in touch
              </Link>
            </div>
            <div className="mt-12 w-full aspect-video lg:aspect-square relative uppercase bg-gray-100">
               <Image
                  src="/images/hero.jpg"
                  alt="Bhopal Location"
                  fill
                  className="object-cover"
               />
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}