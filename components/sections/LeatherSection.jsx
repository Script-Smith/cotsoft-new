import Image from "next/image"

export default function LeatherCollection() {
  return (
    <section className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Column - Light Background with Products */}
        <div className="flex flex-col justify-center items-center xl:px-8 xl:py-16">
          <div className="max-w-lg w-full space-y-12">
            {/* Header */}
            <header className="text-center space-y-2">
              <h2 className="text-3xl lg:text-4xl text-gray-800 font-light">
                Iconic <span className="italic font-serif">Leather:</span>
              </h2>
              <p className="text-xl lg:text-2xl text-gray-700 italic font-serif">From Rebel to Classic Shapes</p>
            </header>

            {/* Products Layout */}
            <div className="grid grid-cols-2 xl:gap-8 items-start">
              {/* Left Column - Red Trench Coat */}
              <div className="space-y-4">
                <div className="flex h-[420px] xl:h-[409px] justify-center">
                  <Image
                    src="/images/p2.jpg"
                    alt="Scarlet Croc Trench"
                    width={600}
                    height={600}
                    className="object-cover"
                  />
                </div>
                <div className="text-center space-y-1">
                  <h3 className="text-xs font-medium tracking-wider text-gray-800 uppercase">SCARLET CROC TRENCH</h3>
                  <p className="text-sm text-gray-600">$980</p>
                </div>
              </div>

              {/* Right Column - Two Black Jackets Stacked */}
              <div className="space-y-8">
                {/* Top Black Jacket */}
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <Image
                      src="/images/p1.jpg"
                      alt="Classic Rider Leather Jacket"
                      width={160}
                      height={180}
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center space-y-1">
                    <h3 className="text-xs font-medium tracking-wider text-gray-800 uppercase">
                      CLASSIC RIDER LEATHER JACKET
                    </h3>
                    <p className="text-sm text-gray-600">$650</p>
                  </div>
                </div>

                {/* Bottom Black Jacket */}
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <Image
                      src="/images/p1.jpg"
                      alt="Vintage Noir Leather Jacket"
                      width={160}
                      height={180}
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center space-y-1">
                    <h3 className="text-xs font-medium tracking-wider text-gray-800 uppercase">
                      VINTAGE NOIR LEATHER JACKET
                    </h3>
                    <p className="text-sm text-gray-600">$750</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Hero Image */}
        <div className="relative max-sm:hidden overflow-hidden">
          <Image
            src="/images/side3.png"
            alt="Model in black leather jacket with red lipstick against red background"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  )
}
