import Image from 'next/image'

const products = [
  {
    name: 'Maroon Cable Knit',
    price: '$18',
    image: 'https://images.squarespace-cdn.com/content/v1/5e1722e826484743f588e3c5/1696334540381-M40Q0I1IE32UM0UGF4IF/Day2_Shot9_021170170_84_7974copy.jpg?format=300w',
  },
  {
    name: 'Classic Black Rib',
    price: '$16',
    image: 'https://images.squarespace-cdn.com/content/v1/5e1722e826484743f588e3c5/1696334550334-8SMJLTY7TUHMNKFNHZRJ/Day2_Shot1_021131755_42_145v2.jpg?format=300w',
  },
  {
    name: 'Thick Knit Charcoal',
    price: '$20',
    image: 'https://images.squarespace-cdn.com/content/v1/5e1722e826484743f588e3c5/1696334543915-C76OG5ZOKHJ9GGVKTXYC/Day2_Shot2_021160035_01_6070copy.jpg?format=300w',
  },
  {
    name: 'Red Velvet Finish',
    price: '$22',
    image: 'https://images.squarespace-cdn.com/content/v1/5e1722e826484743f588e3c5/1696334541784-VO0ZERFG7RESIRH8YGUE/Day2_Shot7_021140803_14_3809.jpg?format=300w',
  },
]

export default function EditorialSpotlight() {
  return (
    <section className="w-full flex flex-col container md:flex-row items-center justify-between px-6 py-16 gap-10 bg-white">
      {/* Left image with model */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <Image
          src="/images/min.png"
          alt="Socks Editorial"
          height={800}
          width={500}
          className=""
        />
      </div>

      {/* Right grid */}
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl md:text-3xl font-light italic mb-6">
          Timeless elegance<br />
          <span className="not-italic font-serif">in Every Detail</span>
        </h2>

        <div className="grid grid-cols-2 gap-6">
          {products.map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="relative aspect-[1/1.2] w-full">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="mt-2 text-sm font-medium">{item.name}</h3>
              <p className="text-xs text-gray-500">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}